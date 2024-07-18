import { ChangeEvent } from 'react';

// MUI IMPORT
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import { presetDarkPalettes, presetPalettes, PalettesProps } from '@ant-design/colors';
import { useTranslation } from 'react-i18next';

// PROJECT IMPORT
import MainCard from '~/components/cards/MainCard';
import useConfig from '~/hooks/useConfig';

// ASSETS IMPORT
import colorLayout from '~/assets/images/customization/theme-color.svg';

interface ColorProps {
  id: string;
  primary: string;
  lighter: string;
  label: string;
  shadow: string;
}

export default function ColorScheme() {
  const theme = useTheme();
  const { t } = useTranslation();

  const { mode, presetColor, onChangePresetColor } = useConfig();
  const colors: PalettesProps = mode === 'dark' ? presetDarkPalettes : presetPalettes;

  const { blue } = colors;

  const colorOptions: ColorProps[] = [
    {
      id: 'default',
      primary: blue[5],
      lighter: blue[0],
      label: t('customization.default'),
      shadow: `0 0 0 2px ${alpha(blue[5], 0.2)}`
    },
    {
      id: 'theme1',
      primary: mode === 'dark' ? '#305bdd' : '#3366FF',
      lighter: mode === 'dark' ? '#1c2134' : '#D6E4FF',
      label: t('customization.themeColor', { attribute: 1 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#305bdd' : '#3366FF', 0.2)}`
    },
    {
      id: 'theme2',
      primary: mode === 'dark' ? '#655ac8' : '#7265E6',
      lighter: mode === 'dark' ? '#222130' : '#EEEDFC',
      label: t('customization.themeColor', { attribute: 2 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#655ac8' : '#7265E6', 0.2)}`
    },
    {
      id: 'theme3',
      primary: mode === 'dark' ? '#0a7d3e' : '#068e44',
      lighter: mode === 'dark' ? '#1a231f' : '#E6F3EC',
      label: t('customization.themeColor', { attribute: 3 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#0a7d3e' : '#068e44', 0.2)}`
    },
    {
      id: 'theme4',
      primary: mode === 'dark' ? '#5d7dcb' : '#3c64d0',
      lighter: mode === 'dark' ? '#1d212d' : '#f0f6ff',
      label: t('customization.themeColor', { attribute: 4 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#5d7dcb' : '#3c64d0', 0.2)}`
    },
    {
      id: 'theme5',
      primary: mode === 'dark' ? '#d26415' : '#f27013',
      lighter: mode === 'dark' ? '#32221a' : '#fff4e6',
      label: t('customization.themeColor', { attribute: 5 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#d26415' : '#f27013', 0.2)}`
    },
    {
      id: 'theme6',
      primary: mode === 'dark' ? '#288d99' : '#2aa1af',
      lighter: mode === 'dark' ? '#1c2628' : '#e1f0ef',
      label: t('customization.themeColor', { attribute: 6 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#288d99' : '#2aa1af', 0.2)}`
    },
    {
      id: 'theme7',
      primary: mode === 'dark' ? '#05934c' : '#00a854',
      lighter: mode === 'dark' ? '#1a2721' : '#d1e8d99c',
      label: t('customization.themeColor', { attribute: 7 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#05934c' : '#00a854', 0.2)}`
    },
    {
      id: 'theme8',
      primary: mode === 'dark' ? '#058478' : '#009688',
      lighter: mode === 'dark' ? '#1a2524' : '#c1d6d066',
      label: t('customization.themeColor', { attribute: 8 }),
      shadow: `0 0 0 2px ${alpha(mode === 'dark' ? '#058478' : '#009688', 0.2)}`
    }
  ];

  const handlePresetColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePresetColor(event.target.value as string);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={presetColor} onChange={handlePresetColorChange}>
      <Grid container spacing={2} sx={{ ml: 0 }}>
        {colorOptions.map((color, index) => (
          <Grid item key={index}>
            <FormControlLabel
              control={<Radio value={color.id} sx={{ display: 'none' }} />}
              sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
              label={
                <MainCard
                  content={false}
                  sx={{ bgcolor: presetColor === color.id ? color.lighter : 'secondary.lighter', p: 1 }}
                  border={false}
                  boxShadow
                  shadow={presetColor === color.id ? color.shadow : theme.customShadows.z1}
                >
                  <Stack spacing={1.5} alignItems="center">
                    <CardMedia
                      component="img"
                      src={colorLayout}
                      alt="Vertical"
                      sx={{
                        border: '1px solid',
                        borderColor: color.primary,
                        borderRadius: 1,
                        bgcolor: color.primary,
                        width: 40,
                        height: 40
                      }}
                    />
                    <Typography variant="caption">{color.label}</Typography>
                  </Stack>
                </MainCard>
              }
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
