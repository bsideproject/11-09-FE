import { StrictMode } from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { QueryClientProvider } from '@tanstack/react-query';

import '~components/styles/localFonts.css';
import Routes from '~/pages/Routes';

import queryClient from './queryClient';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import 'moment/locale/ko';
import './index.css';

moment.locale('ko');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
