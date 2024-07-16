import { useMemo } from 'react';

// THIRD-PARTY IMPORT
import useSWR, { mutate } from 'swr';

// TYPES IMPORT
import { MenuProps } from '~/types/menu';

export const endpoints = {
  key: 'menu',
  master: 'master'
};

const initialState: MenuProps = {
  isDashboardDrawerOpened: true,
  isComponentDrawerOpened: true
};

export function useGetMenuMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return useMemo(
    () => ({
      menuMaster: data as MenuProps,
      menuMasterLoading: isLoading
    }),
    [data, isLoading]
  );
}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {
  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster: any) => {
      return { ...currentMenuMaster, isDashboardDrawerOpened };
    },
    false
  );
}
