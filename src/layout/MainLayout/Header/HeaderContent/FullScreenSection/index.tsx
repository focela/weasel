import { useCallback, useState } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import { useTranslation } from 'react-i18next';

// PROJECT IMPORT
import IconButton from '~/components/extended/IconButton';

// ASSETS IMPORT
import FullscreenExitOutlined from '@ant-design/icons/FullscreenExitOutlined';
import FullscreenOutlined from '@ant-design/icons/FullscreenOutlined';

export default function FullScreenSection() {
  const { t } = useTranslation();

  const theme = useTheme();
  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    if (document && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Tooltip title={open ? t('title.exit-fullscreen') : t('title.fullscreen')}>
        <IconButton
          color="secondary"
          variant="light"
          sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
          aria-label="fullscreen toggler"
          onClick={handleToggle}
        >
          {open ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
