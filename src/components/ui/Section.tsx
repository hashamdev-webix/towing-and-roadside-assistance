import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "dark" | "red";
};

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bg = {
    white: "bg-surface-white text-ink-800",
    muted: "bg-surface-muted text-ink-800",
    dark: "bg-ink-900 text-white",
    red: "bg-brand-red text-white",
  }[background];

  return (
    <section id={id} className={cn("py-16 md:py-24", bg, className)}>
      {children}
    </section>
  );
}
