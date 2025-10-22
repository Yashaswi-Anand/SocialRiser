import Link from 'next/link';

export default function TalentManagement() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/10 via-[#224c94]/10 to-[#1cb299]/5 animate-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#224c94]/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#1cb299]/20 rounded-full opacity-30 animate-float stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#224c94]/15 rounded-full opacity-25 animate-float stagger-4"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-[#1cb299]/15 rounded-full opacity-20 animate-float stagger-6"></div>
        
        {/* Star Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#224c94] rounded-full animate-bounce-custom opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#1cb299] rounded-full animate-bounce-custom stagger-3 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#224c94] rounded-full animate-bounce-custom stagger-5 opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 animate-shimmer">
              Talent Management
            </h1>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#224c94] mb-8">
              ⭐ Nurturing the Stars of Tomorrow ⭐
            </h2>
          </div>
          <div className="animate-fadeInUp stagger-3">
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              At Social Riser, we believe that true talent deserves more than just recognition —
              it deserves direction, opportunity, and growth.
            </p>
          </div>
          
          {/* Animated Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeInUp stagger-4">
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">200+</div>
                <div className="text-gray-600 group-hover:text-[#224c94] transition-colors duration-300">Talents Managed</div>
              </div>
            </div>
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">5M+</div>
                <div className="text-gray-600 group-hover:text-[#1cb299] transition-colors duration-300">Combined Followers</div>
              </div>
            </div>
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">98%</div>
                <div className="text-gray-600 group-hover:text-[#224c94] transition-colors duration-300">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our Talent Management service is designed to help creators and influencers unlock their full potential,
              while giving brands access to the right voices to represent their vision authentically.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We work closely with influencers to build their personal brand, refine their content strategy,
              and connect them with the right opportunities. From negotiation and brand partnerships to audience
              growth and reputation management, our team provides end-to-end support, ensuring our talents don&apos;t
              just grow — they thrive.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              For brands, this means working with professionally managed creators who align perfectly with their
              values, making collaborations seamless, effective, and impactful.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Creators</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Personal brand development and strategy
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Content strategy refinement and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Brand partnership negotiations
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Audience growth and engagement strategies
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Reputation management and crisis support
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  Career mentorship and industry guidance
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Brands</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Access to professionally managed creators
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Perfect brand-creator alignment matching
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Seamless collaboration processes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Guaranteed professionalism and reliability
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Effective and impactful campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  Long-term partnership opportunities
                </li>
              </ul>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our talent management goes beyond short-term deals. We focus on long-term career building,
              helping creators evolve from content makers to influential personalities with sustainable revenue streams.
              Whether you&apos;re a budding creator or an established influencer, we bring strategy, mentorship,
              and industry expertise to help you rise above the noise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With Social Riser Talent Management, you&apos;re not just a creator — you&apos;re a brand in the making.
            </p>
          </div>

          {/* Quote Section */}
          <div className="text-center mb-12">
            <blockquote className="text-3xl font-bold text-purple-600 mb-4">
              &ldquo;We manage the business, so you can focus on creating magic.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                We analyze your content, audience, and goals to understand your unique potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                We develop a personalized growth strategy tailored to your niche and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">
                We implement the strategy, manage partnerships, and handle all business aspects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600">
                We continuously optimize and scale your influence for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Creative Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our talent management program and let us help you build a sustainable,
            profitable career as a content creator.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Apply Now
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}