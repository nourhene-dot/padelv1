import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Trophy, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const matchTypes = [
  { id: "friendly", label: "Friendly", icon: Users },
  { id: "competitive", label: "Competitive", icon: Trophy },
  { id: "training", label: "Training", icon: Dumbbell },
];

export function CreateScreen() {
  const [selectedType, setSelectedType] = useState("friendly");
  const [players, setPlayers] = useState(2);

  return (
    <div className="py-4 space-y-6 animate-slide-up">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-xl font-bold text-foreground">Create a Match</h1>
        <p className="text-sm text-muted-foreground mt-1">Set up your next padel session</p>
      </header>

      {/* Match Type */}
      <section>
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">Match Type</h2>
        <div className="grid grid-cols-3 gap-3">
          {matchTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
                selectedType === type.id
                  ? "border-primary bg-primary/5 shadow-glow"
                  : "border-border bg-card hover:border-primary/30"
              )}
            >
              <type.icon className={cn(
                "w-6 h-6",
                selectedType === type.id ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-xs font-medium",
                selectedType === type.id ? "text-primary" : "text-muted-foreground"
              )}>
                {type.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Date & Time */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground">Date & Time</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
            <Calendar className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="text-sm font-semibold text-foreground">Today</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
            <Clock className="w-5 h-5 text-accent" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="text-sm font-semibold text-foreground">18:00</p>
            </div>
          </button>
        </div>
      </section>

      {/* Location */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground">Location</h2>
        <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
          <MapPin className="w-5 h-5 text-sport-green" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Select venue</p>
            <p className="text-sm font-semibold text-foreground">Padel Club Central</p>
          </div>
        </button>
      </section>

      {/* Players */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground">Number of Players</h2>
        <div className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-match-blue" />
            <span className="font-semibold text-foreground">Players needed</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPlayers(Math.max(1, players - 1))}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold hover:bg-secondary/80"
            >
              -
            </button>
            <span className="w-8 text-center text-lg font-bold text-foreground">{players}</span>
            <button
              onClick={() => setPlayers(Math.min(4, players + 1))}
              className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold"
            >
              +
            </button>
          </div>
        </div>
      </section>

      {/* Create Button */}
      <div className="pt-4">
        <button className="w-full py-4 rounded-2xl gradient-accent text-accent-foreground font-semibold text-base shadow-accent-glow hover:opacity-90 transition-opacity">
          Create Match
        </button>
      </div>
    </div>
  );
}