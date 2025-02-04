import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" className="w-full text-white py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold animate__animated animate__fadeIn">
            <a href="#hero">Dev.Kajal</a>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="hover:text-blue-400 transition-colors"
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* <!-- Mobile Menu Button --> */}
          <button className="md:hidden" onClick={toggleMobileMenu} id="menuBtn">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transform transition-transform duration-300`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} aria-label="Close Menu">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-8 mt-16">
              <a
                href="#about"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Experience
              </a>
              <a
                href="#achievements"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Achievements
              </a>
              <a
                href="#contact"
                className="text-xl hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
