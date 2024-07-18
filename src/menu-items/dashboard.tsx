// assets
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import GoldOutlined from '@ant-design/icons/GoldOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

// type
import { NavItemType } from '~/types/menu';
import { Translation } from 'react-i18next';

const icons = { dashboard: DashboardOutlined, components: GoldOutlined, loading: LoadingOutlined };

const dashboard: NavItemType = {
  id: 'group-dashboard',
  title: <Translation>{(t) => <>{t('menu.dashboard')}</>}</Translation>,
  type: 'group',
  icon: icons.dashboard,
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
