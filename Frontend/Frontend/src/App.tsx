
import './App.css'
import ClientRoutes from './routes/routes'
import { ApolloProvider } from '@apollo/client';
import client from '../client'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ClientRoutes />
      </Provider>
    </ApolloProvider>
  )
}

export default App
