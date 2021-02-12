import { useContext } from 'react';
import { connect } from 'react-redux';

import { AppContext } from '../context/global';

function Status({ counter }) {
	const { globalState } = useContext(AppContext);
	return (
		<div>
			Status: Counter is {counter}, AppTitle is: {globalState.title}
		</div>
	);
}

export default connect((state) => ({ counter: state.value }), {})(Status);
