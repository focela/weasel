// MUI IMPORT
import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';

interface Props {
  theme: Theme;
  open: boolean;
}

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }: Props) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0)
}));

export default DrawerHeaderStyled;
