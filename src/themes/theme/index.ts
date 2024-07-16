// PROJECT IMPORT
import Default from '~/themes/theme/default';

// THIRD-PARTY IMPORT
import { PalettesProps } from '@ant-design/colors';

// TYPES IMPORT
import { PaletteThemeProps } from '~/types/theme';

export default function Theme(colors: PalettesProps, presetColor: string, mode: string): PaletteThemeProps {
  switch (presetColor) {
    default:
      return Default(colors);
  }
}
