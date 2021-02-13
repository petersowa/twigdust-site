import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarRight from '../components/SidebarPrimary';

import '../styles/App.css';

function Layout(props: any) {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="App">
			<Header></Header>
			<main className="App-main  u-rounded">
				<SidebarRight />
				<div className="app-body">{props.children}</div>
				<div className="app-sidebar">
					<h1>Sidebar</h1>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
