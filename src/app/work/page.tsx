import Link from "next/link";
import { Download, Undo2 } from "lucide-react";

const workItems = [
  {
    company: "DINUM",
    companyHref: "https://www.data.gouv.fr/products",
    role: "Responsable produit data",
    date: "Depuis 2024",
    description:
      "Responsable produit de data.gouv.fr et de mettre en cohérence l’offre de l’ensemble des produits données de la DINUM.",
    image: "/work/dinum.png",
  },
  {
    company: "data.gouv.fr",
    companyHref: "https://www.data.gouv.fr/",
    role: "Product Owner",
    date: "2022 - 2024",
    description:
      "Définition de la vision, de la stratégie, priorisation des travaux, promotion du produit, suivi de l'impact et de l'expérience.",
    image: "/work/dinum.png",
  },
  {
    company: "Etalab",
    companyHref: "https://www.data.gouv.fr/",
    role: "Data Editor",
    date: "2020 - 2022",
    description:
      "Définition et mise en oeuvre de la stratégie éditoriale de data.gouv.fr.",
    image: "/work/dinum.png",
  },
  {
    company: "Etalab",
    companyHref: "https://www.data.gouv.fr/",
    role: "Chargé de mission Open Data",
    date: "2020",
    description:
      "Accompagner les administrations dans leur stratégie et démarche d'ouverture des données.",
    image: "/work/dinum.png",
  },
  {
    company: "OpenFisca",
    companyHref: "https://openfisca.org/fr/",
    role: "Business Developer",
    date: "2019",
    description:
      "Accélérer la croissance du produit et de l'engager dans un modèle économique durable.",
    image: "/work/openfisca.png",
  },
  {
    company: "Agence Française de Développement",
    companyHref: "https://www.afd.fr/fr",
    role: "Chargé de projet egovernement",
    date: "2018",
    description:
      "Identification des principaux enjeux, opportunités et risques pour aider l'agence à se positionner.",
    image: "/work/afd.png",
  },
];

export default function WorkPage() {
  return (
    <div className="flex min-h-screen justify-center bg-[#ffffff] text-[#1c222e]">
      <main className="w-full max-w-[550px] px-2">
        <section className="fade-up flex flex-col gap-5 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[16px] text-[#7a7a7a] hover:text-[#1c222e] hover:underline"
          >
            <Undo2 className="h-4 w-4" />
            Home
          </Link>

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[20px] font-semibold leading-[1.6]">Work</h1>
            <p className="text-[16px] leading-relaxed text-[#1c222e]">
              Aspirant à une action publique plus ouverte et transparente, je
              suis product manager avec un intérêt marqué pour le design
              produit.
            </p>
            <a
              href="https://drive.google.com/file/d/1IV_B-LKwwtt3maLDK1G2l9kSsxmphCQk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[16px] text-[#7a7a7a] hover:text-[#1c222e] hover:underline"
            >
              <Download className="h-4 w-4" />
              PDF
            </a>
          </div>

          <div className="flex flex-col gap-[30px]">
            {workItems.map((item) => (
              <div key={`${item.company}-${item.role}`} className="space-y-1.5">
                <div className="flex min-w-0 items-center gap-2 overflow-hidden text-[16px] whitespace-nowrap">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[15px] w-[15px] rounded-[3px] object-cover"
                  />
                  <a
                    href={item.companyHref}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-[#1c222e] hover:underline"
                  >
                    {item.company}
                  </a>
                  <span className="text-[#7a7a7a]">-</span>
                  <span className="text-[#7a7a7a]">{item.role}</span>
                </div>
                <div className="text-[16px] text-[#7a7a7a]">{item.date}</div>
                <p className="text-[16px] leading-relaxed text-[#1c222e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
