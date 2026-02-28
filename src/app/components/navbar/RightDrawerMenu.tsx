import React from 'react';

const RightDrawerMenu = () => {
  return (
    <div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <p
            key={i}
            className="cursor-pointer hover:text-blue-600 border-b pb-2"
          >
            Menu Item {i + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightDrawerMenu;
