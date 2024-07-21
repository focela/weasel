// THIRD-PARTY IMPORT
import { createSlice } from '@reduxjs/toolkit';

// TYPES IMPORT
import { MenuProps } from '~/types/menu';

const initialState: MenuProps = {
  drawerOpen: true
};

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    }
  }
});

export default slice.reducer;

export const { openDrawer } = slice.actions;
