export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="hidden lg:block w-75 sticky top-0 h-screen p-4 border-r bg-green-500">
        {/* Menu items... */}
        Left
      </aside>

      {/* Content Area */}
      <main className="flex-1 max-w-150 mx-auto py-8 bg-red-200">Feed</main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-75 sticky top-0 h-screen p-4 bg-green-300">
        {/* Contacts... */}
        right
      </aside>
    </div>
  );
}
