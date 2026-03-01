import DrawerGridButton from '@/app/components/navbar/DrawerGridButton';
import DrawerNavMenu from '@/app/components/navbar/DrawerNavMenu';

const RightDrawerMenu = () => {
  return (
    <div className="p-4">
      <DrawerGridButton />
      <DrawerNavMenu />
    </div>
  );
};

export default RightDrawerMenu;
