import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { MatchesScreen } from "@/components/screens/MatchesScreen";
import { ChatsScreen } from "@/components/screens/ChatsScreen";
import { CreateScreen } from "@/components/screens/CreateScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "matches":
        return <MatchesScreen />;
      case "chats":
        return <ChatsScreen />;
      case "create":
        return <CreateScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="container max-w-lg mx-auto">
        {renderScreen()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;