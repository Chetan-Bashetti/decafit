import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: "div" | "section";
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  as: Tag = "div",
  glow = false,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-deck-border/80 bg-deck-card/90 p-6 shadow-inner-light backdrop-blur-md ${
        glow ? "ring-glow" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
