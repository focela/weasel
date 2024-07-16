import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// PROJECT IMPORT
import useAuth from '~/hooks/useAuth';

// TYPES IMPORT
import { GuardProps } from '~/types/auth';

export default function AuthGuard({ children }: GuardProps) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', {
        state: {
          from: location.pathname
        },
        replace: true
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
}
