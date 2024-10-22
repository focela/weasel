import { ElementType, Suspense } from 'react';

// PROJECT IMPORT
import Loader from '~/components/Loader';

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
