export interface Client {
    id: string;
    age: number;
    name: string;
    gender: string;
    additionalInfo: AdditionalInfo;

};
interface AdditionalInfo {
    company: string;
    email: string;
    phone: string;
    address: string;
}

export interface clientsAction {
    type: string;
    payload: any;
}
export interface clientAction {
    type: string;
    payload: string | null;
}

export const SET_CLIENTS = 'SET_CLIENTS';
export const SET_CLIENT = 'SET_CLIENT';