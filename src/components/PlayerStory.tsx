import { cn } from "@/lib/utils";

interface PlayerStoryProps {
  name: string;
  avatar: string;
  hasStory?: boolean;
  isOwn?: boolean;
}

export function PlayerStory({ name, avatar, hasStory = false, isOwn = false }: PlayerStoryProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
      <div className={cn(
        "relative w-16 h-16 rounded-full p-0.5",
        hasStory && "bg-gradient-to-tr from-primary via-accent to-sport-green",
        !hasStory && !isOwn && "bg-border"
      )}>
        <div className="w-full h-full rounded-full bg-card p-0.5">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {isOwn && (
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 gradient-primary rounded-full flex items-center justify-center border-2 border-card">
            <span className="text-xs text-primary-foreground font-bold">+</span>
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-foreground truncate max-w-[70px]">
        {isOwn ? "Your story" : name}
      </span>
    </div>
  );
}