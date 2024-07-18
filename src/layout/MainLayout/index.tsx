import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

// PROJECT IMPORT
import AuthGuard from '~/utils/route-guard/AuthGuard';
import Breadcrumbs from '~/components/extended/Breadcrumbs';
import Drawer from '~/layout/MainLayout/Drawer';
import Footer from '~/layout/MainLayout/Footer';
import Header from '~/layout/MainLayout/Header';
import HorizontalBar from '~/layout/MainLayout/Drawer/HorizontalBar';
import Loader from '~/components/Loader';
import useConfig from '~/hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from '~/api/menu';
import { LAYOUT_CONST } from '~/config';

export default function MainLayout() {
  const { menuMasterLoading } = useGetMenuMaster();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const matchDownXl = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));

  const { container, layout, miniDrawer } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen(!matchDownXl);
    }
  }, [matchDownLg, matchDownXl, miniDrawer]);

  if (menuMasterLoading) return <Loader />;

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />

        {!isHorizontal ? <Drawer /> : <HorizontalBar />}

        <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />

          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              ...(container && { px: { xs: 0, sm: 2 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumbs />
            <Outlet />
            <Footer />
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
}
