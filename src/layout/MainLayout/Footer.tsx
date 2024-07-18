import { Link as RouterLink } from 'react-router-dom';

// MUI IMPORT
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORT
import { getYear } from '~/utils/getCurrentYear';

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">© {getYear()} Focela Technologies. All rights reserved.</Typography>
      <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
          About us
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
          Privacy
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
          Terms
        </Link>
      </Stack>
    </Stack>
  );
}
