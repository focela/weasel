// MUI IMPORT
import TeamOutlined from '@ant-design/icons/lib/icons/TeamOutlined';
import { Translation } from 'react-i18next';

// TYPES IMPORT
import { NavItemType } from '~/types/menu';

const icons = { users: TeamOutlined };

const dashboard: NavItemType = {
  id: 'group-system',
  title: <Translation>{(t) => <>{t('menu.system')}</>}</Translation>,
  type: 'group',
  children: [
    {
      id: 'users',
      title: <Translation>{(t) => <>{t('menu.users')}</>}</Translation>,
      url: '/users',
      type: 'collapse',
      icon: icons.users,
      children: [
        {
          id: 'list',
          title: <Translation>{(t) => <>{t('menu.list')}</>}</Translation>,
          type: 'item',
          url: '/users',
          breadcrumbs: false
        },
        {
          id: 'roles',
          title: <Translation>{(t) => <>{t('menu.roles')}</>}</Translation>,
          type: 'item',
          url: '/roles',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboard;
