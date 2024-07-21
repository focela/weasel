import { createRoot } from 'react-dom/client';

// THIRD-PARTY IMPORT
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';

// PROJECT IMPORT
import App from '~/App';
import reportWebVitals from '~/reportWebVitals';
import { ConfigProvider } from '~/contexts/ConfigContext';
import { persister, store } from '~/store';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
