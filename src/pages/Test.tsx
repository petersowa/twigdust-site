import { useState } from 'react';

function Test(props: Props) {
	const [count, setCount] = useState(1);
	return (
		<div>
			<h1>Test</h1>
			<p>Lorem</p>
		</div>
	);
}

interface Props {
	path?: string;
}

export default Test;
