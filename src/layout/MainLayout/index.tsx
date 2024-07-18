// MUI IMPORT
import Box from '@mui/material/Box';

// PROJECT IMPORT
import AuthGuard from '~/utils/route-guard/AuthGuard';
import Header from '~/layout/MainLayout/Header';
import Loader from '~/components/Loader';
import { useGetMenuMaster } from '~/api/menu';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/config';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Drawer from '~/layout/MainLayout/Drawer';
import HorizontalBar from '~/layout/MainLayout/Drawer/HorizontalBar';

export default function MainLayout() {
  const { menuMasterLoading } = useGetMenuMaster();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const { layout } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  if (menuMasterLoading) return <Loader />;

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />

        {!isHorizontal ? <Drawer /> : <HorizontalBar />}
      </Box>
    </AuthGuard>
  );
}
