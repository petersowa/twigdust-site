import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

import { store } from './redux/store';
import './styles/index.css';
import App from './pages/App';
import About from './pages/About';

import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './context/global';

import Layout from './components/Layout';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContextProvider>
				<Layout>
					<Router>
						<App path="/" />
						<About path="about" />
					</Router>
				</Layout>
			</AppContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
