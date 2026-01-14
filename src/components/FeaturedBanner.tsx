import { ChevronRight } from "lucide-react";

interface FeaturedBannerProps {
  title: string;
  subtitle: string;
  image: string;
  onAction?: () => void;
}

export function FeaturedBanner({ title, subtitle, image, onAction }: FeaturedBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl h-44 group cursor-pointer" onClick={onAction}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold text-card mb-1">{title}</h3>
        <p className="text-sm text-card/80">{subtitle}</p>
        
        <button className="mt-3 flex items-center gap-1 text-sm font-semibold text-card hover:gap-2 transition-all">
          See more content
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}