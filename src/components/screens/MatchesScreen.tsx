import { ArrowLeft, Settings, Calendar, MapPin, Clock, Users } from "lucide-react";
import { MatchCard } from "@/components/MatchCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const days = [
  { day: "Mon", date: 18 },
  { day: "Tue", date: 19, active: true },
  { day: "Wed", date: 20 },
  { day: "Thu", date: 21 },
  { day: "Fri", date: 22 },
  { day: "Sat", date: 23 },
];

const scheduleItems = [
  { time: "08:00", title: null },
  { time: "10:00", title: "Amical match", type: "friendly" as const, players: ["A", "B"] },
  { time: "12:00", title: null },
  { time: "14:00", title: "Open training session", type: "training" as const, players: ["C", "D", "E"] },
  { time: "16:00", title: null },
];

export function MatchesScreen() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="py-4 space-y-6 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-foreground">Matches</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <Settings className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Day Selector */}
      <section className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {days.map((d, i) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            className={cn(
              "flex flex-col items-center px-4 py-3 rounded-2xl min-w-[60px] transition-all duration-200",
              selectedDay === i
                ? "gradient-primary text-primary-foreground shadow-glow"
                : "bg-card border border-border text-muted-foreground hover:border-primary/30"
            )}
          >
            <span className="text-xs font-medium">{d.day}</span>
            <span className="text-lg font-bold">{d.date}</span>
          </button>
        ))}
      </section>

      {/* Schedule */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Schedule today</h2>
        <div className="relative">
          {scheduleItems.map((item, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <div className="w-14 text-sm font-medium text-muted-foreground pt-1">
                {item.time}
              </div>
              <div className="flex-1 relative">
                {item.title ? (
                  <div className={cn(
                    "p-4 rounded-2xl border-l-4 transition-all hover:shadow-card",
                    item.type === "friendly" && "bg-sport-green/10 border-l-sport-green",
                    item.type === "training" && "bg-match-blue/10 border-l-match-blue"
                  )}>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      {item.players?.map((p, pi) => (
                        <div
                          key={pi}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-12 border border-dashed border-border rounded-xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Button */}
      <div className="pt-4">
        <button className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold text-base shadow-glow hover:opacity-90 transition-opacity">
          Book a match
        </button>
      </div>
    </div>
  );
}