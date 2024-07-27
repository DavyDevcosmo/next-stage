import { Link } from "react-router-dom";

export const NavBar = () => (
    <nav className="flex space-x-4  items-center justify-around
        gap-6">
        <Link
            to="/home"
            className="relative px-2 py-1 text-gray-300 border-b-2 border-transparent
            hover:text-gray-300 hover:border-gray-300 
            before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
            before:bg-transparent before:shadow-lg before:shadow-transparent 
            transform hover:scale-105 transition-all duration-300"
        >
            Home
        </Link>
        <Link
            to="/games"
            className="relative px-2 py-1 text-gray-300 border-b-2 border-transparent
            hover:text-gray-300 hover:border-gray-300 
            before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
            before:bg-transparent before:shadow-lg before:shadow-transparent 
            transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
        >
            Games 
        </Link>
        <Link
            to="/awards"
            className="relative px-4 py-2 text-gray-300 border-b-2 border-transparent
            hover:text-gray-100 hover:border-gray-100
            transform hover:scale-105 transition-transform duration-300"
        >
            THE GAME AWARDS
        </Link>
        <Link to="/home" className="text-black relative px-2 py- border-b-2 border-transparent
                hover:text-blue-700 hover:border-gray-300 
                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
                before:bg-transparent before:shadow-lg before:shadow-transparent 
                transform hover:scale-105 transition-all duration-300" >VOLTAR</Link>

    </nav>
);
