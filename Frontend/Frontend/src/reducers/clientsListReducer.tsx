import { Client, SET_CLIENTS, clientsAction } from '../types';

const initialState: Client[] = [];

const clientsReducer = (state = initialState, action: clientsAction): Client[] => {
    switch (action.type) {
        case SET_CLIENTS:
            return action.payload;
        default:
            return state;
    }
};

export default clientsReducer;