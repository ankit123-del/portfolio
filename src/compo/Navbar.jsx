import React from 'react';
import { Link } from 'react-scroll';
import SocialMedia from './SocialMedia';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-400">Ankit Sharma</div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="home" smooth duration={500} className="hover:text-indigo-400 cursor-pointer">Home</Link>
          <Link to="about" smooth duration={500} className="hover:text-indigo-400 cursor-pointer">About</Link>
          <Link to="projects" smooth duration={500} className="hover:text-indigo-400 cursor-pointer">Projects</Link>
          <Link to="skills" smooth duration={500} className="hover:text-indigo-400 cursor-pointer">Skills</Link>
          <Link to="contact" smooth duration={500} className="hover:text-indigo-400 cursor-pointer">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex">
          <SocialMedia />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
