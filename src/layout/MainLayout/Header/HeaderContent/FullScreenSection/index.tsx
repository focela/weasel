import { useCallback, useState } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import FullscreenOutlined from '@ant-design/icons/FullscreenOutlined';
import FullscreenExitOutlined from '@ant-design/icons/FullscreenExitOutlined';

// PROJECT IMPORT
import IconButton from '~/components/extended/IconButton';

export default function FullScreenSection() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    if (document && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Tooltip title={open ? 'Exit Fullscreen' : 'Fullscreen'}>
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
