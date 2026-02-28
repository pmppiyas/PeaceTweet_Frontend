'use client';

import { useState, useEffect } from 'react';
import { Search, TextAlignJustify, X } from 'lucide-react';
import Logo from '@/app/components/shared/Logo';
import NavMenu from '@/app/components/navbar/NavMenu';
import LeftNavMenu from '@/app/components/navbar/LeftNavMenu';
import RightDrawerMenu from '@/app/components/navbar/RightDrawerMenu';

const PublicNavbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm px-4 h-14 flex items-center">
        {/* Left */}
        <div className="flex items-center gap-2 pr-4">
          <Logo />

          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search PeaceTweet..."
              className="pl-9 pr-4 py-2 bg-slate-100 rounded-full text-sm
              focus:outline-none focus:ring-1 focus:ring-blue-500
              w-64 h-9"
            />
          </div>
        </div>

        {/* Middle */}
        <div className="flex-1 h-full">
          <NavMenu />
        </div>

        {/* Right */}
        <div className="pl-4 flex gap-3 items-center">
          <LeftNavMenu />

          <div
            onClick={() => setOpen(true)}
            className="p-2 rounded-full bg-gray-200 border cursor-pointer hover:opacity-80"
          >
            <TextAlignJustify size={25} />
          </div>
        </div>
      </nav>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-68 lg:w-76 bg-white shadow-lg z-50
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-3 border-b shrink-0 bg-white">
            <h2 className="text-2xl font-semibold text-blue-600">PeaceTweet</h2>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <div className="flex-1 overflow-y-auto ">
            <RightDrawerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicNavbar;
