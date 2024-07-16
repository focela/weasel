// MUI IMPORT
import * as Theme from '@mui/material';

// PROJECT IMPORT
import { CustomShadowProps } from '~/types/theme';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
  }
}
