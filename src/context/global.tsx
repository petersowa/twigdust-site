import { createContext, useReducer, Dispatch, useEffect } from 'react';
import { preProcessFile } from 'typescript';

interface Action {
	handle: (state: State) => State;
}

interface ActionsGenerator {
	(dispatch: Dispatch<Action>, actionList: ActionList): Actions;
}

interface ActionDispatch {
	(payload?: Payload): void;
}

interface ReducerFunc {
	(state: State, action: Action): State;
}

interface ActionFunc {
	(payload?: Payload): Action;
}

const actionsGen: ActionsGenerator = (dispatch, actionList) => {
	const actions: { [actionName: string]: ActionDispatch } = {};

	for (const action in actionList) {
		const actionDispatch: ActionFunc = actionList[action];
		actions[action] = (payload) => dispatch(actionDispatch(payload));
	}

	return actions;
};

const reducer: ReducerFunc = (state, action) => {
	if (action.handle) return action.handle(state);

	return state;
};

//
// State Setup
//
interface State {
	title: string;
	time: string;
}

const initialState = {
	title: process.env.REACT_APP_TITLE || 'Snappy Blog',
	time: new Date().toLocaleTimeString(),
};

//
// Payload and Action Setup
//
interface Payload {
	title?: string;
}

const updateTitle: ActionFunc = (payload) => ({
	handle: (state: State) => ({ ...state, title: payload?.title || '' }),
});

const clearTitle: ActionFunc = () => ({
	handle: (state: State) => ({ ...state, title: '' }),
});

const reverseTitle: ActionFunc = () => ({
	handle: (state: State) => ({
		...state,
		title: [...state.title].reverse().join(''),
	}),
});

interface ActionList {
	[actionName: string]: ActionFunc;
}

interface Actions {
	updateTitle?: ActionDispatch;
	clearTitle?: ActionDispatch;
	reverseTitle?: ActionDispatch;
	updateTime?: ActionDispatch;
}

const actionList: ActionList = {
	updateTitle,
	clearTitle,
	reverseTitle,
	updateTime() {
		return {
			handle: (state) => {
				const time = new Date().toLocaleTimeString();
				if (state.time === time) return state;
				return { ...state, time };
			},
		};
	},
};

export const AppContext = createContext<{ state: State; actions: Actions }>({
	state: initialState,
	actions: {},
});

interface Props {
	children: any;
}
export const AppContextProvider = (props: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const actions = actionsGen(dispatch, actionList);
	const { updateTime } = actions;

	useEffect(() => {
		const interval = setInterval(() => {
			updateTime!();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, [updateTime]);

	return (
		<AppContext.Provider value={{ state, actions }}>
			{props.children}
		</AppContext.Provider>
	);
};
