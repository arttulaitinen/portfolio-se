import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Link to main */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-gray-300 transition"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://github.com/arttulaitinen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/laitinea/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              LinkedIn
            </a>
            {/* Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-300 transition font-medium flex items-center">
                See all contents
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <hr className="border-gray-600" />
                <Link
                  to="/internship-reflection"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Internship Reflection
                </Link>
                <Link
                  to="/ci-cd-pipeline"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  CI/CD Pipeline
                </Link>
                <Link
                  to="/design-doc"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Design Document
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="https://github.com/arttulaitinen/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/laitinea/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded transition"
            >
              LinkedIn
            </a>
            <div className="px-3 py-2">
              <p className="text-white font-medium mb-2">
                Projektit ja kurssit
              </p>
              <div className="pl-4 space-y-1"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
