
import { Logo } from './logo';
import HeartIcon from './HeartIcon';


import UserIcon from './Avatar';
import { NavBar } from './NavBar';
import SearchForm from './SearchBar';

const Header = () => {
    return (
        <header className='
        px-4 h-16
        flex items-center justify-between
        gap-6
        bg-NavBar
        '>
            <Logo/>

            <NavBar/>
            
            < SearchForm/>
            <HeartIcon/>
            <UserIcon/>
        </header>
    );
};

export default Header;
