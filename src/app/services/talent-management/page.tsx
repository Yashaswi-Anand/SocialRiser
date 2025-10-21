import Link from 'next/link';

export default function TalentManagement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Talent Management
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
            Nurturing the Stars of Tomorrow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Social Riser, we believe that true talent deserves more than just recognition — 
            it deserves direction, opportunity, and growth.
          </p>
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
              growth and reputation management, our team provides end-to-end support, ensuring our talents don't 
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
              Whether you're a budding creator or an established influencer, we bring strategy, mentorship, 
              and industry expertise to help you rise above the noise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With Social Riser Talent Management, you're not just a creator — you're a brand in the making.
            </p>
          </div>

          {/* Quote Section */}
          <div className="text-center mb-12">
            <blockquote className="text-3xl font-bold text-purple-600 mb-4">
              "We manage the business, so you can focus on creating magic."
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