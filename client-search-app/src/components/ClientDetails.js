// src/components/ClientDetails.js
import React, { useEffect, useState } from 'react';
import { fetchCreditCards } from '../services/api';

const ClientDetails = ({ client, onPdfView, onClose,}) => {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    const loadCreditCards = async () => {
      try {
        const cards = await fetchCreditCards();
        setCreditCards(cards);
      } catch (error) {
        console.error('Erro ao carregar os cartões de crédito:', error);
        // Trate o erro conforme necessário
      }
    };

    loadCreditCards();
  }, []); // Não há necessidade de depender do client.id aqui

  console.log('Dados dos cartões de crédito recebidos:', creditCards);

  return (
    <div>
      <h2>Detalhes do Cliente</h2>
      <p>ID: {client.id}</p>
      <p>Nome Completo: {client.firstname} {client.lastname}</p>
      <p>Email: {client.email}</p>
      <p>Data de Nascimento: {client.birthday}</p>
      <p>Telefone: {client.phone}</p>

      {/* Informações de Endereço */}
      <div>
        <h3>Endereço</h3>
        <p>Rua: {client.address.street}</p>
        <p>Número: {client.address.buildingNumber}</p>
        <p>Cidade: {client.address.city}</p>
        <p>CEP: {client.address.zipcode}</p>
        <p>País: {client.address.country}</p>
      </div>

      {/* Informações de Cartões de Crédito */}
      {creditCards && creditCards.length > 0 && (
        <div>
          <h3>Cartões de Crédito</h3>
          <ul>
            {creditCards.map((card, index) => (
              <li key={index}>
                Número do Cartão: {card.number} - Data de Expiração: {card.expiration} - Bandeira: {card.type}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={onPdfView}style={{ fontSize: '12px', padding: '12px 24px' }}>Visualizar PDF</button> 
      <button onClick={onClose}style={{ fontSize: '12px', padding: '12px 24px' }}>Fechar</button>
    </div>
  );
};

export default ClientDetails;
