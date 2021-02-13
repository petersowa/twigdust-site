import { Link } from 'react-router-dom';

const SidebarPrimary = () => {
	return (
		<div className="app-sidebar">
			<h1>Links</h1>
			<a href="https://granitecode.com">GraniteCode Dev Blog</a>
			<Link to="/about">About</Link>
			<Link to="/gravity-keys">Gravity Keys</Link>
			<Link to="/test">Test</Link>
		</div>
	);
};

export default SidebarPrimary;
