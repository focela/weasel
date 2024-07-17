import { useState, ChangeEvent } from 'react';

// MUI IMPORT
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORT
import MainCard from '~/components/cards/MainCard';
import useConfig from '~/hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from '~/api/menu';
import { LAYOUT_CONST } from '~/config';

// ASSETS IMPORT
import defaultLayout from '~/assets/images/customization/default.svg';
import miniMenu from '~/assets/images/customization/mini-menu.svg';
import rtlLayoutImg from '~/assets/images/customization/rtl.svg';

export default function ThemeLayout() {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const { miniDrawer, rtlLayout, layout, onChangeMiniDrawer, onChangeRTL } = useConfig();

  let initialTheme = 'default';
  if (miniDrawer) initialTheme = 'mini';
  if (rtlLayout) initialTheme = 'rtl';

  const [value, setValue] = useState<string | null>(initialTheme);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === 'default') {
      if (rtlLayout) {
        onChangeRTL(false);
      }
      if (miniDrawer) {
        onChangeMiniDrawer(false);
      }
      if (!drawerOpen) {
        handlerDrawerOpen(true);
      }
    }
    if (newValue === 'mini') {
      onChangeMiniDrawer(true);
      if (drawerOpen) {
        handlerDrawerOpen(false);
      }
    }
    if (newValue === 'rtl') {
      onChangeRTL(true);
    }
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={value} onChange={handleRadioChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            value="default"
            control={<Radio value="default" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: value === 'default' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(value === 'default' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Default</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>

        {layout === LAYOUT_CONST.VERTICAL || matchDownLg ? (
          <Grid item>
            <FormControlLabel
              value="mini"
              control={<Radio value="mini" sx={{ display: 'none' }} />}
              sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
              label={
                <MainCard
                  content={false}
                  sx={{ bgcolor: value === 'mini' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                  border={false}
                  {...(value === 'mini' && { boxShadow: true, shadow: theme.customShadows.primary })}
                >
                  <Stack spacing={1.25} alignItems="center">
                    <CardMedia component="img" src={miniMenu} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                    <Typography variant="caption">Mini Drawer</Typography>
                  </Stack>
                </MainCard>
              }
            />
          </Grid>
        ) : null}

        <Grid item>
          <FormControlLabel
            value="rtl"
            control={<Radio value="rtl" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: value === 'rtl' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(value === 'rtl' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={rtlLayoutImg} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">RTL</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
}
