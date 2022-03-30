import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import '../src/assets/css/animate.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../src/assets/css/style.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();