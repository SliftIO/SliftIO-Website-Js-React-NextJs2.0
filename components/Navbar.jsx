'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateTo = (path) => {
    window.location.href = path;
    setDropdownOpen(false);
  };

  const dropdownVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-02" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          Slift.io
        </h2>
        <div className="relative">
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white bg-opacity-10 backdrop-blur-md ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
              style={{ backdropFilter: 'blur(10px)' }}
              variants={dropdownVariants}
              initial="hidden"
              animate="show"
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <motion.button onClick={() => navigateTo('/')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem" variants={itemVariants}>Home</motion.button>
                <motion.button onClick={() => navigateTo('/blog')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem" variants={itemVariants}>Blog</motion.button>
                <motion.button onClick={() => navigateTo('/projetos')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem" variants={itemVariants}>Projetos</motion.button>
                <motion.button onClick={() => navigateTo('/contato')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem" variants={itemVariants}>Contato</motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
