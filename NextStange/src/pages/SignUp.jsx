import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import LogoNext from "../assets/Logo.png";
import Bg from "../assets/bg.jpg";
import { ShowError, ShowSuccess } from '../components/MessageComponents';

const SignUp = () => {
    const [step, setStep] = useState(1);
    const { signUp } = useAuth();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(100); // 100% inicialmente
    const navigate = useNavigate();

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

        if (step === 1 && !validateEmail(email)) {
            newErrors.email = "Email inválido";
        }

        if (step === 2 && userName.trim() === '') {
            newErrors.userName = "Nome de usuário não pode ficar em branco";
        }

        if (step === 3 && !validatePassword(password)) {
            newErrors.password = "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais";
        }

        if (step === 3 && password !== confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem";
        }

        return newErrors;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});
        setShowError(false);
        setShowSuccess(false);

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }

        if (step < 3) {
            setStep(step + 1);
            setLoading(false);
        } else {
            try {
                await signUp(email, password);
                setShowSuccess(true);
                setLoading(false);

                // Start the timer for success message
                const interval = setInterval(() => {
                    setTimer(prev => {
                        if (prev <= 0) {
                            clearInterval(interval);
                            navigate("/auth/home");
                        }
                        return prev - 1;
                    });
                }, 50); // decrease timer every 50ms
            } catch (error) {
                // Show error message
                setErrorMessage(error.message.includes('already exists') ? 'Conta já existente!' : 'Erro ao criar conta.');
                setShowError(true);

                // Start the timer for error message

                const errorInterval = setInterval(() => {
                    setTimer(prev => {
                        if (prev <= 0) {
                            clearInterval(errorInterval);
                            setShowError(false);
                            setErrorMessage('');
                            setTimer(100); // Reset timer for future errors
                        }
                        return prev - 1;
                    });
                }, 50); // decrease timer every 50ms

                setLoading(false);
            }
        }
    };
    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <section className="relative min-h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${Bg})` }}>
           


            {/* Formulário */}
            <div className="flex flex-col items-center min-h-screen justify-end overflow-hidden">
                <div className="absolute bottom-3 left-6">

                    <h1 className="text-left text-slate-50 font-bold text-6xl">CRIAR UMA CONTA</h1>
                </div>

                
                {/* Feedback de erro */}
                {showError && <ShowError errorMessage={errorMessage} timer={timer} />}

                {/* Logo */}
                <div className="absolute top-6 left-6">
                    <img src={LogoNext} alt="Logo NextStage" className="h-12" />

                </div>
                

                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md h-[500px] flex flex-col justify-between ml-auto mr-12 mb-6 mt-5">
                    {/* Indicadores de etapa */}
                    <div className="flex justify-center mb-6 space-x-8">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={`w-10 h-2 rounded-full ${step === item ? "bg-red-500" : "bg-gray-300"} transition-colors`}
                            ></div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between h-full">
                        {step === 1 && (
                            <div>
                                <h1 className="text-black font-medium flex justify-center mt-7">Qual é o seu email?</h1>
                                <p className="text-center font-medium text-gray-700 mt-4 mb-6">Não se preocupe, não vamos contar pra ninguém.</p>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-MAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 mb-9"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h1 className="text-black font-medium text-lg flex justify-center">Escolha um nome de usuário</h1>
                                <h2 className="text-black font-medium text-lg flex justify-center">seja criativo</h2>
                                <p className="text-center font-medium text-gray-500 mt-4 mb-7 tracking-wider">Utilizado para fazer login em <br /> todos os nossos jogos.</p>
                                <label htmlFor="userName" className="block text-sm font-medium text-gray-500 mt-8">NOME DE USUÁRIO</label>
                                <input
                                    type="text"
                                    id="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 mb-9"
                                />
                                {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
                            </div>
                        )}

                        {step === 3 && (
                            <>
                                <div>
                                    <h1 className="text-black font-medium text-lg flex justify-center">Escolha uma boa senha.</h1>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-6">SENHA</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">CONFIRMAÇÃO DE SENHA</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                                </div>
                            </>
                        )}

                        <div className="flex justify-between">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Voltar
                                </button>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-indigo-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {loading ? "Carregando..." : step === 3 ? "Cadastrar" : "Avançar"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Já possui uma conta? <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
