import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { HashRouter, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<BrowserRouter>
			<App />
		</BrowserRouter>	
	</HashRouter>,	
		document.getElementById('root')
	);
registerServiceWorker();
