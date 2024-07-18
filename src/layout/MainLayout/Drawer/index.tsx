import { handlerDrawerOpen, useGetMenuMaster } from '~/api/menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import MiniDrawerStyled from '~/layout/MainLayout/Drawer/MiniDrawerStyled';
import { useMemo } from 'react';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import DrawerContent from '~/layout/MainLayout/Drawer/DrawerContent';
import Drawer from '@mui/material/Drawer';
import { DRAWER_WIDTH } from '~/config';

interface Props {
  window?: () => Window;
}

export default function MainDrawer({ window }: Props) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen} />, [drawerOpen]);
  const drawerContent = useMemo(() => <DrawerContent />, []);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownLg ? (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: '1px solid',
              borderRightColor: 'divider',
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
