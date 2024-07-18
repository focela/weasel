import { useMemo } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

// PROJECT IMPORT
import Customization from '~/layout/MainLayout/Customization';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import FullScreenSection from '~/layout/MainLayout/Header/HeaderContent/FullScreenSection';
import LocalizationSection from '~/layout/MainLayout/Header/HeaderContent/LocalizationSection';
import MegaMenuSection from '~/layout/MainLayout/Header/HeaderContent/MegaMenuSection';
import MessageSection from '~/layout/MainLayout/Header/HeaderContent/MessageSection';
import NotificationSection from '~/layout/MainLayout/Header/HeaderContent/NotificationSection';
import ProfileSection from '~/layout/MainLayout/Header/HeaderContent/ProfileSection';
import SearchSection from '~/layout/MainLayout/Header/HeaderContent/SearchSection';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/config';

export default function HeaderContent() {
  const { layout } = useConfig();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  const localization = useMemo(() => <LocalizationSection />, []);

  return (
    <>
      {layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg && <DrawerHeader open={true} />}
      {!matchDownLg && <SearchSection />}
      {!matchDownLg && megaMenu}
      {!matchDownLg && localization}

      {matchDownLg && <Box sx={{ width: '100%', ml: 1 }} />}

      <NotificationSection />
      <MessageSection />
      {!matchDownLg && <FullScreenSection />}
      <Customization />
      {!matchDownLg && <ProfileSection />}
    </>
  );
}
