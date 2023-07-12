import {Outlet, Link, useLocation} from 'react-router-dom';
// Solid icon 
import {AiFillHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {BiSolidCategory} from 'react-icons/bi';
import {BsBagHeartFill} from 'react-icons/bs';
import {BsChatDotsFill} from 'react-icons/bs';

// regular icon 
import {AiOutlineHome} from 'react-icons/ai';
import {BiCategory} from 'react-icons/bi';
import {BsBagHeart} from 'react-icons/bs';
import {BsChatDots} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';

const Navigation = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  
  return (
    <>
     <nav className="w-full xl:w-fit bg-white fixed xl:static bottom-0 left-0 p-5 shadow-[0_0_3px_rgba(0,0,0,.3)] xl:shadow-none rounded-t-3xl xl: rounded-none  xl:hidden">
        <ul className="flex items-center justify-between gap-5">
          <li>
            <Link to={'/'} className="flex flex-col items-center justify-center gap-1">
              {
                currentLocation === '/' ? <AiFillHome className="text-2xl" /> : <AiOutlineHome className="text-2xl"/>
              }
              <span className="text-sm xl:hidden">Home</span>
            </Link>
          </li>
          <li >
            <Link to={'/category'} className="flex flex-col items-center justify-center gap-1">
              {
                currentLocation === '/category' ? <BiSolidCategory  className="text-2xl"/> : <BiCategory  className="text-2xl"/>
              }
              <span className="text-sm xl:hidden">Category</span>
            </Link>
          </li>
          <li  >
             <Link to={'/wishlist'} className="flex flex-col items-center justify-center gap-1">
                {
                  currentLocation === '/wishlist' ? <BsBagHeartFill  className="text-2xl"/> : <BsBagHeart  className="text-2xl"/>
                }
                <span className="text-sm xl:hidden mt-1">Wishlist</span>
             </Link>
          </li>
          <li  >
             <Link to={'/message'} className="flex flex-col items-center justify-center gap-1">
                {
                  currentLocation === '/message' ? <BsChatDotsFill  className="text-2xl"/> : <BsChatDots  className="text-2xl"/>
                }
              <span className="text-sm xl:hidden mt-1">Message</span>
             </Link>
          </li>
          <li>
            <Link to="/profile" className="flex flex-col items-center justify-center">
              <BiUserCircle className="text-3xl"/>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;