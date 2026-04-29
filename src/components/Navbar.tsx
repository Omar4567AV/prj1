import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-600">
                            MyShop
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) => 
                            `text-sm font-semibold transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
                        }>
                            Home
                        </NavLink>
                        <NavLink to="/link" className={({ isActive }) => 
                            `text-sm font-semibold transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
                        }>
                            Products
                        </NavLink>

                        {/* Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={toggleDropdown}
                                className="flex items-center text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors outline-none"
                            >
                                Categories
                                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 py-2 animate-in fade-in zoom-in-95 duration-200">
                                    <NavLink to="/action" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Action</NavLink>
                                    <NavLink to="/another-action" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Special Deals</NavLink>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <NavLink to="/something-else" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">New Arrivals</NavLink>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Tools */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 w-48 transition-all focus:w-64"
                            />
                        </div>
                        <NavLink to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/40 transition-all">
                            Login
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 transition-colors p-2">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <NavLink to="/" className="block px-3 py-4 rounded-xl text-base font-bold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Home</NavLink>
                        <NavLink to="/link" className="block px-3 py-4 rounded-xl text-base font-bold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Products</NavLink>
                        <div className="border-t border-gray-100 my-2"></div>
                        <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Categories</div>
                        <NavLink to="/action" className="block px-3 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50">Action</NavLink>
                        <NavLink to="/another-action" className="block px-3 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50">Special Deals</NavLink>
                        <div className="pt-4">
                            <NavLink to="/login" className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-indigo-600/20">
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;