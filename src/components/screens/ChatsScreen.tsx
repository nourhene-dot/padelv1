import { Search, MoreVertical } from "lucide-react";
import { ChatPreview } from "@/components/ChatPreview";

const chats = [
  {
    name: "Ismail",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ismail",
    message: "Hi congratulations it was a great match!",
    time: "6:30 pm",
    unread: 2,
    online: true,
  },
  {
    name: "Amina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amina2",
    message: "When's today's match?",
    time: "5:30 pm",
    unread: 0,
    online: true,
  },
  {
    name: "Zina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zina",
    message: "helllooo",
    time: "4:30 pm",
    unread: 1,
    online: false,
  },
  {
    name: "Med",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=med",
    message: "Will you participate today?",
    time: "2:30 pm",
    unread: 0,
    online: false,
  },
  {
    name: "Ahmed",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed2",
    message: "See you at the court!",
    time: "1:00 pm",
    unread: 0,
    online: true,
  },
];

export function ChatsScreen() {
  return (
    <div className="py-4 space-y-4 animate-slide-up">
      {/* Header */}
      <header className="flex items-center justify-between px-1">
        <h1 className="text-xl font-bold text-foreground">Chats</h1>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <MoreVertical className="w-5 h-5 text-foreground" />
        </button>
      </header>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full pl-12 pr-4 py-3 bg-secondary rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Chat List */}
      <section className="space-y-1">
        {chats.map((chat, i) => (
          <ChatPreview
            key={i}
            name={chat.name}
            avatar={chat.avatar}
            message={chat.message}
            time={chat.time}
            unread={chat.unread}
            online={chat.online}
          />
        ))}
      </section>
    </div>
  );
}