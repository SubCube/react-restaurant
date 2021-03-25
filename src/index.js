import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();
ReactDOM.render(
    // Проывайдер стора
    <Provider store={store}>
        {/* Граница ошибок */}
        <ErrorBoundry>
            {/* Прокидываем API */}
            <RestoServiceContext.Provider value={restoService}>
                {/* Маршрутизация */}
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
   </Provider>
    , document.getElementById('root'));

