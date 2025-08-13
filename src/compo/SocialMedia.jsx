import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter ,FaInstagram} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 text-xl">
      <a
        href="https://github.com/ankit123-del"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ankit-sharma031/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400"
      >
        <FaLinkedin />
        
      </a>
      <a
        href="https://www.instagram.com/ankit_sharma031/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
