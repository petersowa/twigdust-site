import { useContext } from 'react';
import { Link } from '@reach/router';

import { AppContext } from '../context/global';

const Header = (props: Props) => {
	const { globalState } = useContext(AppContext);

	return (
		<header className="App-header u-shadow-1">
			<nav className="navbar">
				<div className="nav-main">
					<ul className="list-nd nav-main">
						<li>{globalState.title}</li>
						<li>
							<Link to="/" className="nav-item">
								Home
							</Link>
						</li>
					</ul>
				</div>

				<ul className="list-nd nav-secondary">
					<li>Register</li>
					<li>Contact</li>
					<li>
						<Link to="about" className="nav-item">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

interface Props {
	children?: {};
}

export default Header;
