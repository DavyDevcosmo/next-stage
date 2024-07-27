import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const UpdateProfile = ({ closeModal }) => {
    const { updateEmailAddress, currentUser } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(currentUser.email);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        if (email === currentUser.email) {
            setLoading(false);
            return navigate("/");
        }

        try {
            await updateEmailAddress(email);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao tentar atualizar o usuario");
        }

        setLoading(false);
        closeModal();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-700">Atualizar Perfil</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(element) => setEmail(element.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded mt-2 mb-4 text-gray-700"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                    Atualizar
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
