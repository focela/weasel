// MUI IMPORT
import * as Theme from '@mui/material';

// PROJECTS IMPORT
import { CustomShadowProps } from '~/types/theme';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
  }
}