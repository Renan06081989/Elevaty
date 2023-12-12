// src/components/ClientList.js
import React from 'react';

const ClientList = ({ clients, onClientDetails, onClientDelete }) => {
  // Renderiza a lista de clientes apenas se houver clientes
  const renderClientList = () => {
    if (clients.length === 0) {
      return <p><b>Voos mais altos</b> para seu negócio.</p>;
    }

    return (
      <div>
        <h2>Lista de Clientes</h2>
        <ul>
          {clients.map(client => (
            <li key={client.id}>
              {client.firstname} {client.lastname}
              <button onClick={() => onClientDetails(client)}>Detalhes</button>
              <button onClick={() => onClientDelete(client.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {renderClientList()}
    </div>
  );
};

export default ClientList;