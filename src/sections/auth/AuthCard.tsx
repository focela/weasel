// MUI IMPORT
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

// PROJECT IMPORT
import MainCard, { MainCardProps } from '~/components/cards/MainCard';

export default function AuthCard({ children, ...other }: MainCardProps) {
  return (
    <MainCard
      sx={{ maxWidth: { xs: 400, lg: 500 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme: Theme) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}
