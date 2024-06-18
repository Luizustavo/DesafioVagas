import React from "react";
import NavBar from "../../components/molecules/navBar";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import Typography from "../../components/atoms/typography";

const PostJobs: React.FC = () => {
    return (
        <>
        <div className="bg-gray-50">
            <NavBar />
            
                <div className="m-16 max-w-lg">
                    <Typography variant="title">Bem Vindo!</Typography>
                    <Typography variant="subtitle">Obrigado por ter escolhido o Vagas de Emprego para anunciar sua vaga</Typography>

                </div>


                <div className="flex flex-col text-center">
                    <Typography variant="title">Para anunciar sua vaga, preencha os campos abaixo:</Typography>
                    <br />
                    <Typography variant="subtitle">Descrição da vaga:</Typography>
                    <Input type="text" placeholder="Digite a descrição da vaga" />
                    <br />
                    <Typography variant="subtitle">Cargo:</Typography>
                    <Input type="text" placeholder="Digite o cargo da vaga" />
                    <br />
                    <Typography variant="subtitle">Tipo de contratação:</Typography>
                    <Input type="text" placeholder="Digite o tipo de contratação" />
                    <br />
                    <Typography variant="subtitle">Salário:</Typography>
                    <Input type="text" placeholder="Digite o salário" />
                    <br />
                    <Typography variant="subtitle">Local de trabalho:</Typography>
                    <Input type="text" placeholder="Digite o local de trabalho" />
                    <br />
                    <Button text="Anunciar Vaga" to="/home" type="submit" />
                </div>
            </div>

        </>
    );
}

export default PostJobs;