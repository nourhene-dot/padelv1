import { Settings, Edit2, Trophy, Calendar, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Matches", value: 42, icon: Calendar },
  { label: "Wins", value: 28, icon: Trophy },
  { label: "Friends", value: 156, icon: Users },
];

const menuItems = [
  { label: "My Matches History", icon: Calendar },
  { label: "Achievements", icon: Trophy },
  { label: "Friends", icon: Users },
  { label: "Settings", icon: Settings },
];

export function ProfileScreen() {
  return (
    <div className="py-4 space-y-6 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between px-1">
        <h1 className="text-xl font-bold text-foreground">Profile</h1>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <Settings className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Profile Card */}
      <section className="relative bg-card rounded-3xl p-6 shadow-card overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=you"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-primary/20"
            />
            <button className="absolute -bottom-1 -right-1 w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <Edit2 className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Alex Martinez</h2>
            <p className="text-sm text-muted-foreground">Level: Intermediate</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="px-2 py-0.5 rounded-full bg-sport-green/10 text-sport-green text-xs font-medium">
                A3 Ranked
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col items-center p-4 rounded-2xl",
              i === 0 && "bg-primary/5 border-2 border-primary/20",
              i === 1 && "bg-sport-green/5 border-2 border-sport-green/20",
              i === 2 && "bg-match-blue/5 border-2 border-match-blue/20"
            )}
          >
            <stat.icon className={cn(
              "w-6 h-6 mb-2",
              i === 0 && "text-primary",
              i === 1 && "text-sport-green",
              i === 2 && "text-match-blue"
            )} />
            <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Menu */}
      <section className="space-y-2">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </section>
    </div>
  );
}