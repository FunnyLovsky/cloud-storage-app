import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux';
import { setupStore } from './app/providers/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={setupStore()}>
        <App />
    </Provider>
);