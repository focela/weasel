// THIRD-PARTY IMPORT
import { createSlice } from '@reduxjs/toolkit';

// TYPES IMPORT
import { MenuProps } from '~/types/menu';

const initialState: MenuProps = {
  isDashboardDrawerOpened: true,
  isComponentDrawerOpened: true
};

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.isDashboardDrawerOpened = action.payload;
    }
  }
});

export default slice.reducer;
