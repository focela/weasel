import { Link } from 'react-router-dom';

// MUI IMPORT
import ButtonBase from '@mui/material/ButtonBase';
import { SxProps } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import { To } from 'history';

// PROJECT IMPORT
import Logo from '~/components/logo/LogoMain';
import LogoIcon from '~/components/logo/LogoIcon';
import useAuth from '~/hooks/useAuth';
import { APP_DEFAULT_PATH } from '~/config';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

export default function LogoSection({ reverse, isIcon, sx, to }: Props) {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonBase disableRipple {...(isLoggedIn && { component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
      {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
    </ButtonBase>
  );
}
