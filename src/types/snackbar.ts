// MUI IMPORT
import { AlertProps } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';

export interface SnackbarProps {
  action: boolean;
  open: boolean;
  message: string;
  anchorOrigin: SnackbarOrigin;
  variant: string;
  alert: AlertProps;
  transition: string;
  close: boolean;
  actionButton: boolean;
  dense: boolean;
  maxStack: number;
  iconVariant: string;
}
