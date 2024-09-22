import React from "react";

interface ITypographyProps {
  variant: "primary" | "secondary" | "tertiary" | "base";
  size: "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  className?:string
}

const Typography: React.FC<ITypographyProps> = ({
  variant,
  size,
  weight,
  children,
  className
}) => {
  let fontSize = "text-[24px]";
  let fontWeight = "font-normal";
  let fontColor = "text-[#272B36]";

  // variant
  if (variant === "primary") {
    fontColor = "text-[#272B36]";
  } else if (variant === "secondary") {
    fontColor = "text-[#DA0A0C]";
  } else if (variant === "tertiary") {
    fontColor = "text-[#FFCC2A]";
  } else if (variant === "base") {
    fontColor = "text-[#ffffff]";
  }

  //   size
  if (size === "sm") {
    fontSize = "text-[16px]";
  } else if (size === "md") {
    fontSize = "text-[32px]";
  } else if (size === "lg") {
    fontSize = "lg:text-[72px] md:text-[42px]";
  }

  //   weight
  if (weight === "normal") {
    fontWeight = "font-normal";
  } else if (weight === "medium") {
    fontWeight = "font-medium";
  } else if (weight === "semibold") {
    fontWeight = "font-semibold";
  } else if (weight === "bold") {
    fontWeight = "font-bold";
  }

  return (
    <div>
      <p className={`${fontSize} ${fontWeight} ${fontColor} ${className}`}>{children}</p>
    </div>
  );
};

export default Typography;
