import { CHANGE_MESSAGE } from '../constants/ActionTypes';
import { MSG_WELCOME } from '../constants/Messages';
const initialState = MSG_WELCOME;

const message = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_MESSAGE:
			return action.payload;
		default:
			break;
	}
	return state;
};
export default message;
