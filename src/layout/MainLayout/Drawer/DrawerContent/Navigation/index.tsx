import Box from '@mui/material/Box';
import { useGetMenuMaster } from '~/api/menu';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/config';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

export default function Navigation() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const { layout } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  return (
    <Box
      sx={{
        pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
        ...(!isHorizontal && { '& > ul:first-of-type': { mt: 0 } }),
        display: isHorizontal ? { xs: 'block', lg: 'flex' } : 'block'
      }}
    >
      {null}
    </Box>
  );
}
