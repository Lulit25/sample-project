import { clientAction, SET_CLIENT } from '../types';

const initialState: string | null = null;

const clientReducer = (state = initialState, action: clientAction): string | null => {
    switch (action.type) {
        case SET_CLIENT:
            return action.payload;
        default:
            return state;
    }
};

export default clientReducer;