import { fromJS } from 'immutable';

function reducer(state = fromJS({
	
}), action) {
	let newState = state;
	switch (action.type) {
		case 'SET_ATTR': {
			const { label, value } = action.payload;
			newState = newState.set(label, value);
			break;
		}
	}
	return newState
}

export default reducer;