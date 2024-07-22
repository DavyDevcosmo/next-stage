import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const UserProfile = () => {
    const {  logOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            alert("Ocorreu um erro ao efetuar o logout");
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-light text-gray-700">Configurações da conta</h1>
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
                    <Link to="/update-profile" className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-700 transition-colors duration-300">
                        <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536M9 13h3v3m-2.293-5.293a1 1 0 011.414 0l6.586 6.586a1 1 0 010 1.414l-3.172 3.172a1 1 0 01-1.414 0L6.343 14.343a1 1 0 010-1.414l2.293-2.293z"></path></svg>
                        Atualizar perfil
                    </Link>
                    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4  rounded-3xl hover:bg-red-700 transition-colors duration-300">
                        <svg className="w-6 h-6 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        Deletar conta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
