import React from "react";
import Button from "../../atoms/button";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-blue-900 p-5">
            <div className="flex flex-row items-center">
                <Link to="/" className="flex flex items-center justify-center">
                    <span className="text-2xl text-white ml-2 font-roboto " >VAGAS DE EMPREGO</span>
                </Link>
                <span className="text-2xl ml-96 text-white"><Button text="Publicar Vagas" to="/jobs" /></span>
                <span className="text-2xl ml-56 text-white"><Button text="Gerenciar Vagas" to="/users" /></span>
            </div>
        </div>
    );
}

export default NavBar;


