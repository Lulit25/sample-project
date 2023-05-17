import { getClient } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/reducers';

function clientDetail() {
    const { id } = useParams<{ id: string }>();
    const client: string = useSelector((state: RootState) => state.clientDetail);
    const clientId = client || id;

    const { loading, error, data } = useQuery(getClient, { variables: { id: clientId } });

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
    const clientDetail = data?.client;

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 ">Client Details</h2><br />
            <ul className="list-none bg-gray-100 p-4 rounded-md">
                <li className="py-2 border-b border-gray-300">
                    <strong>Name:</strong> {clientDetail.name}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Age:</strong> {clientDetail.age}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Gender:</strong> {clientDetail.gender}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Company:</strong> {clientDetail.additionalInfo.company}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Email:</strong> {clientDetail.additionalInfo.email}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Phone:</strong> {clientDetail.additionalInfo.phone}
                </li>
                <li className="py-2 border-b border-gray-300">
                    <strong>Address:</strong>  {clientDetail.additionalInfo.address}
                </li>
            </ul>
        </div>
    )
}

export default clientDetail;