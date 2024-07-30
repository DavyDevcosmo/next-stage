import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/authContext";
import UpdateProfile from "./UpdateProfile"; // Importar o componente do modal
import { FaArrowLeft, FaUserEdit } from "react-icons/fa";


const UserProfile = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

    async function handleLogout() {
        try {
            await logOut();
            navigate("/auth/login");
        } catch (error) {
            alert("Ocorreu um erro ao efetuar o logout");
            console.log(error);
        }
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div className="container mx-auto p-4 hover:text-blue-50 transition-colors duration-300">
            <Link 
                to="/auth/home" 
                className="text-black relative px-2 py- border-b-2 border-transparent
                           hover:text-blue-700 
                           before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
                           before:bg-transparent before:shadow-lg before:shadow-transparent 
                           transform hover:scale-110 transition-transform duration-300" 
            >
                <FaArrowLeft className="inline-block mr-2" /> VOLTAR
            </Link>
        

            
            <h1 className="text-3xl font-light text-gray-700 mt-4">Configurações da conta</h1>
            <p className="text-xl font-light text-gray-400 mt-2 mb-6">
                Gerencie os detalhes da sua conta.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Informações da conta</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <label className="text-gray-700 font-bold self-center" htmlFor="userId">
                        ID:
                    </label>
                    <input
                        id="userId"
                        type="text"
                        value="8ccf9fdb75c743e094ee69a1b699ad78"
                        disabled
                        className="col-span-2 bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded w-full"
                    />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <label className="text-gray-700 font-bold self-center" htmlFor="displayName">
                        Nome de exibição:
                    </label>
                    <input
                        id="displayName"
                        type="text"
                        value="front-alpha444"
                        disabled
                        className="col-span-2 bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded w-full"
                    />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <label className="text-gray-700 font-bold self-center" htmlFor="email">
                        Endereço de e-mail:
                    </label>
                    <input
                        id="email"
                        type="text"
                        value="d***o@gmail.com"
                        disabled
                        className="col-span-2 bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded w-full"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <button onClick={openModal}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300  flex items-center justify-center">
                    <FaUserEdit 
                className="text-zinc-100 transition-transform duration-300 transform hover:scale-105  h-4 "
                size={48}
            />
                        Atualizar perfil
                    </button>
                    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
                        <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        Excluir conta
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <UpdateProfile closeModal={closeModal} />
                        <button onClick={closeModal} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300">Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
