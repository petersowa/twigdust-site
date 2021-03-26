import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarPrimary from '../components/SidebarPrimary';

import '../styles/App.css';
import { AppContext } from '../context/global';

function Layout(props: any) {
	const { pathname } = useLocation();
	const { state } = useContext(AppContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	console.log({ state });

	return (
		<div className="App">
			<Helmet>
				<title>{state.title}</title>
			</Helmet>
			<Header></Header>
			<main className="App-main  u-rounded">
				<SidebarPrimary />
				<div className="app-body">{props.children}</div>
				<div className="app-sidebar">{state.time}</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
