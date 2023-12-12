// src/services/api.js
const API_URL = 'https://fakerapi.it/api/v1';

export const fetchClients = async (dobStart, dobEnd) => {
  try {
    const response = await fetch(`${API_URL}/persons?_quantity=5&dob_min=${dobStart}&dob_max=${dobEnd}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error;
  }
};


// src/services/api.js
export const fetchCreditCards = async () => {
  try {
    const response = await fetch('https://fakerapi.it/api/v1/credit_cards?_quantity=1');
    if (!response.ok) {
      throw new Error('Erro ao obter cartões de crédito');
    }
    const data = await response.json();
    console.log('Dados dos cartões de crédito:', data);
    return data.data;
  } catch (error) {
    console.error('Erro na solicitação de cartões de crédito:', error);
    throw error;
  }
};


  