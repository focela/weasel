// MUI IMPORT
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORT
import DrawerHeaderStyled from '~/layout/MainLayout/Drawer/DrawerHeader/DrawerHeaderStyled';
import Logo from '~/components/logo';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/config';

interface Props {
  open: boolean;
}

export default function DrawerHeader({ open }: Props) {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  const { layout } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : '60px',
        width: isHorizontal ? { xs: '100%', lg: '424px' } : 'inherit',
        paddingTop: isHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0
      }}
    >
      <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
}
