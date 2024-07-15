// MUI IMPORT
import { PaletteColorOptions, SimplePaletteColorOptions } from '@mui/material/styles';

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: PaletteColorOptions;
};

export type CustomShadowProps = {
  button: string;
  error: string;
  errorButton: string;
  grey: string;
  greyButton: string;
  info: string;
  infoButton: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  success: string;
  successButton: string;
  text: string;
  warning: string;
  warningButton: string;
  z1: string;
};
