export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In today's fast-paced digital era, social media has become the heartbeat of marketing, 
              entertainment, and storytelling. Every day, countless influencers and creators are rising 
              with unique ideas, creativity, and passion. Some are striving for name and fame, while 
              others are looking to turn their passion into a sustainable career.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              But in this highly competitive space, growth isn't just about creativity—it's about 
              opportunity, strategy, and the right connections. This is where Social Riser comes in.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are not just another influencer marketing agency; we are a growth ecosystem built 
                to connect talented creators with forward-thinking brands, creating powerful collaborations 
                that drive success for both. Our mission is simple yet impactful:
              </p>
              
              <blockquote className="text-2xl font-semibold text-blue-600 text-center italic border-l-4 border-blue-500 pl-6">
                "Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling."
              </blockquote>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              At Social Riser, we believe that when the right creator and right brand come together, 
              it's more than just a campaign — it's the beginning of a movement.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We empower creators to unlock their full potential and build sustainable careers 
                through strategic partnerships and growth opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connection</h3>
              <p className="text-gray-600">
                We create meaningful connections between creators and brands, fostering relationships 
                that go beyond single campaigns to build lasting partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We prioritize authentic storytelling and genuine brand-creator matches that resonate 
                with audiences and drive real engagement and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to grow or a brand seeking authentic partnerships, 
            we're here to help you rise to new heights.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Join as Creator
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Partner with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}