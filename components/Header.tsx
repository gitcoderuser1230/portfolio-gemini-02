
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'rgba(15, 23, 42, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            PS.
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 ${
                    currentPage === item.id 
                    ? 'text-blue-400 after:w-full' 
                    : 'text-slate-300 hover:text-blue-400 hover:after:w-full after:w-0'
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
