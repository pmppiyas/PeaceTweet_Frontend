import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="bg-blue-600 p-1.5 rounded-full cursor-pointer">
        <h1 className="text-white text-2xl font-medium">PT</h1>
      </div>
    </Link>
  );
};

export default Logo;
