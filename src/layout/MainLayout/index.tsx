// MUI IMPORT
import Box from '@mui/material/Box';

// PROJECT IMPORT
import AuthGuard from '~/utils/route-guard/AuthGuard';

export default function MainLayout() {
  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>This is MainLayout</Box>
    </AuthGuard>
  );
}
