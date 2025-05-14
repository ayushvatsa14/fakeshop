import Logo from '../Logo.png';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header(){
    const cart=useSelector((state) => state.cart);

    return (
        <div className='w-11/12 max-w-[1060px] mx-auto pb-2 bg-white flex justify-between items-center border-b-2 border-gray'>
            <Link to='/'>
                <img src={Logo} className='w-[5rem] h-[5rem]' />
            </Link>

            <div className='flex gap-4 justify-center items-center'>
                <Link to='/'>
                    <p className='text-[1.1rem] font-semibold'>Home</p>
                </Link>

                <Link to='/'>
                    <p className='text-[1.1rem] font-semibold'>About</p>
                </Link>

                <Link to='/'>
                    <p className='text-[1.1rem] font-semibold'>Valuable Members</p>
                </Link>
            </div>

            <Link to='/cart' className='flex gap-2 justify-center items-center relative'>
                <FaCartShopping fontSize={22} />
                <span className='text-[1.2rem] font-semibold pr-4'>Cart</span>

                {cart.length>0 ?
                (<div className='absolute left-3 -top-2 px-2 py-1 bg-green-600 text-[0.6rem] text-white font-bold rounded-[50%] transition-all duration-200 animate-bounce'>{cart.length}</div>)
                :
                (<div></div>)}
            </Link>
        </div>
    );
}

export default Header;