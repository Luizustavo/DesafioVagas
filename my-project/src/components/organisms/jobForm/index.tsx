import React from "react";
import { useState } from "react";
import { createVaga } from "../../../api/axiosConfig";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";
import Input from "../../atoms/input";
import NavBar from "../../molecules/navBar";

const JobForm: React.FC = () => {
    const [descricao, setDescricao] = useState('');
    const [cargo, setCargo] = useState('');
    const [tipoContratacao, setTipoContratacao] = useState('');
    const [salario, setSalario] = useState('');
    const [localTrabalho, setLocalTrabalho] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await createVaga({ descricao, status: 'Aberta', cargo, tipoContratacao, salario, localTrabalho });
            setDescricao('');
            setCargo('');
            setTipoContratacao('');
            setSalario('');
            setLocalTrabalho('');
            alert('Vaga criada com sucesso!');
        } catch (error) {
            console.error('Erro ao criar vaga', error);
        }
    };

    return (

        <div className="bg-tertiary">
            <NavBar />

            <div className="m-16 max-w-lg">
                <Typography variant="title">Bem Vindo!</Typography>
                <Typography variant="subtitle">Obrigado por ter escolhido o JobsTech para anunciar sua vaga</Typography>
            </div>

            <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto text-center">

                <Typography variant="title">Para anunciar sua vaga, preencha os campos abaixo:</Typography>

                <br />

                <div className="mb-6">
                    <Input
                        label="Cargo"
                        type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <Input
                        label="Descrição"
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <Input
                        label="Tipo de contratação"
                        type="text"
                        value={tipoContratacao}
                        onChange={(e) => setTipoContratacao(e.target.value)}
                    />
                </div>

                <div className="mb-6">

                    <Input
                        label="Salário"
                        type="text"
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                    />
                </div>

                <div className="mb-6">

                    <Input
                        label="Local de Trabalho"
                        type="text"
                        value={localTrabalho}
                        onChange={(e) => setLocalTrabalho(e.target.value)}
                        className="w-full"
                    />
                </div>

                <Button type="submit">Anunciar vaga</Button>

            </form>
        </div>
    );
};

export default JobForm;