// THIRD-PARTY IMPORT
import axios, { AxiosError, AxiosResponse } from 'axios';

// PROJECT IMPORT
import { dispatch } from '~/store';
import { openSnackbar } from '~/store/slices/snackbar';

// TYPES IMPORT
import { SnackbarProps } from '~/types/snackbar';

const axiosServices = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('serviceToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    SnackbarError(error);
  }
);

export const SnackbarError = (error: AxiosError): void => {
  const message = error.response && getErrorMessage(error.response);

  dispatch(
    openSnackbar({
      alert: {
        color: 'error'
      },
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      close: true,
      message,
      open: true,
      severity: 'error',
      variant: 'alert'
    } as SnackbarProps)
  );
};

export const getErrorMessage = (error: AxiosResponse): string => {
  if (error) {
    return error?.data?.message;
  }

  return 'Wrong Services';
};
export default axiosServices;
