// MUI IMPORT
import { AlertProps } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';

export interface SnackbarProps {
  action: boolean;
  actionButton: boolean;
  alert: AlertProps;
  anchorOrigin: SnackbarOrigin;
  close: boolean;
  dense: boolean;
  iconVariant: string;
  maxStack: number;
  message: string;
  open: boolean;
  severity: 'info' | 'success' | 'warning' | 'error';
  transition: string;
  variant: string;
}
