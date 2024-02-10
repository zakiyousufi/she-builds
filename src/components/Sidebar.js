import { Link } from 'react-router-dom';
import { HiHome, HiOutlineChatAlt2, HiOutlineUserGroup } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaXing } from 'react-icons/fa';
import Logo from '../assets/LOGO-removebg.png';

const Sidebar = () => {
  return (
  <div class="fixed flex flex-col top-0 left-0 w-64 bg-sky-500 h-full border-r">
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
      <ul class="flex flex-col justify-center py-4 space-y-1">
        <li class="px-5">
          <div class="flex flex-row justify-center items-center h-20 my-1">
            <img className='w-3/4' src={Logo} alt='ASWE LOGO' />
          </div>
        </li>
        <li>
          <Link to="/" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
             <span className='text-left'>Home</span>
             <HiHome class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/about" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>About</span>
            <HiOutlineUserGroup class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/program" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Programs and Activities</span>
            <HiOutlineChatAlt2 class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/program" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Success Stories</span>
            <HiOutlineChatAlt2 class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/program" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>News</span>
            <HiOutlineChatAlt2 class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/program" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>FAQs</span>
            <HiOutlineChatAlt2 class="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/contact" class="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Contact</span>
            <HiOutlineChatAlt2 class="h-5 w-5" />
          </Link>
        </li>
      </ul>
      <div class="flex flex-col items-center justify-center p-4">
        <div class="flex space-x-3">
          <FaFacebook class="h-6 w-6 text-gray-100 hover:text-gray-300" />
          <FaLinkedin class="h-6 w-6 text-gray-100 hover:text-gray-300" />
          <FaXing class="h-6 w-6 text-gray-100 hover:text-gray-300" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Sidebar;
