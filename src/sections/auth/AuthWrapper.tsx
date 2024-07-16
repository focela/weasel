import { ReactElement } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// PROJECT IMPORT
import AuthBackground from '~/sections/auth/AuthBackground';
import AuthCard from '~/sections/auth/AuthCard';
import AuthFooter from '~/components/cards/AuthFooter';
import Logo from '~/components/logo';

interface Props {
  children: ReactElement;
}

export default function AuthWrapper({ children }: Props) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}
