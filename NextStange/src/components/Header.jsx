import { Link } from 'react-router-dom';
//import logo from '../assets/Logo_NextStage.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaUser } from 'react-icons/fa';

const SearchBar = ({ handleSubmit, handleChange, searchTerm }) => {
    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleChange}
                aria-label="Campo de pesquisa"
            />
            
        </form>
    );
};

// Adicionando validação de props com PropTypes
SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pesquisa realizada:', searchTerm);
        // Aqui você pode adicionar a lógica para realizar a pesquisa
        // Por exemplo, fazer uma chamada para uma API ou atualizar o estado
    };

    return (
        <section>
            
            <nav className="navigate-brand">
                <Link to="/home">Home</Link>
                <Link to="/games">Games</Link>
            </nav>

            <SearchBar
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                searchTerm={searchTerm}
            />

<button className="heart-button">
            <FaHeart />
        </button>

        <button className="user-button">
            <FaUser />
        </button>
        </section>
    );
};
