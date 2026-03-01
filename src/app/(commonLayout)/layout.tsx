import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden gap-12">
      {/* Left Sidebar */}
      <aside className="hidden lg:block w-72 h-full overflow-y-auto custom-scrollbar border-r p-4 bg-green-500">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>Left Item {i + 1}</p>
        ))}
      </aside>

      {/* Feed / Content */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar max-w-3xl mx-auto py-8 ">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-72 h-full overflow-y-auto custom-scrollbar  p-4 bg-green-300">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>Right Item {i + 1}</p>
        ))}
      </aside>
    </div>
  );
};

export default CommonLayout;
