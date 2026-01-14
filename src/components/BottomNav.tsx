import { Home, Trophy, PlusCircle, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "matches", label: "Matches", icon: Trophy },
  { id: "create", label: "Create", icon: PlusCircle },
  { id: "chats", label: "Chats", icon: MessageCircle },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-border">
      <div className="container max-w-lg mx-auto">
        <div className="flex items-center justify-around py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            const isCreate = tab.id === "create";

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                  isActive && !isCreate && "text-primary",
                  !isActive && !isCreate && "text-muted-foreground hover:text-foreground",
                  isCreate && "relative -mt-6"
                )}
              >
                {isCreate ? (
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
                    "gradient-accent shadow-accent-glow",
                    isActive && "scale-110"
                  )}>
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                ) : (
                  <>
                    <Icon className={cn(
                      "w-6 h-6 transition-transform duration-200",
                      isActive && "animate-tab-active"
                    )} />
                    <span className={cn(
                      "text-xs font-medium",
                      isActive && "font-semibold"
                    )}>
                      {tab.label}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}