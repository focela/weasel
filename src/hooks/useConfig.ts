import { useContext } from 'react';

// PROJECTS IMPORT
import { ConfigContext } from '~/contexts/ConfigContext';

export default function useConfig() {
  return useContext(ConfigContext);
}
