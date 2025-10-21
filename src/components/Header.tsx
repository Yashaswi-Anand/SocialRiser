'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 150);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
            <header className="bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl animate-fadeInDown max-w-7xl mx-auto border border-white/20">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left side - Logo and Title */}
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                {/* Logo placeholder - you can replace with actual logo */}
                                <div className="w-10 h-10 bg-gradient-to-r from-[#1cb299] to-[#224c94] rounded-lg flex items-center justify-center animate-pulse-custom hover-glow transition-all duration-300">
                                    <span className="text-white font-bold text-lg">SR</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold gradient-text">Social Riser</h1>
                                <p className="text-sm text-gray-600">Your Growth Our Success</p>
                            </div>
                        </div>

                        {/* Right side - Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-[#1cb299] transition-all duration-300 hover:scale-110 relative group"
                            >
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1cb299] transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-[#1cb299] transition-all duration-300 hover:scale-110 relative group"
                            >
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1cb299] transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-gray-700 hover:text-[#1cb299] transition-all duration-300 hover:scale-110 relative group flex items-center">
                                    Services
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isServicesOpen && (
                                    <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200">
                                        <div className="py-2">
                                            <Link
                                                href="/services/influencer-marketing"
                                                className="block px-4 py-2 text-gray-700 hover:bg-[#1cb299]/10 hover:text-[#1cb299] transition-colors duration-200"
                                            >
                                                Influencer Marketing
                                            </Link>
                                            <Link
                                                href="/services/talent-management"
                                                className="block px-4 py-2 text-gray-700 hover:bg-[#1cb299]/10 hover:text-[#1cb299] transition-colors duration-200"
                                            >
                                                Talent Management
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-[#1cb299] to-[#224c94] text-white font-bold text-lg px-4 py-1 rounded-full hover:from-[#224c94] hover:to-[#1cb299] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border-2 border-white/20"
                            >
                                Collaborate
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 hover:text-[#1cb299] transition-colors duration-200"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 animate-fadeInDown">
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-700 hover:text-[#1cb299] transition-colors duration-200 text-lg font-medium"
                            >
                                Home
                            </Link>
                            
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-700 hover:text-[#1cb299] transition-colors duration-200 text-lg font-medium"
                            >
                                About
                            </Link>
                            
                            <div className="space-y-2">
                                <div className="text-gray-700 font-medium text-lg">Services</div>
                                <div className="pl-4 space-y-2">
                                    <Link
                                        href="/services/influencer-marketing"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-gray-600 hover:text-[#1cb299] transition-colors duration-200"
                                    >
                                        Influencer Marketing
                                    </Link>
                                    <Link
                                        href="/services/talent-management"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-gray-600 hover:text-[#1cb299] transition-colors duration-200"
                                    >
                                        Talent Management
                                    </Link>
                                </div>
                            </div>
                            
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block bg-gradient-to-r from-[#1cb299] to-[#224c94] text-white text-center py-3 px-6 rounded-full font-bold hover:from-[#224c94] hover:to-[#1cb299] transition-all duration-300"
                            >
                                Collaborate
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;