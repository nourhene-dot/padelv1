import { cn } from "@/lib/utils";

interface ChatPreviewProps {
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread?: number;
  online?: boolean;
}

export function ChatPreview({ 
  name, 
  avatar, 
  message, 
  time, 
  unread = 0,
  online = false 
}: ChatPreviewProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-secondary/50 transition-colors cursor-pointer">
      <div className="relative flex-shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {online && (
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-sport-green rounded-full border-2 border-card" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <h4 className={cn(
            "font-semibold text-foreground truncate",
            unread > 0 && "font-bold"
          )}>
            {name}
          </h4>
          <span className={cn(
            "text-xs flex-shrink-0",
            unread > 0 ? "text-primary font-medium" : "text-muted-foreground"
          )}>
            {time}
          </span>
        </div>
        <p className={cn(
          "text-sm truncate",
          unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"
        )}>
          {message}
        </p>
      </div>

      {unread > 0 && (
        <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-accent-foreground">{unread}</span>
        </div>
      )}
    </div>
  );
}