import { createSlice } from '@reduxjs/toolkit';
import { UserProps } from '~/types/user';
import { Payload } from '~/types';
import { dispatch } from '~/store';
import { getList } from '~/api/user';

const initialState: UserProps = {
  loading: false,
  users: [],
  error: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pending(state, action) {
      state.loading = action.payload;
    },

    fulfilled(state, action) {
      console.log(action.payload.data.data);
      state.users = action.payload.data.data;
    },

    rejected(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default slice.reducer;

export function getUsers({ query, callback }: Payload) {
  return async () => {
    try {
      dispatch(slice.actions.pending(true));
      const response = await getList(query);
      dispatch(slice.actions.fulfilled(response));

      if (callback && response) {
        callback(response);
      }
    } catch (error) {
      dispatch(slice.actions.rejected(error));

      if (callback && error) {
        callback(error);
      }
    }
  };
}
