import { useGetMenuMaster } from '~/api/menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import MiniDrawerStyled from '~/layout/MainLayout/Drawer/MiniDrawerStyled';
import { useMemo } from 'react';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import DrawerContent from '~/layout/MainLayout/Drawer/DrawerContent';

interface Props {
  window?: () => Window;
}

export default function MainDrawer({ window }: Props) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen} />, [drawerOpen]);
  const drawerContent = useMemo(() => <DrawerContent />, []);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownLg ? (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : null}
    </Box>
  );
}
