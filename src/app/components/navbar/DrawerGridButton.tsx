import React from 'react';
import {
  Users,
  Bookmark,
  Rss,
  History,
  BookHeart,
  Newspaper,
  Clapperboard,
  LayoutGrid,
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    id: 1,
    label: 'Friends',
    icon: <Users className="text-blue-500" />,
    href: '/friends',
  },
  {
    id: 2,
    label: 'Saved',
    icon: <Bookmark className="text-pink-500" />,
    href: '/saved',
  },
  {
    id: 3,
    label: 'Feed',
    icon: <Rss className="text-sky-500" />,
    href: '/feed',
  },
  {
    id: 4,
    label: 'Groups',
    icon: <LayoutGrid className="text-blue-600" />,
    href: '/groups',
  },
  {
    id: 5,
    label: 'Memories',
    icon: <History className="text-blue-400" />,
    href: '/memories',
  },
  {
    id: 6,
    label: 'Hadis',
    icon: <BookHeart className="text-emerald-600" />,
    href: '/hadis',
  },
  {
    id: 7,
    label: 'News',
    icon: <Newspaper className="text-gray-700" />,
    href: '/news',
  },
  {
    id: 8,
    label: 'Fun',
    icon: <Clapperboard className="text-red-500" />,
    href: '/entertainment',
  },
];

const DrawerGridButton = () => {
  return (
    <div className=" bg-background">
      <h2 className="text-xl font-bold mb-4 px-2 text-foreground">Menu</h2>

      <div className="grid grid-cols-2 gap-3">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href} className="block">
            <div className="bg-card hover:bg-accent border border-border p-4 rounded-xl shadow-sm transition-all flex flex-col items-start gap-2 active:scale-95">
              <div className="p-1">
                {React.cloneElement(
                  item.icon as React.ReactElement,
                  {
                    size: 28,
                  } as any
                )}
              </div>
              <span className="text-sm font-semibold text-card-foreground">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DrawerGridButton;
