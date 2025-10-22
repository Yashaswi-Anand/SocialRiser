import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#1cb299]/20 to-[#224c94]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#224c94]/20 to-[#1cb299]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1cb299]/10 to-[#224c94]/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1cb299] to-[#224c94] rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <span className="text-white font-bold text-xl animate-pulse">SR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1cb299] to-[#224c94] bg-clip-text text-transparent">
                  Social Riser
                </h3>
                <p className="text-sm text-gray-300 animate-shimmer">Your Growth Our Success</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed animate-fadeInUp delay-200">
              Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling. 
              We bridge the gap between talent and opportunity in the digital world.
            </p>
            <div className="flex space-x-4 animate-fadeInUp delay-300">
              <a href="#" className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1cb299]/50 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1cb299] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1cb299]/20 to-[#224c94]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a href="#" className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1cb299]/50 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1cb299] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1cb299]/20 to-[#224c94]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a href="#" className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1cb299]/50 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1cb299] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1cb299]/20 to-[#224c94]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a href="#" className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1cb299]/50 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1cb299] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1cb299]/20 to-[#224c94]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-400">
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#1cb299] to-[#224c94] bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/about" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/services" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/contact" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp delay-500">
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#1cb299] to-[#224c94] bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/services/influencer-marketing" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Influencer Marketing
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <Link href="/services/talent-management" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Talent Management
                </Link>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <a href="#" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Brand Partnerships
                </a>
              </li>
              <li className="transform transition-all duration-300 hover:translate-x-2">
                <a href="#" className="group relative text-gray-300 hover:text-[#1cb299] transition-colors duration-300 flex items-center">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Content Strategy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="relative border-t border-white/10 mt-12 pt-8 animate-fadeInUp delay-600">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1cb299]/50 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="group">
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#1cb299] to-[#224c94] bg-clip-text text-transparent">
                Get in Touch
              </h4>
              <p className="text-gray-300 mb-2">
                <span className="inline-flex items-center group-hover:text-[#1cb299] transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-[#1cb299] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@socialriser.com
                </span>
              </p>
            </div>
            <div className="text-left md:text-right">
              <Link href="/contact">
                <button className="group relative bg-gradient-to-r from-[#1cb299] to-[#224c94] text-white px-8 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1cb299]/25">
                  <span className="relative z-10">Start Collaborating</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#224c94] to-[#1cb299] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fadeInUp delay-700">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#224c94]/50 to-transparent"></div>
          <p className="text-gray-400 text-sm animate-shimmer">
            © 2025 <span className="text-[#1cb299] font-semibold">Social Riser</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="relative text-gray-400 hover:text-[#1cb299] text-sm transition-all duration-300 group">
              <span className="relative z-10">Privacy Policy</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="relative text-gray-400 hover:text-[#1cb299] text-sm transition-all duration-300 group">
              <span className="relative z-10">Terms of Service</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="relative text-gray-400 hover:text-[#1cb299] text-sm transition-all duration-300 group">
              <span className="relative z-10">Cookie Policy</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1cb299] to-[#224c94] group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;