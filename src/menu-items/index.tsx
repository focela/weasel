// PROJECT IMPORT
import dashboard from '~/menu-items/dashboard';
import system from '~/menu-items/system';
import { NavItemType } from '~/types/menu';

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, system]
};

export default menuItems;
