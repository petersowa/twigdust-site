import { useRef, useEffect, useState } from 'react';
import './style.css';

const keys = {};

const D_Key = 'D'.charCodeAt(0);
const W_Key = 'W'.charCodeAt(0);
const A_Key = 'A'.charCodeAt(0);
const S_Key = 'S'.charCodeAt(0);

export default function GravityKeys() {
	const fieldRef = useRef<HTMLDivElement>(null);
	const [center, setCenter] = useState({ x: 0, y: 0 });
	let classToggle = true;

	useEffect(() => {
		console.log(fieldRef.current);
		if (fieldRef && fieldRef.current) {
			console.log(fieldRef.current.offsetWidth);
			let x = fieldRef.current.offsetWidth / 2;
			let y = fieldRef.current.offsetHeight / 2;
			setCenter({ x, y });
		}
	}, [fieldRef.current]);

	// https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg

	let y = 200;
	let x = 0;
	let vx = 1.6;
	let vy = 0;
	let gscale = 1.0;

	let touchDevice = false;

	let defaults = { x, y, vx, vy };

	return (
		<div>
			<div ref={fieldRef} className="field">
				<div className="circle shadow-sm"></div>
				<div className="earth"></div>
				<div className="controls">
					<div className="drag-bar">
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					<div className="flex-row">
						<button id="up" className="shadow-sm">
							<i className="fas fa-angle-up"></i>
						</button>
						<button id="down" className="shadow-sm">
							<i className="fas fa-angle-down"></i>
						</button>
						<button id="left" className="shadow-sm">
							<i className="fas fa-angle-left"></i>
						</button>
						<button id="right" className="shadow-sm">
							<i className="fas fa-angle-right"></i>
						</button>
						<button id="reset" className="shadow-sm">
							<i className="fas fa-undo-alt"></i>
						</button>
					</div>
					<div className="flex-row">
						<button id="zoom-in" className="shadow-sm">
							<i className="fas fa-search-plus"></i>
						</button>
						<button id="zoom-out" className="shadow-sm">
							<i className="fas fa-search-minus"></i>
						</button>
						<button disabled id="" className="shadow-sm">
							<i className="fas fa-cloud"></i>
						</button>
						<button disabled id="" className="shadow-sm">
							<i className="fas fa-cloud"></i>
						</button>
						<button disabled id="" className="shadow-sm">
							<i className="fas fa-cloud"></i>
						</button>
					</div>
					<p>Use keys: W,A,S,D</p>
				</div>
			</div>
		</div>
	);
}

//function main() {
// const $ = (query) => document.querySelector(query)[0];
// let centerX = $('.field').width() / 2;
// let centerY = $('.field').height() / 2;
// $(function () {
// 	$('#app').addClass('app shadow-md rounded-sm bg-blue margin-md');
// 	$('button').on('click tap', function () {
// 		// console.log("mousedown");
// 		switch ($(this).attr('id')) {
// 			case 'reset':
// 				x = defaults.x;
// 				y = defaults.y;
// 				vx = defaults.vx;
// 				vy = defaults.vy;
// 				break;
// 			case 'zoom-out':
// 				gscale *= 0.8;
// 				break;
// 			case 'zoom-in':
// 				gscale *= 1.25;
// 				break;
// 		}
// 	});
// 	document.getElementById('right').addEventListener(
// 		'touchstart',
// 		(event) => {
// 			touchDevice = keys[D_Key] = true;
// 		},
// 		false
// 	);
// 	document.getElementById('right').addEventListener(
// 		'touchend',
// 		(event) => {
// 			delete keys[D_Key];
// 		},
// 		false
// 	);
// 	document.getElementById('left').addEventListener(
// 		'touchstart',
// 		(event) => {
// 			touchDevice = keys[A_Key] = true;
// 		},
// 		false
// 	);
// 	document.getElementById('left').addEventListener(
// 		'touchend',
// 		(event) => {
// 			delete keys[A_Key];
// 		},
// 		false
// 	);
// 	document.getElementById('up').addEventListener(
// 		'touchstart',
// 		(event) => {
// 			touchDevice = keys[W_Key] = true;
// 		},
// 		false
// 	);
// 	document.getElementById('up').addEventListener(
// 		'touchend',
// 		(event) => {
// 			delete keys[W_Key];
// 		},
// 		false
// 	);
// 	document.getElementById('down').addEventListener(
// 		'touchstart',
// 		(event) => {
// 			touchDevice = keys[S_Key] = true;
// 		},
// 		false
// 	);
// 	document.getElementById('down').addEventListener(
// 		'touchend',
// 		(event) => {
// 			delete keys[S_Key];
// 		},
// 		false
// 	);
// 	$('button').on('mousedown', function () {
// 		// console.log("mousedown");
// 		if (touchDevice) return;
// 		switch ($(this).attr('id')) {
// 			case 'right':
// 				keys[D_Key] = true;
// 				break;
// 			case 'left':
// 				keys[A_Key] = true;
// 				break;
// 			case 'down':
// 				keys[S_Key] = true;
// 				break;
// 			case 'up':
// 				keys[W_Key] = true;
// 				break;
// 		}
// 		// console.log(keys);
// 	});
// 	$('button').on('mouseup', function () {
// 		if (touchDevice) return;
// 		// console.log("mouseup");
// 		switch ($(this).attr('id')) {
// 			case 'right':
// 				delete keys[D_Key];
// 				break;
// 			case 'left':
// 				delete keys[A_Key];
// 				break;
// 			case 'down':
// 				delete keys[S_Key];
// 				break;
// 			case 'up':
// 				delete keys[W_Key];
// 				break;
// 		}
// 	});
// 	setInterval(function () {
// 		// console.log(keys)
// 		Object.keys(keys).forEach(function (key) {
// 			// console.log(key)
// 			switch (parseInt(key)) {
// 				case D_Key:
// 					vx += 0.01;
// 					break;
// 				case A_Key:
// 					vx -= 0.01;
// 					break;
// 				case S_Key:
// 					vy += 0.01;
// 					break;
// 				case W_Key:
// 					vy -= 0.01;
// 					break;
// 			}
// 		});
// 		const dX = 0 - x;
// 		const dY = 0 - y;
// 		const distance = dX * dX + dY * dY;
// 		const angle = Math.atan2(dY, dX);
// 		const grav = 400 / distance;
// 		const gX = Math.cos(angle) * grav;
// 		const gY = Math.sin(angle) * grav;
// 		// console.log(dX,dY,angle)
// 		const obj = $('.circle')[0];
// 		vx += gX;
// 		vy += gY;
// 		x += vx;
// 		y += vy;
// 		obj.style.setProperty('--x', centerX + x * gscale + 'px');
// 		obj.style.setProperty('--y', centerY + y * gscale + 'px');
// 		obj.style.setProperty(
// 			'--scale',
// 			(Math.sqrt(vy * vy + vx * vx) + 1) * 0.1
// 		);
// 		$('.field')[0].style.setProperty('--gscale', gscale);
// 	}, 1);
// 	$(window).on('keyup', function (event) {
// 		delete keys[event.which];
// 	});
// 	$(window).on('keydown', function (event) {
// 		keys[event.which] = true;
// 	});
// 	$(window).on('resize', function () {
// 		centerX = $('.field').width() / 2;
// 		centerY = $('.field').height() / 2;
// 	});
// });
// $('.controls').draggable({ handle: '.drag-bar' });
// //
//}
