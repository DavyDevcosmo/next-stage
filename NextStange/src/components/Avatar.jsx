import { Link } from 'react-router-dom'
import avatar from'../assets/user.svg'

const Avatar = () => (
    <div>
<Link to='/userProfile'>
    <img 
        className="rounded-full border-2 border-zinc-400 transition-transform transition-border duration-300 transform hover:scale-105 hover:border-white"
        width={48}
        height={48}
        src={avatar}
        alt="User"
        />
    </Link>
    
        </div>
);
  
  
  export default Avatar

