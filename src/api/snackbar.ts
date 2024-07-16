import { useMemo } from 'react';

// THIRD-PARTY IMPORT
import useSWR, { mutate } from 'swr';

// TYPES IMPORT
import { SnackbarProps } from '~/types/snackbar';

export const endpoints = {
  key: 'snackbar'
};

const initialState: SnackbarProps = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  variant: 'default',
  alert: {
    color: 'primary',
    variant: 'filled'
  },
  transition: 'Fade',
  close: false,
  actionButton: false,
  maxStack: 3,
  dense: false,
  iconVariant: 'usedefault',
  severity: 'success'
};

export function useGetSnackbar() {
  const { data } = useSWR(endpoints.key, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return useMemo(() => ({ snackbar: data! }), [data]);
}

export function openSnackbar(snackbar: SnackbarProps) {
  const { action, open, message, anchorOrigin, variant, alert, transition, close, actionButton, severity } = snackbar;

  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return {
        ...currentSnackbar,
        action: action || initialState.action,
        severity: severity || initialState.severity,
        open: open || initialState.open,
        message: message || initialState.message,
        anchorOrigin: anchorOrigin || initialState.anchorOrigin,
        variant: variant || initialState.variant,
        alert: {
          color: alert?.color || initialState.alert.color,
          variant: alert?.variant || initialState.alert.variant
        },
        transition: transition || initialState.transition,
        close: close || initialState.close,
        actionButton: actionButton || initialState.actionButton
      };
    },
    false
  );
}

export function closeSnackbar() {
  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return { ...currentSnackbar, open: false };
    },
    false
  );
}

export function handlerIncrease(maxStack: number) {
  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return { ...currentSnackbar, maxStack };
    },
    false
  );
}

export function handlerDense(dense: boolean) {
  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return { ...currentSnackbar, dense };
    },
    false
  );
}

export function handlerIconVariants(iconVariant: string) {
  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return { ...currentSnackbar, iconVariant };
    },
    false
  );
}
