import api from './api';

export const fetchCardapio = async () => {
    try {
        const response = await api.get('/produtos'); 
        console.log('Resposta da requisição:', response);

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        throw new Error('Erro ao buscar cardápio');
    }
};
