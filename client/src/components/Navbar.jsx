import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../image/logo.png';

const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center item-center'>
                <img src={logo} className='w-32 cursor-pointer logo' alt="logo" />
            </div>
        </nav>
    );
}

export default Navbar;