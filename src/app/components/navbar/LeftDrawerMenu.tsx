import BloodRequestBox from '@/app/components/navbar/BloodRequestBox';
import FriendRequestBox from '@/app/components/navbar/FriendRequestBox';

const LeftDrawerMenu = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <FriendRequestBox />
      <BloodRequestBox />
    </div>
  );
};

export default LeftDrawerMenu;
