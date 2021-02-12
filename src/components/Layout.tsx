import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/App.css';

function Layout(props: any) {
	return (
		<div className="App">
			<Header></Header>
			{props.children}
			<Footer></Footer>
		</div>
	);
}

export default Layout;
