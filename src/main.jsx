import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router Dom ---------------------------*/
import { HashRouter } from 'react-router-dom';

/* CSS Media Queries ---------------------------*/
import { MediaQueryProvider } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import App from '@/App';

/* Assets ---------------------------*/
import '@/Common/css/normalize.css';
import '@/Common/css/global.scss';

/* Injecct React in Page ---------------------------*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <MediaQueryProvider>
            <App />
        </MediaQueryProvider>
    </HashRouter>
);
