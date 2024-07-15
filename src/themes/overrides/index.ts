// MUI IMPORT
import { Theme } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import { merge } from 'lodash';

// PROJECTS IMPORT
import Button from '~/themes/overrides/Button';

export default function ComponentsOverrides(theme: Theme) {
  return merge(Button(theme));
}
