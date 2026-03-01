import React from 'react';
import { ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { NAV_ITEMS } from '@/assets/assets';

const DrawerNavMenu = () => {
  return (
    <div className="w-full bg-background text-foreground space-y-2">
      <Accordion type="single" collapsible className="w-full border-none">
        {NAV_ITEMS.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border-none"
          >
            <AccordionTrigger className="hover:bg-accent p-3 rounded-lg hover:no-underline transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-muted p-2 rounded-full">{section.icon}</div>
                <span className="font-semibold text-sm">{section.label}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pl-12 space-y-1 pt-1">
              {section.children.map((child, index) => (
                <MenuLink
                  key={index}
                  href={child.href}
                  icon={child.icon}
                  label={child.label}
                  isToggle={child.isToggle}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MenuLink = ({
  href,
  icon,
  label,
  isToggle = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isToggle?: boolean;
}) => (
  <Link
    href={href}
    className="flex items-center justify-between p-3 hover:bg-accent rounded-md transition-colors"
  >
    <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    {!isToggle && (
      <ChevronRight size={16} className="text-muted-foreground/50" />
    )}
  </Link>
);

export default DrawerNavMenu;
