import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-cta text-black font-semibold shadow-glow ring-1 ring-white/10 hover:brightness-105 active:scale-[0.99]",
  accent:
    "bg-gradient-to-r from-deck-cyan/90 to-deck-violet/90 text-black font-semibold shadow-glow-cyan hover:brightness-105 active:scale-[0.99]",
  secondary:
    "bg-deck-elevated/80 border border-deck-border text-zinc-100 shadow-inner-light hover:border-deck-orange/35 hover:bg-deck-card",
  ghost: "text-deck-muted hover:text-white",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
