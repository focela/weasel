// MUI IMPORT
import Box from '@mui/material/Box';

// PROJECT IMPORT
import AuthGuard from '~/utils/route-guard/AuthGuard';
import Header from '~/layout/MainLayout/Header';
import Loader from '~/components/Loader';
import { useGetMenuMaster } from '~/api/menu';

export default function MainLayout() {
  const { menuMasterLoading } = useGetMenuMaster();

  if (menuMasterLoading) return <Loader />;

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />
      </Box>
    </AuthGuard>
  );
}
