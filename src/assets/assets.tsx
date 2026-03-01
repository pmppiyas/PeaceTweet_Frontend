import {
  HelpCircle,
  Settings,
  LifeBuoy,
  Flag,
  Lock,
  UserCog,
  EyeOff,
  Moon,
  FileText,
} from 'lucide-react';

export const NAV_ITEMS = [
  {
    id: 'help',
    label: 'Help & Support',
    icon: <HelpCircle size={22} className="text-blue-500" />,
    children: [
      {
        href: '/support',
        label: 'Support Center',
        icon: <LifeBuoy size={18} />,
      },
      {
        href: '/terms',
        label: 'Terms & Policies',
        icon: <FileText size={18} />,
      },
      { href: '/report', label: 'Report a Problem', icon: <Flag size={18} /> },
    ],
  },
  {
    id: 'settings',
    label: 'Settings & Privacy',
    icon: <Settings size={22} className="text-gray-500 dark:text-gray-400" />,
    children: [
      { href: '/settings', label: 'Settings', icon: <UserCog size={18} /> },
      {
        href: '/privacy-checkup',
        label: 'Privacy Checkup',
        icon: <Lock size={18} />,
      },
      {
        href: '/activity-log',
        label: 'Activity Log',
        icon: <EyeOff size={18} />,
      },
      {
        href: '/dark-mode',
        label: 'Dark Mode',
        icon: <Moon size={18} />,
        isToggle: true,
      },
    ],
  },
];
