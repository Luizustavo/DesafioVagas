import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-desafio-6f5u.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllVagas = () => api.get('/vagas');
export const getVagasAbertas = () => api.get('/vagasAbertas');
export const getVagasEncerradas = () => api.get('/vagasEncerradas');
export const createVaga = (vaga: any) => api.post('/register', vaga);
export const updateVagaToEncerrada = (id: string) => api.put(`/${id}/encerrada`);
export const deleteVaga = (id: string) => api.delete(`/${id}`);