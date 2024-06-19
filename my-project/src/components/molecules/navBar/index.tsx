import React from "react";
import { Link } from "react-router-dom";
import Typography from "../../atoms/typography";


const NavBar: React.FC = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-navBar p-5">
            <div className="flex flex-row items-center">

                <Link to="/" className="flex flex items-center justify-center font-medium ml-6">
                    <Typography variant="navBar">JobsTech</Typography>
                    <img className="w-7 ml-2" src="https://cdn-icons-png.flaticon.com/512/6478/6478277.png" alt="iconMala" />
                </Link>

                <Link to="/jobs" className="text-2xl ml-80 text-white font-medium" >
                    <Typography variant="navBar">Publicar Vagas</Typography>
                </Link>

                <Link to="/users" className="text-2xl ml-80 text-white font-medium" >
                    <Typography variant="navBar">Gerenciar Vagas</Typography>
                </Link>

                <img className="w-10 ml-60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="menu" />
                
            </div>
        </div>
    );
}

export default NavBar;


