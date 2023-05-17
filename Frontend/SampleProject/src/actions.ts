import { Client, clientsAction, clientAction, SET_CLIENTS, SET_CLIENT } from './types';

export const setClients = (clients: Client[]): clientsAction => ({
    type: SET_CLIENTS,
    payload: clients,
});

export const setClient = (id: string): clientAction => ({
    type: SET_CLIENT,
    payload: id,
});