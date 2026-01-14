import { Settings, Trophy, Calendar, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TabType = "upcoming" | "history";

interface MatchHistoryItem {
  id: string;
  title: string;
  date: string;
  location: string;
  result: "win" | "loss";
  score: string;
  partner: string;
  opponents: string[];
  type: "friendly" | "competitive" | "training";
}

const matchHistory: MatchHistoryItem[] = [
  {
    id: "1",
    title: "League Match",
    date: "Jan 12, 2026",
    location: "Padel Club Central",
    result: "win",
    score: "6-4, 6-3",
    partner: "Ahmed",
    opponents: ["Ismail", "Zina"],
    type: "competitive",
  },
  {
    id: "2",
    title: "Friendly Match",
    date: "Jan 10, 2026",
    location: "Sports Center",
    result: "loss",
    score: "4-6, 3-6",
    partner: "Amina",
    opponents: ["Med", "Sara"],
    type: "friendly",
  },
  {
    id: "3",
    title: "Tournament Semi-Final",
    date: "Jan 8, 2026",
    location: "Padel Arena",
    result: "win",
    score: "7-5, 6-4",
    partner: "Ahmed",
    opponents: ["Carlos", "Maria"],
    type: "competitive",
  },
  {
    id: "4",
    title: "Training Session",
    date: "Jan 5, 2026",
    location: "Sports Center",
    result: "win",
    score: "6-2, 6-1",
    partner: "Coach Ali",
    opponents: ["Practice Team"],
    type: "training",
  },
  {
    id: "5",
    title: "Friendly Match",
    date: "Jan 3, 2026",
    location: "Beach Padel Club",
    result: "loss",
    score: "5-7, 4-6",
    partner: "Zina",
    opponents: ["Alex", "Nina"],
    type: "friendly",
  },
];

const upcomingMatches = [
  { time: "10:00", title: "Amical match", type: "friendly" as const, players: ["A", "B"], date: "Today" },
  { time: "14:00", title: "Training session", type: "training" as const, players: ["C", "D", "E"], date: "Today" },
  { time: "18:00", title: "League match", type: "competitive" as const, players: ["F", "G"], date: "Tomorrow" },
];

export function MatchesScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("history");

  const stats = {
    total: matchHistory.length,
    wins: matchHistory.filter(m => m.result === "win").length,
    losses: matchHistory.filter(m => m.result === "loss").length,
  };

  return (
    <div className="py-4 space-y-5 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between px-1">
        <h1 className="text-xl font-bold text-foreground">Matches</h1>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <Settings className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Tab Switcher */}
      <div className="flex gap-2 p-1 bg-secondary rounded-2xl">
        <button
          onClick={() => setActiveTab("history")}
          className={cn(
            "flex-1 py-2.5 rounded-xl text-sm font-medium transition-all",
            activeTab === "history"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          History
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={cn(
            "flex-1 py-2.5 rounded-xl text-sm font-medium transition-all",
            activeTab === "upcoming"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Upcoming
        </button>
      </div>

      {activeTab === "history" ? (
        <>
          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-2xl p-3 text-center border border-border">
              <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="bg-sport-green/10 rounded-2xl p-3 text-center border border-sport-green/20">
              <p className="text-2xl font-bold text-sport-green">{stats.wins}</p>
              <p className="text-xs text-muted-foreground">Wins</p>
            </div>
            <div className="bg-destructive/10 rounded-2xl p-3 text-center border border-destructive/20">
              <p className="text-2xl font-bold text-destructive">{stats.losses}</p>
              <p className="text-xs text-muted-foreground">Losses</p>
            </div>
          </div>

          {/* Match History List */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Match History</h2>
            {matchHistory.map((match) => (
              <div
                key={match.id}
                className={cn(
                  "bg-card rounded-2xl p-4 border-l-4 transition-all hover:shadow-sm",
                  match.result === "win" ? "border-l-sport-green" : "border-l-destructive"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{match.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        match.type === "competitive" && "bg-accent/10 text-accent",
                        match.type === "friendly" && "bg-sport-green/10 text-sport-green",
                        match.type === "training" && "bg-match-blue/10 text-match-blue"
                      )}>
                        {match.type.charAt(0).toUpperCase() + match.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-semibold",
                    match.result === "win" 
                      ? "bg-sport-green/10 text-sport-green" 
                      : "bg-destructive/10 text-destructive"
                  )}>
                    {match.result === "win" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    {match.result.toUpperCase()}
                  </div>
                </div>

                <div className="text-lg font-bold text-foreground mb-3">{match.score}</div>

                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{match.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-sport-green" />
                    <span>Partner: {match.partner} vs {match.opponents.join(" & ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <>
          {/* Upcoming Matches */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Scheduled Matches</h2>
            {upcomingMatches.map((match, i) => (
              <div
                key={i}
                className={cn(
                  "bg-card rounded-2xl p-4 border-l-4 transition-all hover:shadow-sm",
                  match.type === "friendly" && "border-l-sport-green",
                  match.type === "training" && "border-l-match-blue",
                  match.type === "competitive" && "border-l-accent"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{match.title}</h3>
                    <span className={cn(
                      "text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block",
                      match.type === "competitive" && "bg-accent/10 text-accent",
                      match.type === "friendly" && "bg-sport-green/10 text-sport-green",
                      match.type === "training" && "bg-match-blue/10 text-match-blue"
                    )}>
                      {match.type.charAt(0).toUpperCase() + match.type.slice(1)}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {match.players.map((p, pi) => (
                      <div
                        key={pi}
                        className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-bold text-secondary-foreground"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{match.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{match.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Book Button */}
          <div className="pt-2">
            <button className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-base shadow-glow hover:opacity-90 transition-opacity">
              Book a match
            </button>
          </div>
        </>
      )}
    </div>
  );
}