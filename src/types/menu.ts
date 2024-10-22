import { ReactNode } from 'react';

// MUI IMPORT
import { ChipProps } from '@mui/material/Chip';

// PROJECT IMPORT
import { NavActionType } from '~/config';

// TYPES IMPORT
import { GenericCardProps } from '~/types';

export type NavActionProps = {
  type: NavActionType;
  label: string;
  function?: any;
  url?: string;
  target?: boolean;
  icon: GenericCardProps['iconPrimary'] | string;
};

export type NavItemType = {
  breadcrumbs?: boolean;
  caption?: ReactNode | string;
  children?: NavItemType[];
  elements?: NavItemType[];
  chip?: ChipProps;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  disabled?: boolean;
  external?: boolean;
  isDropdown?: boolean;
  icon?: GenericCardProps['iconPrimary'] | string;
  id?: string;
  link?: string;
  search?: string;
  target?: boolean;
  title?: ReactNode | string;
  type?: string;
  url?: string | undefined;
  actions?: NavActionProps[];
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type MenuProps = {
  drawerOpen: boolean;
};
