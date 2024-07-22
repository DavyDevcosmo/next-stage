
import { FaHeart } from 'react-icons/fa';

const HeartButton = () => {
    return (
        <button
        className="flex items-center justify-center p-3 bg-transparent text-white 
        transform transition-transform duration-300 hover:scale-110"
    >
        <FaHeart className="text-2xl" />
    </button>
    );
};

export default HeartButton;
