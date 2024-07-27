import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

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

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        setLoading(false);
        return;
    }

    if (step < 3) {
        setStep(step + 1);
    } else {
        try {
            await signUp(email, password);
        } catch (error) {
            alert("Ocorreu um erro ao tentar criar o usuário");
            console.log(error);
        }
    }
    setLoading(false);
};

const handleBack = () => {
    setStep(step - 1);
};

return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        
        <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md h-[500px] flex flex-col justify-between">
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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 mb-9 "
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
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 ">CONFIRMAÇÃO DE SENHA</label>
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
                        className="bg-indigo-700 text-white py-2 px-4 rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        {loading ? "Carregando..." : step === 3 ? "Cadastrar" : "Avançar"}
                    </button>
                </div>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    Já possui uma conta? <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
                </p>
            </div>
        </div>
    </div>

);