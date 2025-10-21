import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for creators and brands to grow, connect, and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* For Influencers */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">For Influencers</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Rise Above the Noise</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your content is your voice, and at Social Riser, we believe your voice deserves to be heard. 
                Whether you are just starting your journey or already established, we work closely with you 
                to unlock high-value brand collaborations that resonate with your audience and boost your earning potential.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Our approach focuses on:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Building long-term partnerships instead of one-off deals
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Connecting you with brands that align with your niche and values
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Helping you grow your personal brand while increasing financial stability
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Join as Influencer
              </button>
            </div>

            {/* Talent Management */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="/services/talent-management" className="hover:text-purple-600 transition-colors">
                  Talent Management
                </Link>
              </h2>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Nurturing the Stars of Tomorrow</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Social Riser, we believe that true talent deserves more than just recognition — it deserves 
                direction, opportunity, and growth. Our Talent Management service is designed to help creators 
                and influencers unlock their full potential.
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6">
                <p className="text-gray-600 italic text-center">
                  "We manage the business, so you can focus on creating magic."
                </p>
              </div>
              
              <Link href="/services/talent-management">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Influencer Marketing for Brands */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="/services/influencer-marketing" className="hover:text-green-600 transition-colors">
                  Influencer Marketing
                </Link>
              </h2>
              <h3 className="text-xl font-semibold text-green-600 mb-4">For Brands</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Traditional advertising is losing its charm in today's digital-first world. Consumers now 
                demand authentic connections and real experiences. Social Riser bridges the gap between 
                brands and influencers, ensuring your message reaches the right audience through voices 
                they trust and relate to.
              </p>
              
              <div className="mb-6">
                <p className="text-gray-700">
                  Our data-driven strategies, combined with deep insights into creator ecosystems, allow us 
                  to design campaigns that not only increase reach but also deliver tangible business results.
                </p>
              </div>
              
              <Link href="/services/influencer-marketing">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                  Partner with Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ✨ Join Social Riser Today
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            Your Influence, Our Mission.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}