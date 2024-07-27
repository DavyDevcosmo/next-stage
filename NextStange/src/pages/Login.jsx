import LogoNext from "../assets/Logo.png";
import Bg from "../assets/bg.jpg";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasDigit &&
            hasSpecialChar
        );
    };

    const validateForm = () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = "Email inválido";
        }

        if (!validatePassword(password)) {
            newErrors.password = "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais";
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }

        try {
            await signIn(email, password);
            navigate("/home");
        } catch (error) {
            alert("Ocorreu um erro ao fazer login");
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="absolute top-8 left-6">
                <img src={LogoNext} alt="" className="h-12" />
            </div>

            <div className="absolute bottom-3 ml-9">
                <h1 className="text-left text-slate-50 font-bold text-6xl">LOGIN</h1>
            </div>

            <div className="flex flex-col items-center min-h-screen justify-end overflow-hidden">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg h-[500px] flex flex-col justify-between ml-auto mr-12 mb-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">Bem-vindo de volta!</h2>

                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-MAIL</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                required
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">SENHA</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                required
                            />
                            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
                        </div>

                        <div className="flex justify-between mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-indigo-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {loading ? "Carregando..." : "Login"}
                                
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Esqueceu a senha? <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-500">Resetar senha</Link>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Criar nova conta? <Link to="/" className="text-indigo-600 hover:text-indigo-500">Cadastre-se</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
