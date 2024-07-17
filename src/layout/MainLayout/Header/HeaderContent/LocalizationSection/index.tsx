import { useRef, useState } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// THIRD-PARTY IMPORT
import TranslationOutlined from '@ant-design/icons/TranslationOutlined';

// PROJECT IMPORT
import useConfig from '~/hooks/useConfig';
import IconButton from '~/components/extended/IconButton';
import Transitions from '~/components/extended/Transitions';

export default function LocalizationSection() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const { mode, i18n, onChangeLocalization } = useConfig();

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (lang: string) => {
    onChangeLocalization(lang);
    setOpen(false);
  };

  const iconBackColorOpen = mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
        aria-label="open localization"
        ref={anchorRef}
        aria-controls={open ? 'localization-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <TranslationOutlined />
      </IconButton>
      <Popper
        placement={matchDownMd ? 'bottom-start' : 'bottom'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [matchDownMd ? 0 : 0, 9] } }] }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={matchDownMd ? 'top-right' : 'top'} in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.customShadows.z1 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  component="nav"
                  sx={{
                    p: 0,
                    width: '100%',
                    minWidth: 200,
                    maxWidth: { xs: 250, md: 290 },
                    bgcolor: 'background.paper',
                    borderRadius: 0.5
                  }}
                >
                  <ListItemButton selected={i18n === 'en'} onClick={() => handleListItemClick('en')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">English</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (English)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'ja'} onClick={() => handleListItemClick('ja')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">日本語</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (Japanese)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'vi'} onClick={() => handleListItemClick('vi')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">Tiếng Việt</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (Vietnamese)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
