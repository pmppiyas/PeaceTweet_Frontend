import { Home, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const NavMenu = () => {
  const items: {
    icon: LucideIcon;
    label: string;
    link: string;
  }[] = [
    {
      icon: Home,
      label: 'Home',
      link: '/',
    },
  ];

  const active = true;

  return (
    <TooltipProvider delay={500}>
      <div className="flex items-center gap-1 md:gap-4 h-full">
        {items.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger>
              <Link
                href={item.link}
                className={`flex flex-col items-center justify-center cursor-pointer min-w-15  h-full border-b-2 transition-all ${
                  active
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-black'
                } `}
              >
                <item.icon size={25} className="mb-2" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className=" border-none text-xs">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default NavMenu;
