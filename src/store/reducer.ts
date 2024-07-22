// THIRD-PARTY IMPORT
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// PROJECTS IMPORT
import menuReducer from '~/store/slices/menu';
import snackbarReducer from '~/store/slices/snackbar';
import userReducer from '~/store/slices/user';

const reducers = combineReducers({
  menu: persistReducer(
    {
      key: 'menu',
      storage,
      keyPrefix: 'focela-'
    },
    menuReducer
  ),
  snackbar: snackbarReducer,
  user: userReducer
});

export default reducers;
