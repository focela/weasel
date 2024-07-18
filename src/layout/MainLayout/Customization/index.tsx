import { useMemo, useState } from 'react';

// MUI IMPORT
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// THIRD-PARTY IMPORT
import { useTranslation } from 'react-i18next';

// PROJECT IMPORT
import AnimateButton from '~/components/extended/AnimateButton';
import ColorScheme from '~/layout/MainLayout/Customization/ColorScheme';
import DefaultThemeMode from '~/layout/MainLayout/Customization/ThemeMode';
import IconButton from '~/components/extended/IconButton';
import MainCard from '~/components/cards/MainCard';
import SimpleBar from '~/components/third-party/SimpleBar';
import ThemeFont from '~/layout/MainLayout/Customization/ThemeFont';
import ThemeLayout from '~/layout/MainLayout/Customization/ThemeLayout';
import ThemeMenuLayout from '~/layout/MainLayout/Customization/ThemeMenuLayout';
import ThemeWidth from '~/layout/MainLayout/Customization/ThemeWidth';
import useConfig from '~/hooks/useConfig';

// ASSETS IMPORT
import BgColorsOutlined from '@ant-design/icons/BgColorsOutlined';
import BorderInnerOutlined from '@ant-design/icons/BorderInnerOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import FontColorsOutlined from '@ant-design/icons/FontColorsOutlined';
import HighlightOutlined from '@ant-design/icons/HighlightOutlined';
import LayoutOutlined from '@ant-design/icons/LayoutOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';

export default function Customization() {
  const { t } = useTranslation();

  const { mode } = useConfig();
  const iconBackColorOpen = mode === 'dark' ? 'background.default' : 'grey.100';

  const colorScheme = useMemo(() => <ColorScheme />, []);
  const themeFont = useMemo(() => <ThemeFont />, []);
  const themeLayout = useMemo(() => <ThemeLayout />, []);
  const themeMenuLayout = useMemo(() => <ThemeMenuLayout />, []);
  const themeMode = useMemo(() => <DefaultThemeMode />, []);
  const themeWidth = useMemo(() => <ThemeWidth />, []);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <AnimateButton type="rotate">
          <IconButton
            color="secondary"
            variant="light"
            sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
            onClick={handleToggle}
            aria-label="settings toggler"
          >
            <SettingOutlined />
          </IconButton>
        </AnimateButton>
      </Box>
      <Drawer
        sx={{ zIndex: 2001 }}
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 340
          }
        }}
      >
        {open && (
          <MainCard
            title={t('customization.title')}
            sx={{
              border: 'none',
              borderRadius: 0,
              height: '100vh',
              '& .MuiCardHeader-root': {
                color: 'background.paper',
                bgcolor: 'primary.main',
                '& .MuiTypography-root': { fontSize: '1rem' }
              }
            }}
            content={false}
            secondary={
              <IconButton shape="rounded" size="small" onClick={handleToggle} sx={{ color: 'background.paper' }}>
                <CloseCircleOutlined style={{ fontSize: '1.15rem' }} />
              </IconButton>
            }
          >
            <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
              <Box
                sx={{
                  height: 'calc(100vh - 64px)',
                  '& .MuiAccordion-root': {
                    borderColor: 'divider',
                    '& .MuiAccordionSummary-root': { bgcolor: 'transparent', flexDirection: 'row', pl: 1 },
                    '& .MuiAccordionDetails-root': { border: 'none' },
                    '& .Mui-expanded': { color: 'primary.main' }
                  }
                }}
              >
                <Accordion defaultExpanded sx={{ borderTop: 'none' }}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <LayoutOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.themeLayout')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.themeLayoutCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeLayout}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BorderInnerOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.menuOrientation')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.menuOrientationCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeMenuLayout}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <HighlightOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.themeMode')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.themeModeCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeMode}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BgColorsOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.colorScheme')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.colorSchemeCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{colorScheme}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BorderInnerOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.layoutWidth')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.layoutWidthCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeWidth}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded sx={{ borderBottom: 'none' }}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <FontColorsOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          {t('customization.fontFamily')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('customization.fontFamilyCaption')}
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeFont}</AccordionDetails>
                </Accordion>
              </Box>
            </SimpleBar>
          </MainCard>
        )}
      </Drawer>
    </>
  );
}
