import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './redux/store';
import './styles/index.css';
import App from './pages/App';
import About from './pages/About';
import Register from './pages/Register';
import Links from './pages/Links';
import Contact from './pages/Contact';

import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './context/global';

import Layout from './components/Layout';

const Pages = [
	{ name: 'links', component: Links },
	{ name: 'about', component: About },
	{ name: 'contact', component: Contact },
];

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContextProvider>
				<Router>
					<Layout>
						<Switch>
							{Pages.map((page) => (
								<Route path={'/' + page.name}>{page.component}</Route>
							))}
							<Route path="/">
								<App></App>
							</Route>
						</Switch>
					</Layout>
				</Router>
			</AppContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
