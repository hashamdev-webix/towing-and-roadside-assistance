import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  const maxWidth = {
    narrow: "max-w-[var(--container-narrow)]",
    default: "max-w-[var(--container-default)]",
    wide: "max-w-[var(--container-wide)]",
  }[size];

  return (
    <div className={cn("w-full mx-auto px-4 md:px-8", maxWidth, className)}>
      {children}
    </div>
  );
}
