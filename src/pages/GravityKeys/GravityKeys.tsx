import { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styles from './style.module.css';

const keys: { [key: string]: boolean } = {};

const Earth = ({ scale = 1 }) => {
	const obj = useRef<HTMLDivElement>(null);

	obj?.current?.style.setProperty('--scale', `${scale}`);

	return <div ref={obj} className={styles.earth + ' ' + styles.shadowSm}></div>;
};

const Moon = ({
	center = { x: 0, y: 0 },
	pos = { x: 0, y: 0 },
	speed = 1,
	scale = 1,
}) => {
	const obj = useRef<HTMLDivElement>(null);

	obj?.current?.style.setProperty('--x', `${pos.x * scale + center.x}px`);
	obj?.current?.style.setProperty('--y', `${pos.y * scale + center.y}px`);
	obj?.current?.style.setProperty('--radius', '100px');
	obj?.current?.style.setProperty('--scale', `${speed * scale}`);

	return <div ref={obj} className={styles.moon}></div>;
};

interface Handler {
	(
		name: 'up' | 'down' | 'left' | 'right' | 'zoom+' | 'zoom-' | 'reset' | '',
		state: 'up' | 'down' | 'click' | ''
	): void;
}

function useInterval(callback: () => void, delay: number | null) {
	const savedCallback = useRef<() => void | null>();
	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	});
	// Set up the interval.
	useEffect(() => {
		function tick() {
			if (typeof savedCallback?.current !== 'undefined') {
				savedCallback?.current();
			}
		}
		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

const Controls = (props: { handler: Handler }) => {
	const { handler } = props;
	const controlsRef = useRef(null);

	function buttonUp() {}
	function buttonDown() {}
	function buttonRight() {}
	function buttonLeft() {}
	function buttonReset() {}
	function buttonZoomIn() {}
	function buttonZoomOut() {}

	return (
		<Draggable handle="#controls-drag-handle" nodeRef={controlsRef}>
			<div ref={controlsRef} className={styles.controls}>
				<div className={styles.dragBar} id="controls-drag-handle">
					<div className={styles.bar}></div>
					<div className={styles.bar}></div>
				</div>
				<div className={styles.flexRow}>
					<button
						onClick={() => handler('up', 'click')}
						onMouseDown={() => handler('up', 'down')}
						onMouseUp={() => handler('up', 'up')}
						onMouseLeave={() => handler('up', 'up')}
						id="up"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-angle-up"></i>
					</button>
					<button
						onClick={() => handler('down', 'click')}
						onMouseDown={() => handler('down', 'down')}
						onMouseUp={() => handler('down', 'up')}
						onMouseLeave={() => handler('down', 'up')}
						id="down"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-angle-down"></i>
					</button>
					<button
						onClick={() => handler('left', 'click')}
						onMouseDown={() => handler('left', 'down')}
						onMouseUp={() => handler('left', 'up')}
						onMouseLeave={() => handler('left', 'up')}
						id="left"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-angle-left"></i>
					</button>
					<button
						onClick={() => handler('right', 'click')}
						onMouseDown={() => handler('right', 'down')}
						onMouseUp={() => handler('right', 'up')}
						onMouseLeave={() => handler('right', 'up')}
						id="right"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-angle-right"></i>
					</button>
					<button
						onClick={() => handler('reset', 'click')}
						id="reset"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-undo-alt"></i>
					</button>
				</div>
				<div className={styles.flexRow}>
					<button
						onClick={() => handler('zoom+', 'click')}
						id="zoom-in"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-search-plus"></i>
					</button>
					<button
						onClick={() => handler('zoom-', 'click')}
						id="zoom-out"
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-search-minus"></i>
					</button>
					<button
						disabled
						id=""
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-cloud"></i>
					</button>
					<button
						disabled
						id=""
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-cloud"></i>
					</button>
					<button
						disabled
						id=""
						className={styles.shadowSm + ' ' + styles.button}
					>
						<i className="fas fa-cloud"></i>
					</button>
				</div>
				<p>Use keys: W,A,S,D</p>
			</div>
		</Draggable>
	);
};

let vx = 1.6;
let vy = 0;
let defaults = { x: 0, y: 200, vx, vy };

export default function GravityKeys() {
	const fieldRef = useRef<HTMLDivElement>(null);
	const [center, setCenter] = useState({ x: 0, y: 0 });
	const [gscale, setGScale] = useState(1);
	const [speed, setSpeed] = useState(1);
	const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 200 });

	let touchDevice = false;

	useEffect(() => {
		if (fieldRef && fieldRef.current) {
			const x = fieldRef?.current?.offsetWidth / 2;
			const y = fieldRef?.current?.offsetHeight / 2;
			setCenter({ x, y });
		}
		window.addEventListener('resize', () => {
			if (fieldRef && fieldRef.current) {
				const x = fieldRef.current.offsetWidth / 2;
				const y = fieldRef.current.offsetHeight / 2;
				setCenter({ x, y });
			}
		});
	}, [fieldRef.current]);

	useEffect(() => {
		console.log('mounted');
		vx = defaults.vx;
		vy = defaults.vy;
		const handleKeydown = function (event: KeyboardEvent) {
			keys[event.key.toUpperCase()] = true;
			console.log(keys);
		};
		const handleKeyup = function (event: KeyboardEvent) {
			console.log('delete key', keys);
			delete keys[event.key.toUpperCase()];
		};
		window.addEventListener('keydown', handleKeydown);
		window.addEventListener('keyup', handleKeyup);
		// const interval = setInterval(() => mainLoop(), 10);

		return () => {
			window.removeEventListener('keyup', handleKeyup);
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	useInterval(mainLoop, 10);

	function mainLoop() {
		Object.keys(keys).forEach(function (key) {
			switch (key) {
				case 'D':
					vx += 0.01;
					break;
				case 'A':
					vx -= 0.01;
					break;
				case 'S':
					vy += 0.01;
					break;
				case 'W':
					vy -= 0.01;
					break;
			}
		});
		const dX = 0 - pos.x;
		const dY = 0 - pos.y;
		const distance = dX * dX + dY * dY;
		const angle = Math.atan2(dY, dX);
		const grav = 400 / distance;
		const gX = Math.cos(angle) * grav;
		const gY = Math.sin(angle) * grav;
		vx += gX;
		vy += gY;
		setPos({ x: pos.x + vx, y: pos.y + vy });
		setSpeed((Math.sqrt(vy * vy + vx * vx) + 1) * 0.1);
	}

	// https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg

	const handleControl: Handler = (name, state) => {
		switch (name) {
			case 'zoom+':
				setGScale(gscale + 0.1);
				break;
			case 'zoom-':
				setGScale(gscale > 0.2 ? gscale - 0.1 : 0.1);
				break;
			case 'up':
				break;
			case 'down':
				break;
			case 'left':
				break;
			case 'right':
				break;
			case 'reset':
				const x = defaults.x;
				const y = defaults.y;
				vx = defaults.vx;
				vy = defaults.vy;
				setPos({ x, y });
				console.log('reset');
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<div ref={fieldRef} className={styles.field}>
				<Moon scale={gscale} center={center} pos={pos} speed={speed} />
				<Earth scale={gscale} />
				<Controls handler={handleControl} />
			</div>
		</div>
	);
}
