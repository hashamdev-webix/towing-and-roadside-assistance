import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-brand-red hover:bg-brand-red-dark text-white",
    secondary:
      "bg-ink-900 hover:bg-ink-800 text-white",
    outline:
      "bg-white border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white",
    ghost:
      "bg-transparent text-ink-900 hover:bg-ink-100",
    emergency:
      "bg-brand-red hover:bg-brand-red-dark text-white animate-pulse-red",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide rounded-md transition-all duration-200 cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
