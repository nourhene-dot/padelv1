import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QuickAccessButtonProps {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "primary" | "accent";
  onClick?: () => void;
}

export function QuickAccessButton({ 
  icon: Icon, 
  label, 
  variant = "default",
  onClick 
}: QuickAccessButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200",
        "hover:scale-105 active:scale-95",
        variant === "default" && "bg-secondary text-secondary-foreground hover:shadow-card",
        variant === "primary" && "gradient-primary text-primary-foreground shadow-glow",
        variant === "accent" && "gradient-accent text-accent-foreground shadow-accent-glow"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center",
        variant === "default" && "bg-card shadow-sm",
        variant === "primary" && "bg-primary-foreground/20",
        variant === "accent" && "bg-accent-foreground/20"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}