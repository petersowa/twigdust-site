import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/global';

const Header = (props: Props) => {
	const { globalState } = useContext(AppContext);

	return (
		<header className="App-header u-shadow-1">
			<nav className="navbar">
				<div className="nav-main">
					<ul className="list-nd nav-main">
						<li>
							<Link to="/" className="nav-item">
								{globalState.title}
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-item">
								Home
							</Link>
						</li>
					</ul>
				</div>

				<ul className="list-nd nav-secondary">
					{['Links', 'Contact', 'About'].map((link) => (
						<li key={link}>
							<Link to={link.toLocaleLowerCase()} className="nav-item">
								{link}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

interface Props {
	children?: {};
}

export default Header;
