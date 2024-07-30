import LogoNext from "../assets/Logo.png";
import PropTypes from 'prop-types';

export const ShowError = ({ timer }) => {
    return (
        <div className=" inset-0 flex items-center justify-center z-50  ">
            <div className="absolute top-6 left-6">
                <img src={LogoNext} alt="Logo NextStage" className="h-12" />
            </div>
            <div className="bg-teste text-slate-50 p-4 rounded-md relative w-full text-center ">
                <h2 className="text-3xl font-bold mb-2">Erro</h2>
                <p>Conta já existente!</p>
                <div className="absolute bottom-2 left-0 right-0">
                    <div className="w-full bg-neutral-900 h-1 rounded">
                        <div
                            className="bg-red-600 -500 h-full rounded"
                            style={{ width: `${timer}%`, transition: 'width .05s' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowError.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    timer: PropTypes.number.isRequired,
};
export const ShowSuccess = ({ userName,timer }) => {
    return (
        <div className="bg-white text-green-600 p-4 rounded-md w-full text-center absolute top-1 shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-green-500">Cadastro feito com sucesso!</h2>
        <p className="text-green-600">Bem-vindo à NextStage, {userName}!</p>
        <div className="absolute bottom-2 left-0 right-0">
            <div className="w-full bg-gray-200 h-1 rounded">
                <div
                    className="bg-green-500 h-full rounded"
                    style={{ width: `${timer}%`, transition: 'width .05s' }}
                />
            </div>
        </div>
    </div>
    
    )
        
    
};

ShowSuccess.propTypes = {
    userName: PropTypes.string.isRequired,
    timer: PropTypes.number.isRequired,
};
