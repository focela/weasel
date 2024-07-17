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
import { handlerDrawerOpen } from '~/api/menu';
import { LAYOUT_CONST } from '~/config';

// ASSETS IMPORT
import containerLayout from '~/assets/images/customization/container.svg';
import defaultLayout from '~/assets/images/customization/default.svg';

export default function ThemeMenuLayout() {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  const { layout, onChangeLayout, onChangeMiniDrawer, onChangeRTL } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  const handleContainerChange = (e: any) => {
    if (e.target.value === LAYOUT_CONST.HORIZONTAL) {
      onChangeMiniDrawer(true);
      onChangeRTL(true);
      onChangeLayout(e.target.value);
      handlerDrawerOpen(false);
    } else {
      onChangeMiniDrawer(true);
      onChangeRTL(true);
      onChangeLayout(e.target.value);
      handlerDrawerOpen(true);
    }
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={layout} onChange={handleContainerChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value={LAYOUT_CONST.VERTICAL} sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: !isHorizontal ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(!isHorizontal && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Vertical</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value={LAYOUT_CONST.HORIZONTAL} sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: isHorizontal ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(isHorizontal && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={containerLayout} alt="horizontal" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Horizontal</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
}
