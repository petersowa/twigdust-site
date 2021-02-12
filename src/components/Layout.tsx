import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/App.css';

function Layout(props: any) {
	return (
		<div className="App">
			<Header></Header>
			<main className="App-main  u-rounded">{props.children}</main>
			<Footer></Footer>
		</div>
	);
}

export default Layout;
