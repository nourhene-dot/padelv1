import { Calendar, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchCardProps {
  title: string;
  time: string;
  location: string;
  players: number;
  maxPlayers: number;
  type: "friendly" | "competitive" | "training";
}

export function MatchCard({ 
  title, 
  time, 
  location, 
  players, 
  maxPlayers,
  type 
}: MatchCardProps) {
  const typeStyles = {
    friendly: "bg-sport-green/10 text-sport-green border-sport-green/20",
    competitive: "bg-accent/10 text-accent border-accent/20",
    training: "bg-match-blue/10 text-match-blue border-match-blue/20",
  };

  const typeLabels = {
    friendly: "Friendly",
    competitive: "Competitive",
    training: "Training",
  };

  return (
    <div className="bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <span className={cn(
            "inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 border",
            typeStyles[type]
          )}>
            {typeLabels[type]}
          </span>
        </div>
        <div className="flex -space-x-2">
          {Array.from({ length: Math.min(players, 3) }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center"
            >
              <span className="text-xs font-medium text-secondary-foreground">
                {String.fromCharCode(65 + i)}
              </span>
            </div>
          ))}
          {players > 3 && (
            <div className="w-8 h-8 rounded-full gradient-primary border-2 border-card flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground">
                +{players - 3}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-sport-green" />
          <span>{players}/{maxPlayers} players</span>
        </div>
      </div>

      <button className="w-full mt-4 py-2.5 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
        Join Match
      </button>
    </div>
  );
}