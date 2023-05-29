import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getClients } from '../queries';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setClient, setClients } from '../actions';
import { RootState } from '../reducers/reducers';

interface Client {
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

function ClientListing() {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery<{ clients: Client[] }>(getClients);

    React.useEffect(() => {
        if (data) {
            dispatch(setClients(data.clients));
        }
    }, [data, dispatch]);

    const clients = useSelector((state: RootState) => state.clients);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = (id: string) => {
        dispatch(setClient(id));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center">List of Clients</h1><br />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead
                                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">ID</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clients.map(client => (

                                            <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"  key={client.id} data-testid="client-item" >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{client.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium" onClick={() => handleClick(client.id)}><Link to={`/client/${client.id}`}>{client.name}</Link></td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{client.age}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientListing;