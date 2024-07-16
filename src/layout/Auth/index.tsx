import { Outlet } from 'react-router-dom';

// PROJECT IMPORT
import GuestGuard from '~/utils/route-guard/GuestGuard';

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Outlet />
    </GuestGuard>
  );
}
