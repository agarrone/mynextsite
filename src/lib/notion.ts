import "server-only";

import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionEntry = {
  id: string;
  title: string;
  url: string | null;
  year: string;
  coverUrl: string | null;
  category: string | null;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const rawDatabaseId = process.env.NOTION_DATABASE_ID;
const databaseId = rawDatabaseId ? rawDatabaseId.split("?")[0] : undefined;

let dataSourceIdPromise: Promise<string | null> | null = null;

const getDataSourceId = async () => {
  if (!databaseId) {
    throw new Error("NOTION_DATABASE_ID is not set.");
  }

  if (!dataSourceIdPromise) {
    dataSourceIdPromise = notion.databases
      .retrieve({ database_id: databaseId })
      .then((db) => {
        const dataSources = "data_sources" in db ? db.data_sources : undefined;
        if (Array.isArray(dataSources) && dataSources.length > 0) {
          return dataSources[0].id;
        }
        return null;
      });
  }

  return dataSourceIdPromise;
};

const getCoverUrl = (page: PageObjectResponse) => {
  if (page.cover?.type === "file") {
    return page.cover.file.url;
  }
  if (page.cover?.type === "external") {
    return page.cover.external.url;
  }

  const coverProperty = page.properties?.Cover;
  if (coverProperty?.type === "files" && coverProperty.files.length > 0) {
    const file = coverProperty.files[0];
    if (file.type === "file") {
      return file.file.url;
    }
    if (file.type === "external") {
      return file.external.url;
    }
  }

  return null;
};

const getTitle = (page: PageObjectResponse) => {
  const titleProperty = page.properties?.Name;
  if (titleProperty?.type === "title" && titleProperty.title.length > 0) {
    return titleProperty.title.map((item) => item.plain_text).join("");
  }
  return "Untitled";
};

const getCategory = (page: PageObjectResponse) => {
  const categoryProperty = page.properties?.Catégorie;
  if (categoryProperty?.type === "select" && categoryProperty.select) {
    return categoryProperty.select.name;
  }
  return null;
};

const getYear = (page: PageObjectResponse) => {
  const yearProperty = page.properties?.Year;
  if (yearProperty?.type === "select" && yearProperty.select) {
    return yearProperty.select.name;
  }
  return "Unknown";
};

const getUrl = (page: PageObjectResponse) => {
  const urlProperty = page.properties?.URL;
  if (urlProperty?.type === "url" && urlProperty.url) {
    return urlProperty.url;
  }
  return null;
};

export const fetchNotionEntries = async (category?: string) => {
  const dataSourceId = await getDataSourceId();
  if (!dataSourceId) {
    throw new Error("Notion data source ID not found for the database.");
  }

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: category
      ? {
          property: "Catégorie",
          select: {
            equals: category,
          },
        }
      : undefined,
    sorts: [
      { property: "Year", direction: "descending" },
      { property: "Name", direction: "ascending" },
    ],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => ({
      id: page.id,
      title: getTitle(page),
      url: getUrl(page),
      year: getYear(page),
      coverUrl: getCoverUrl(page),
      category: getCategory(page),
    }));
};

export const groupEntriesByYear = (entries: NotionEntry[]) => {
  const groups = new Map<string, NotionEntry[]>();

  for (const entry of entries) {
    const year = entry.year || "Unknown";
    if (!groups.has(year)) {
      groups.set(year, []);
    }
    groups.get(year)?.push(entry);
  }

  return Array.from(groups.entries()).sort((a, b) => {
    const yearA = Number.parseInt(a[0], 10);
    const yearB = Number.parseInt(b[0], 10);
    if (Number.isNaN(yearA) || Number.isNaN(yearB)) {
      return b[0].localeCompare(a[0]);
    }
    return yearB - yearA;
  });
};
