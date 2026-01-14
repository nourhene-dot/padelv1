import { Bell, Search } from "lucide-react";
import { PlayerStory } from "@/components/PlayerStory";
import { QuickAccessButton } from "@/components/QuickAccessButton";
import { MatchCard } from "@/components/MatchCard";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { Trophy, Video, Calendar, Users } from "lucide-react";
import padelHero from "@/assets/padel-hero.jpg";

const stories = [
  { name: "Your story", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=you", isOwn: true },
  { name: "Anna", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anna", hasStory: true },
  { name: "Aziz", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aziz", hasStory: true },
  { name: "Amina", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amina", hasStory: true },
  { name: "Ahmed", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed", hasStory: false },
];

const quickAccess = [
  { icon: Trophy, label: "Matches", variant: "default" as const },
  { icon: Users, label: "Leagues", variant: "default" as const },
  { icon: Video, label: "Videos", variant: "default" as const },
  { icon: Calendar, label: "Book", variant: "default" as const },
];

export function HomeScreen() {
  return (
    <div className="py-4 space-y-6 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between px-1">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-gradient">PADEL</span>
            <span className="text-foreground"> SPORT</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 gradient-accent rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-accent-foreground">3</span>
            </span>
          </button>
        </div>
      </header>

      {/* Stories */}
      <section className="overflow-x-auto -mx-4 px-4">
        <div className="flex gap-3">
          {stories.map((story, i) => (
            <PlayerStory
              key={i}
              name={story.name}
              avatar={story.avatar}
              hasStory={story.hasStory}
              isOwn={story.isOwn}
            />
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      <section>
        <FeaturedBanner
          title="Weekend Tournament"
          subtitle="Join the summer padel championship"
          image={padelHero}
        />
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">Direct Access</h2>
        <div className="grid grid-cols-4 gap-3">
          {quickAccess.map((item, i) => (
            <QuickAccessButton
              key={i}
              icon={item.icon}
              label={item.label}
              variant={item.variant}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Matches */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">Upcoming Matches</h2>
          <button className="text-sm font-medium text-primary hover:underline">
            See all
          </button>
        </div>
        <div className="space-y-3">
          <MatchCard
            title="Amical Match"
            time="Today, 18:00"
            location="Padel Club Central"
            players={3}
            maxPlayers={4}
            type="friendly"
          />
          <MatchCard
            title="Training Session"
            time="Tomorrow, 10:00"
            location="Sports Center"
            players={2}
            maxPlayers={4}
            type="training"
          />
        </div>
      </section>
    </div>
  );
}