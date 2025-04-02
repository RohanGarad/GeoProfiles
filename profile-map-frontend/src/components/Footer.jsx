import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Profile Explorer</h2>
            <p className="text-gray-400 text-sm">Discover profiles with ease.</p>
          </div>

          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/admin" className="hover:text-gray-300">Admin Panel</a></li>
              <li><a href="https://rohangarad.netlify.app/" className="hover:text-gray-300">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/rohangarad/" className="hover:text-gray-300">LinkedIN</a></li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/rohangarad/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-lg">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rohangarad" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-lg">
              <FaGithub />
            </a>
            <a href="mailto:rohangarad21@gmail.com" className="hover:text-gray-400 text-lg">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Profile Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
