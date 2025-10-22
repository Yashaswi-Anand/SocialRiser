'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    instagram: '',
    youtube: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
User Type: ${formData.userType || 'Not specified'}
Instagram: ${formData.instagram || 'Not provided'}
YouTube: ${formData.youtube || 'Not provided'}

Description:
${formData.description}
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:contact@socialriser.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      userType: '',
      instagram: '',
      youtube: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen relative py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/10 via-[#224c94]/10 to-[#1cb299]/5 animate-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#224c94]/20 rounded-full opacity-30 animate-float stagger-2"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#1cb299]/15 rounded-full opacity-25 animate-float stagger-4"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#224c94]/15 rounded-full opacity-20 animate-float stagger-6"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#1cb299] rounded-full animate-bounce-custom opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#224c94] rounded-full animate-bounce-custom stagger-3 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#1cb299] rounded-full animate-bounce-custom stagger-5 opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 animate-shimmer">
              Contact Us
            </h1>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate? Get in touch with us and let&apos;s create something amazing together.
            </p>
          </div>
          
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mt-12 animate-fadeInUp stagger-3">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center animate-pulse-custom group-hover:scale-125 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-[#1cb299] transition-colors duration-300">Email</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center animate-pulse-custom group-hover:scale-125 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-[#224c94] transition-colors duration-300">Chat</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center animate-pulse-custom group-hover:scale-125 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-[#1cb299] transition-colors duration-300">Visit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-white via-[#1cb299]/5 to-[#224c94]/5 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#1cb299]/10 to-[#224c94]/10 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#224c94]/10 to-[#1cb299]/10 rounded-full opacity-10 animate-float stagger-4"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">Let&apos;s Start a Conversation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-2">
            <div className="glass p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-lg border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="animate-fadeInLeft stagger-1">
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#1cb299]/20 focus:border-[#1cb299] transition-all duration-300 text-lg text-gray-900 placeholder-gray-500 hover:border-[#1cb299]/50 group-hover:shadow-lg"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="animate-fadeInRight stagger-1">
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#1cb299]/20 focus:border-[#1cb299] transition-all duration-300 text-lg text-gray-900 placeholder-gray-500 hover:border-[#1cb299]/50 group-hover:shadow-lg"
                      placeholder="your@email.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#224c94]/5 to-[#1cb299]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* User Type Radio Buttons */}
                <div className="animate-fadeInUp stagger-2">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    I am a *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <label className="group flex items-center cursor-pointer p-4 rounded-2xl border-2 border-gray-200 hover:border-[#1cb299] transition-all duration-300 hover:shadow-lg">
                      <input
                        type="radio"
                        name="userType"
                        value="Brand"
                        checked={formData.userType === 'Brand'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#1cb299] bg-gray-100 border-gray-300 focus:ring-[#1cb299] focus:ring-2"
                        required
                      />
                      <span className="ml-3 text-gray-700 font-semibold text-lg group-hover:text-[#1cb299] transition-colors duration-300">🏢 Brand</span>
                    </label>
                    <label className="group flex items-center cursor-pointer p-4 rounded-2xl border-2 border-gray-200 hover:border-[#224c94] transition-all duration-300 hover:shadow-lg">
                      <input
                        type="radio"
                        name="userType"
                        value="Influencer/Creator"
                        checked={formData.userType === 'Influencer/Creator'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#224c94] bg-gray-100 border-gray-300 focus:ring-[#224c94] focus:ring-2"
                        required
                      />
                      <span className="ml-3 text-gray-700 font-semibold text-lg group-hover:text-[#224c94] transition-colors duration-300">🎨 Influencer/Creator</span>
                    </label>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="grid md:grid-cols-2 gap-8 animate-fadeInUp stagger-3">
                  <div className="group">
                    <label htmlFor="instagram" className="block text-lg font-semibold text-gray-700 mb-3">
                      Instagram Profile
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <input
                        type="url"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500 hover:border-pink-300 group-hover:shadow-lg"
                        placeholder="https://instagram.com/username"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="youtube" className="block text-lg font-semibold text-gray-700 mb-3">
                      YouTube Channel
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <input
                        type="url"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500 hover:border-red-300 group-hover:shadow-lg"
                        placeholder="https://youtube.com/@username"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Description Field */}
                <div className="animate-fadeInUp stagger-4">
                  <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-3">
                    Description *
                  </label>
                  <div className="relative group">
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#1cb299]/20 focus:border-[#1cb299] transition-all duration-300 text-lg text-gray-900 placeholder-gray-500 hover:border-[#1cb299]/50 group-hover:shadow-lg resize-none"
                      placeholder="Tell us about your project, goals, or how we can help you..."
                    ></textarea>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8 animate-fadeInUp stagger-5">
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-[#1cb299] to-[#224c94] text-white px-12 py-5 rounded-full text-xl font-bold hover:from-[#224c94] hover:to-[#1cb299] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-custom relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-gradient-to-br from-[#1cb299] to-[#224c94] relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse-custom"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">Get in Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp stagger-2">
            <div className="group glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-white/80 mb-4">Send us a message and we&apos;ll respond within 24 hours</p>
              <a 
                href="mailto:contact@socialriser.com" 
                className="text-white font-semibold text-lg hover:text-white/80 transition-colors duration-300 underline decoration-2 underline-offset-4"
              >
                contact@socialriser.com
              </a>
            </div>
            
            <div className="group glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
              <p className="text-white/80 mb-4">We typically respond to all inquiries within</p>
              <span className="text-white font-bold text-2xl">24 Hours</span>
            </div>
            
            <div className="group glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-white/80 mb-4">Connecting creators and brands worldwide</p>
              <span className="text-white font-bold text-2xl">🌍 Worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}