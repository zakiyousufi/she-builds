import { Link } from 'react-router-dom';
import { HiHome, HiOutlineChatAlt2, HiOutlineUserGroup } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaXing } from 'react-icons/fa';
import Logo from '../assets/images/LOGO-removebg.png';

const Sidebar = () => {
  return (
  <div className="sidebar font-sans fixed flex flex-col top-0 left-0 w-64 bg-sky-500 h-full border-r">
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col justify-center py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-col justify-center items-center h-20 my-1">
            <img className='w-3/4' src={Logo} alt='ASWE LOGO' />
            <h1 className='title text-2xl text-white font-sans'>SAWE</h1>
          </div>
        </li>
        <li>
          <Link to="/" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
             <span className='text-left'>Home</span>
             <HiHome className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>About</span>
            <HiOutlineUserGroup className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/uder-dev" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Programs and acivities</span>
            <HiOutlineChatAlt2 className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/uder-dev" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Success Stories</span>
            <HiOutlineChatAlt2 className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/uder-dev" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>News</span>
            <HiOutlineChatAlt2 className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/FAQs" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>FAQs</span>
            <HiOutlineChatAlt2 className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex flex-row text-gray-100 justify-between items-center h-12 px-4 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20">
            <span className='text-left'>Contact</span>
            <HiOutlineChatAlt2 className="h-5 w-5" />
          </Link>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex space-x-3">
          <a href='https://twitter.com/societyawe' target='_blank' rel="noreferrer">
            <FaXing className="h-6 w-6 text-gray-100 hover:text-gray-300" />
          </a>
          <a href='https://facebook.com/profile.php?id=61555435473113' target='_blank' rel="noreferrer">
            <FaFacebook className="h-6 w-6 text-gray-100 hover:text-gray-300" />
          </a>
          <a href='https://linkedin.com/in/saweofficial2024' target='_blank' rel="noreferrer">
            <FaLinkedin className="h-6 w-6 text-gray-100 hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Sidebar;
