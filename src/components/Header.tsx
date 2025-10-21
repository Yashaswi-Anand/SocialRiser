'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
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
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                            {/* Logo placeholder - you can replace with actual logo */}
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">SR</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Social Riser</h1>
                            <p className="text-sm text-gray-600">Your Growth Our Success</p>
                        </div>
                    </div>

                    {/* Right side - Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center">
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
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            Influencer Marketing
                                        </Link>
                                        <Link
                                            href="/services/talent-management"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            Talent Management
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Collaborate
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;