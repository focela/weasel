import { useContext } from 'react';

// PROJECT IMPORT
import AuthContext from '~/contexts/JWTContext';

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
}
