import React from "react";
import NavBar from "../../components/molecules/navBar";

const UserManagement: React.FC = () => {
    return (
        <>
            <div className="bg-gray-50">
                <NavBar />
                <div className="m-16 max-w-lg">
                    <h1 className="text-2xl">Gerenciar Usuários</h1>
                    <p className="text-lg">Aqui você pode gerenciar os usuários cadastrados no sistema</p>
                </div>
                <div>
                </div>

            </div>
        </>
    );
}

export default UserManagement;