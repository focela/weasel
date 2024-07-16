import { useContext } from 'react';

// PROJECT IMPORT
import { ConfigContext } from '~/contexts/ConfigContext';

export default function useConfig() {
  return useContext(ConfigContext);
}
