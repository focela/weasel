// THIRD-PARTY IMPORT
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import { Translation } from 'react-i18next';

// TYPES IMPORT
import { NavItemType } from '~/types/menu';

const icons = { dashboard: DashboardOutlined };

const dashboard: NavItemType = {
  id: 'group-dashboard',
  title: <Translation>{(t) => <>{t('menu.dashboard')}</>}</Translation>,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <Translation>{(t) => <>{t('menu.dashboard')}</>}</Translation>,
      url: '/dashboard',
      type: 'collapse',
      icon: icons.dashboard,
      children: [
        {
          id: 'default',
          title: <Translation>{(t) => <>{t('menu.default')}</>}</Translation>,
          type: 'item',
          url: '/dashboard',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboard;
