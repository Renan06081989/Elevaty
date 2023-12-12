import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';
import Modal from './components/Modal';
import { fetchClients } from './services/api';
import './index.css';

const App = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSearch = async (dobStart, dobEnd) => {
    try {
      const clientsData = await fetchClients(dobStart, dobEnd);
      setClients(clientsData);
    } catch (error) {
      
    }
  };

  const handleClientDetails = (client) => {
    setSelectedClient(client);
  };

  const handleClientDelete = (clientId) => {
    
    const updatedClients = clients.filter(client => client.id !== clientId);
    setClients(updatedClients);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const handlePdfView = () => {
    
    window.open('https://static.snxpay.com/pdf/Fatura%20Elevaty.pdf', '_blank');
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <ClientList
        clients={clients}
        onClientDetails={handleClientDetails}
        onClientDelete={handleClientDelete}
      />
      {selectedClient && (
        <Modal onClose={handleCloseModal}>
          <ClientDetails
            client={selectedClient}
            onPdfView={handlePdfView}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
