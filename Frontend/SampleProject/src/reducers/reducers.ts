import { combineReducers } from 'redux';
import clientsReducer from './clientsListReducer';
import clientReducer from './clientDetailReducer';

const rootReducer = combineReducers({
    clients: clientsReducer,
    clientDetail: clientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;