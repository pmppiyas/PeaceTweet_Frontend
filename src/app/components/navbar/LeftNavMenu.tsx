import { Button } from '@/components/ui/button';
import {
  Bell,
  LucideIcon,
  MessageSquareText,
  Plus,
  UserCircle,
} from 'lucide-react';

const LeftNavMenu = () => {
  const items: { icon: LucideIcon; tooltip: string; path: string }[] = [
    {
      icon: MessageSquareText,
      tooltip: 'Tweet',
      path: '/tweet',
    },
    {
      icon: Bell,
      tooltip: 'Notifications',
      path: '/notification',
    },
    {
      icon: UserCircle,
      tooltip: 'Profile',
      path: '/profile',
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <Button
          variant="default"
          size="sm"
          className="hidden sm:flex rounded-full gap-1"
        >
          <Plus size={18} /> <span className="text-xs">Post</span>
        </Button>
        {items.map((item) => (
          <div
            key={item.path}
            className="p-2 rounded-full bg-gray-200 border cursor-pointer hover:opacity-80"
          >
            <item.icon size={25} className="text-foreground  opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavMenu;
