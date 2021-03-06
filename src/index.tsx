import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { store } from './redux/store';
import './styles/index.css';
import App from './pages/App';
import About from './pages/About';
// import Register from './pages/Register';
import Links from './pages/Links';
import Contact from './pages/Contact';
import Test from './pages/Test';
import GravityKeys from './pages/GravityKeys/GravityKeys';

import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './context/global';

import Layout from './components/Layout';

const Pages = [
	{ name: 'links', component: Links },
	{ name: 'about', component: About },
	{ name: 'contact', component: Contact },
	{ name: 'gravity-keys', component: GravityKeys },
	{ name: 'test', component: Test },
];

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<AppContextProvider>
					<Router>
						<Layout>
							<Switch>
								{Pages.map((page) => (
									<Route
										key={page.name}
										path={'/' + page.name}
										component={page.component}
									/>
								))}

								<Route path="/">
									<App></App>
								</Route>
							</Switch>
						</Layout>
					</Router>
				</AppContextProvider>
			</Provider>
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
