import { createStore } from 'redux';

type CounterAction = {
	type: string;
};

function counterReducer(state = { value: 0 }, action: CounterAction) {
	switch (action.type) {
		case 'counter/inc':
			return { value: state.value + 1 };
		case 'counter/dec':
			return { value: state.value - 1 };
		default:
			return state;
	}
}

const store = createStore(counterReducer);

function actionInc() {
	return {
		type: 'counter/inc',
	};
}

function actionDec() {
	return {
		type: 'counter/dec',
	};
}

export { store, actionInc, actionDec };
