"use client";

import { useEffect, useMemo, useState } from "react";

type ClickState = "none" | "click1" | "click2" | "click3" | "annoyed";

const DEFAULT_IMAGES = [
  "/frog/default1.png",
  "/frog/default2.png",
  "/frog/default3.png",
  "/frog/default4.png",
];

const CLICK_IMAGES: Record<Exclude<ClickState, "none">, string> = {
  click1: "/frog/click1.png",
  click2: "/frog/click2.png",
  click3: "/frog/click3.png",
  annoyed: "/frog/annoyed.png",
};

const HOVER_IMAGE = "/frog/hover.png";

export default function InteractiveFrog() {
  const [isHovered, setIsHovered] = useState(false);
  const [clickState, setClickState] = useState<ClickState>("none");
  const [defaultImageIndex, setDefaultImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDefaultImageIndex((prev) => (prev + 1) % DEFAULT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (clickState !== "annoyed") {
      return;
    }

    const timer = setTimeout(() => {
      setClickState("none");
    }, 5000);

    return () => clearTimeout(timer);
  }, [clickState]);

  const handleClick = () => {
    if (clickState === "annoyed") {
      return;
    }

    setClickState((prev) => {
      if (prev === "none") return "click1";
      if (prev === "click1") return "click2";
      if (prev === "click2") return "click3";
      return "annoyed";
    });
  };

  const currentImage = useMemo(() => {
    if (clickState !== "none") {
      return CLICK_IMAGES[clickState];
    }
    if (isHovered) {
      return HOVER_IMAGE;
    }
    return DEFAULT_IMAGES[defaultImageIndex];
  }, [clickState, isHovered, defaultImageIndex]);

  const tilt = useMemo(() => {
    if (clickState === "click1") return "-3deg";
    if (clickState === "click2") return "3deg";
    if (clickState === "click3") return "0deg";
    if (clickState === "annoyed") return "0deg";
    return isHovered ? "3deg" : "0deg";
  }, [clickState, isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (clickState !== "annoyed") {
          setClickState("none");
        }
      }}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Interactive frog"
      style={{
        position: "relative",
        width: "80px",
        height: "80px",
        cursor: "pointer",
        transition: "transform 300ms",
        transform: `rotate(${tilt})`,
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
        userSelect: "none",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "60px",
          height: "60px",
        }}
      />
      <img
        src={currentImage}
        alt="Interactive frog"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          borderRadius: "40px",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
