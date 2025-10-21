'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const brands = [
    'Nike', 'Adidas', 'Apple', 'Samsung', 'Coca-Cola', 'McDonald\'s',
    'Google', 'Amazon', 'Netflix', 'Spotify', 'Tesla', 'Microsoft'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/10 via-[#224c94]/10 to-[#1cb299]/5 animate-gradient"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#1cb299]/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#224c94]/20 rounded-full opacity-30 animate-float stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#1cb299]/15 rounded-full opacity-25 animate-float stagger-4"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#224c94]/15 rounded-full opacity-20 animate-float stagger-6"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text animate-shimmer">Crafting the Future</span>
              <br />
              <span className="text-gray-800 animate-fadeInUp stagger-2">of Influencer</span>
            </h1>
          </div>

          <div className="animate-fadeInUp stagger-3">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Connecting brands with creators to design unforgettable campaigns that inspire,
              engage, and transform digital influence into real-world impact.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#1cb299] to-[#224c94] text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-[#224c94] hover:to-[#1cb299] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-custom">
              <span className="flex items-center">
                Get Started
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button className="group glass border-2 border-[#1cb299] text-[#1cb299] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#1cb299] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#1cb299]/10 to-[#224c94]/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#224c94]/20 rounded-full opacity-10 animate-float stagger-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">What We Do</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with influencers and authentic brands to create meaningful
              partnerships that drive real results and build lasting relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group animate-fadeInUp stagger-1">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-2xl flex items-center justify-center mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1cb299] transition-colors duration-300">Influencer Matching</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We connect brands with the perfect influencers who align with their values,
                    audience, and campaign objectives for authentic partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-fadeInUp stagger-2">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#224c94]/5 to-[#1cb299]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-2xl flex items-center justify-center mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#224c94] transition-colors duration-300">Campaign Strategy</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our expert team develops comprehensive campaign strategies that maximize
                    reach, engagement, and conversion rates across all social platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-fadeInUp stagger-3">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-2xl flex items-center justify-center mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">Performance Analytics</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Track and measure campaign success with detailed analytics and insights
                    that help optimize future collaborations and maximize ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      {/* <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
              Trusted by Leading Brands
            </h2>
          </div>
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover-lift group"
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#1cb299] to-[#224c94] bg-clip-text text-transparent whitespace-nowrap group-hover:from-[#224c94] group-hover:to-[#1cb299] transition-all duration-300">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-10 animate-float stagger-4"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">Get In Touch</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next campaign? Let's discuss how we can help you
              connect with the right influencers and achieve your goals.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-2">
            <form onSubmit={handleSubmit} className="glass p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-lg border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="animate-fadeInLeft stagger-1">
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg hover:border-blue-300"
                    placeholder="Your full name"
                  />
                </div>
                <div className="animate-fadeInRight stagger-1">
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg hover:border-blue-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-8 animate-fadeInUp stagger-2">
                <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-3">
                  Company/Brand
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg hover:border-blue-300"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-10 animate-fadeInUp stagger-3">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg hover:border-blue-300 resize-none"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>

              <div className="text-center animate-fadeInUp stagger-4">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-custom"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
