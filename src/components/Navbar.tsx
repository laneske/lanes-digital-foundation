import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>
          Lanes Foundations
        </Link>
        <div className='hidden md:flex space-x-6'>
          <Link to='/' className='text-gray-600 hover:text-blue-500'>Home</Link>
          <Link to='/about' className='text-gray-600 hover:text-blue-500'>About Us</Link>
          <Link to='/services' className='text-gray-600 hover:text-blue-500'>Services</Link>
          <Link to='/programs' className='text-gray-600 hover:text-blue-500'>Programs</Link>
          <Link to='/get-involved' className='text-gray-600 hover:text-blue-500'>Get Involved</Link>
          <Link to='/contact' className='text-gray-600 hover:text-blue-500'>Contact</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white px-6 pb-4'>
          <Link to='/' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/about' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to='/services' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>Services</Link>
          <Link to='/programs' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>Programs</Link>
          <Link to='/get-involved' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>Get Involved</Link>
          <Link to='/contact' className='block py-2 text-gray-600 hover:text-blue-500' onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;