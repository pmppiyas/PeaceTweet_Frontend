import LeftDrawerMenu from '@/app/components/navbar/LeftDrawerMenu';
import RightDrawerMenu from '@/app/components/navbar/RightDrawerMenu';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen  max-w-7xl mx-auto overflow-hidden gap-12">
      {/* Left Sidebar */}
      <aside className="hidden lg:block w-72 h-full overflow-y-auto custom-scrollbar ">
        <LeftDrawerMenu />
      </aside>

      {/* Feed / Content */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar max-w-3xl mx-auto py-8 ">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-72 h-full overflow-y-auto custom-scrollbar ">
        <RightDrawerMenu />
      </aside>
    </div>
  );
};

export default CommonLayout;
