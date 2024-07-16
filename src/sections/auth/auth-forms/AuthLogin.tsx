import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI IMPORT
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// THIRD-PARTY IMPORT
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';

// PROJECT IMPORT
import AnimateButton from '~/components/extended/AnimateButton';
import IconButton from '~/components/extended/IconButton';
import useAuth from '~/hooks/useAuth';
import useScriptRef from '~/hooks/useScriptRef';

// ASSETS IMPORT
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';

export default function AuthLogin() {
  const intl = useIntl();

  const [checked, setChecked] = React.useState(false);

  const { login } = useAuth();
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      account: '',
      password: ''
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        await login(values.account, values.password);
        if (scriptedRef.current) {
          setStatus({ success: true });
          setSubmitting(false);
        }
      } catch (err: any) {
        if (scriptedRef.current) {
          setStatus({ success: false });
          setSubmitting(false);
        }
      }
    }
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="account-login">{intl.formatMessage({ id: 'auth.account' })}</InputLabel>
              <OutlinedInput
                id="account-login"
                type="text"
                value={formik.values.account}
                name="account"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder={intl.formatMessage({ id: 'auth.account.placeholder' })}
                fullWidth
                error={Boolean(formik.touched.account && formik.errors.account)}
              />
            </Stack>
            {formik.touched.account && formik.errors.account && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {formik.errors.account}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-login">{intl.formatMessage({ id: 'auth.password' })}</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.password && formik.errors.password)}
                id="-password-login"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="secondary"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder={intl.formatMessage({ id: 'auth.password.placeholder' })}
              />
            </Stack>
            {formik.touched.password && formik.errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password-login">
                {formik.errors.password}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                    size="small"
                  />
                }
                label={<Typography variant="h6">{intl.formatMessage({ id: 'auth.remember-me' })}</Typography>}
              />
              <Link variant="h6" component={RouterLink} to="/forgot-password" color="text.primary">
                {intl.formatMessage({ id: 'auth.forgot-password' })}
              </Link>
            </Stack>
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                {intl.formatMessage({ id: 'auth.login' })}
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
