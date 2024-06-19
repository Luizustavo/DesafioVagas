import React, { useEffect, useState } from 'react';
import { getAllVagas, deleteVaga, updateVagaToEncerrada } from '../../../api/axiosConfig';
import Button from '../../atoms/button';
import Typography from '../../atoms/typography';
import NavBar from '../../molecules/navBar';

interface Vaga {
  _id: string;
  titulo: string;
  descricao: string;
  status: string;
  cargo: string;
  tipoContratacao: string;
  salario: string; // Mudança para string
  localTrabalho: string;
}

const JobList: React.FC = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);

  useEffect(() => {
    fetchVagas();
  }, []);

  const fetchVagas = async () => {
    try {
      const response = await getAllVagas();
      setVagas(response.data);
    } catch (error) {
      console.error('Erro ao buscar vagas', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteVaga(id);
      fetchVagas();
    } catch (error) {
      console.error('Erro ao deletar vaga', error);
    }
  };

  const handleEncerrar = async (id: string) => {
    try {
      await updateVagaToEncerrada(id);
      fetchVagas();
    } catch (error) {
      console.error('Erro ao encerrar vaga', error);
    }
  };

  return (

    <div className='bg-tertiary'>

      <NavBar />

      <div className="m-16 max-w-lg">
        <Typography variant="title">Gerenciamento de Vagas</Typography>

        <div className="mb-2"></div>

        <Typography variant="subtitle">Aqui você pode gerenciar as vagas cadastradas no sistema</Typography>
      </div>

      <div className="m-7">
        <Typography variant="title">Lista de Vagas</Typography>
        <br />

        <ul>
          {vagas.map((vaga) => (
            <li key={vaga._id} className="border p-2 mb-2">

              <Typography variant="text">Cargo: {vaga.cargo}</Typography>
              <Typography variant="text">Código da vaga: {vaga._id}</Typography>
              <Typography variant="text">Descrição: {vaga.descricao}</Typography>
              <Typography variant="text">Status: {vaga.status}</Typography>
              <Typography variant="text">Tipo de Contratação: {vaga.tipoContratacao}</Typography>
              <Typography variant="text">Salário: {vaga.salario}</Typography>
              <Typography variant="text">Local de Trabalho: {vaga.localTrabalho}</Typography>
              <br />
              <Button onClick={() => handleEncerrar(vaga._id)} className="mr-2">Encerrar</Button>
              <Button onClick={() => handleDelete(vaga._id)} className="bg-red-500 hover:bg-red-700">Deletar</Button>

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default JobList;