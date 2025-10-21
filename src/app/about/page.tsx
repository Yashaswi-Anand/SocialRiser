export default function About() {
  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8">
              About Us
            </h1>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-white via-[#1cb299]/5 to-[#224c94]/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#1cb299]/10 to-[#224c94]/10 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#224c94]/10 to-[#1cb299]/10 rounded-full opacity-10 animate-float stagger-4"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="animate-fadeInUp">
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              In today's fast-paced digital era, social media has become the heartbeat of marketing,
              entertainment, and storytelling. Every day, countless influencers and creators are rising
              with unique ideas, creativity, and passion. Some are striving for name and fame, while
              others are looking to turn their passion into a sustainable career.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-2">
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              But in this highly competitive space, growth isn't just about creativity — it's about
              opportunity, strategy, and the right connections. This is where <span className="gradient-text font-bold text-2xl">Social Riser</span> comes in.
            </p>
          </div>

          <div className="animate-fadeInUp stagger-3">
            <div className="glass p-12 rounded-3xl shadow-2xl mb-12 backdrop-blur-lg border border-white/20">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                We are a growth ecosystem built
                to connect talented creators with forward-thinking brands, creating powerful collaborations
                that drive success for both. Our mission is simple yet impactful:
              </p>

              <blockquote className="text-3xl md:text-4xl font-bold gradient-text text-center italic relative">
                <div className="absolute -top-4 -left-4 text-6xl text-[#1cb299]/20">"</div>
                Empowering creators to rise, connect, and thrive while helping brands grow through authentic storytelling.
                <div className="absolute -bottom-8 -right-4 text-6xl text-[#224c94]/20">"</div>
              </blockquote>
            </div>
          </div>

          <div className="animate-fadeInUp stagger-4">
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              At Social Riser, we believe that when the right creator and right brand come together,
              it's more than just a campaign — <span className="gradient-text font-semibold">it's the beginning of a movement.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#1cb299]/10 to-[#224c94]/10 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#224c94]/20 rounded-full opacity-10 animate-float stagger-3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group animate-fadeInUp stagger-1">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1cb299] transition-colors duration-300">Empowerment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We empower creators to unlock their full potential and build sustainable careers
                    through strategic partnerships and growth opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-fadeInUp stagger-2">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#224c94]/5 to-[#1cb299]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#224c94] transition-colors duration-300">Connection</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We create meaningful connections between creators and brands, fostering relationships
                    that go beyond single campaigns to build lasting partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="group animate-fadeInUp stagger-3">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1cb299] transition-colors duration-300">Authenticity</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We prioritize authentic storytelling and genuine brand-creator matches that resonate
                    with audiences and drive real engagement and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1cb299] to-[#224c94] relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse-custom"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your Journey?
            </h2>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Whether you're a creator looking to grow or a brand seeking authentic partnerships,
              we're here to help you rise to new heights.
            </p>
          </div>
          <div className="animate-fadeInUp stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-[#1cb299] px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                Join as Creator
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group glass border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-[#1cb299] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Partner with Us
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}