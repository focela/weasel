// THIRD-PARTY IMPORT
import { createSlice } from '@reduxjs/toolkit';

// PROJECT IMPORT
import { SnackbarProps } from '~/types/snackbar';

const initialState: SnackbarProps = {
  action: false,
  actionButton: false,
  alert: {
    color: 'primary',
    variant: 'filled'
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  close: true,
  dense: false,
  iconVariant: 'usedefault',
  maxStack: 3,
  message: 'Note archived',
  open: false,
  severity: 'success',
  transition: 'Fade',
  variant: 'default'
};

const slice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar(state, action) {
      const { actionButton, alert, anchorOrigin, close, message, open, severity, transition, variant } = action.payload;

      state.action = !state.action;
      state.actionButton = actionButton || initialState.actionButton;
      state.alert = {
        color: alert?.color || initialState.alert.color,
        variant: alert?.variant || initialState.alert.variant
      };
      state.anchorOrigin = anchorOrigin || initialState.anchorOrigin;
      state.close = close === false ? close : initialState.close;
      state.message = message || initialState.message;
      state.open = open || initialState.open;
      state.severity = severity || initialState.severity;
      state.transition = transition || initialState.transition;
      state.variant = variant || initialState.variant;
    },

    closeSnackbar(state) {
      state.open = false;
    },

    handlerIncrease(state, action) {
      const { maxStack } = action.payload;
      state.maxStack = maxStack;
    },

    handlerDense(state, action) {
      const { dense } = action.payload;
      state.dense = dense;
    },

    handlerIconVariants(state, action) {
      const { iconVariant } = action.payload;
      state.iconVariant = iconVariant;
    }
  }
});

export default slice.reducer;

export const { openSnackbar, closeSnackbar, handlerIncrease, handlerDense, handlerIconVariants } = slice.actions;
