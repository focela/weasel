import Navigation from '~/layout/MainLayout/Drawer/DrawerContent/Navigation';
import SimpleBar from '~/components/third-party/SimpleBar';
import NavUser from '~/layout/MainLayout/Drawer/DrawerContent/NavUser';

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
      </SimpleBar>
      <NavUser />
    </>
  );
}
