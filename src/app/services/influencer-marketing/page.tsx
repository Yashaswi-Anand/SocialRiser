import Link from 'next/link';

export default function InfluencerMarketing() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/10 via-[#224c94]/10 to-[#1cb299]/5 animate-gradient"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#224c94]/20 rounded-full opacity-30 animate-float stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#1cb299]/15 rounded-full opacity-25 animate-float stagger-4"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-[#224c94]/15 rounded-full opacity-20 animate-float stagger-6"></div>

        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#1cb299] rounded-full animate-bounce-custom opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#224c94] rounded-full animate-bounce-custom stagger-3 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#1cb299] rounded-full animate-bounce-custom stagger-5 opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 animate-shimmer">
              Influencer Marketing
            </h1>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#224c94] mb-8">
              For Brands
            </h2>
          </div>
          <div className="animate-fadeInUp stagger-3">
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              Transform your brand&apos;s reach through authentic connections and trusted voices
              that resonate with your target audience.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeInUp stagger-4">
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">500+</div>
                <div className="text-gray-600 group-hover:text-[#1cb299] transition-colors duration-300">Successful Campaigns</div>
              </div>
            </div>
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">10M+</div>
                <div className="text-gray-600 group-hover:text-[#224c94] transition-colors duration-300">Audience Reached</div>
              </div>
            </div>
            <div className="group">
              <div className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2 animate-pulse-custom">95%</div>
                <div className="text-gray-600 group-hover:text-[#1cb299] transition-colors duration-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-gradient-to-br from-white via-[#1cb299]/5 to-[#224c94]/5 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#1cb299]/10 to-[#224c94]/10 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#224c94]/10 to-[#1cb299]/10 rounded-full opacity-10 animate-float stagger-4"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-fadeInUp">
            <div className="glass p-12 rounded-3xl shadow-2xl mb-16 backdrop-blur-lg border border-white/20">
              <h2 className="text-5xl font-bold gradient-text mb-8 text-center">The Challenge</h2>
              <p className="text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Traditional advertising is losing its charm in today&apos;s digital-first world.
                Consumers now demand authentic connections and real experiences.
              </p>
            </div>
          </div>

          <div className="text-center animate-fadeInUp stagger-2">
            <h2 className="text-5xl font-bold gradient-text mb-12">Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInLeft stagger-3">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Social Riser bridges the gap between brands and influencers, ensuring your message
                  reaches the right audience through voices they trust and relate to.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our data-driven strategies, combined with deep insights into creator ecosystems,
                  allow us to design campaigns that not only increase reach but also deliver tangible business results.
                </p>
              </div>
              <div className="animate-fadeInRight stagger-3">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full mx-auto animate-pulse-custom opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">Authentic Growth</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#1cb299]/10 to-[#224c94]/10 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#224c94]/20 rounded-full opacity-10 animate-float stagger-3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group animate-fadeInUp stagger-1">
              <div className="glass p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/5 to-[#224c94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-2xl flex items-center justify-center mb-8 animate-pulse-custom group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1cb299] transition-colors duration-300">Data-Driven Strategies</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We use advanced analytics and market insights to create campaigns that deliver
                    measurable results and maximize your ROI.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#224c94] transition-colors duration-300">Perfect Matching</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our deep understanding of creator ecosystems ensures we match your brand
                    with influencers who truly align with your values and audience.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1cb299] transition-colors duration-300">Authentic Connections</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We prioritize genuine relationships between brands and creators, ensuring
                    authentic content that resonates with target audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Process */}
      <section className="py-24 bg-gradient-to-br from-white via-[#1cb299]/5 to-[#224c94]/5 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#1cb299]/10 to-[#224c94]/10 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-[#224c94]/10 to-[#1cb299]/10 rounded-full opacity-10 animate-float stagger-4"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">Our Campaign Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group animate-fadeInUp stagger-1">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mx-auto animate-pulse-custom group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <span className="text-white font-bold text-3xl">1</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/20 to-[#224c94]/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1cb299] transition-colors duration-300">Strategy & Planning</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We analyze your brand, goals, and target audience to develop a comprehensive campaign strategy.
              </p>
            </div>

            <div className="text-center group animate-fadeInUp stagger-2">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mx-auto animate-pulse-custom group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <span className="text-white font-bold text-3xl">2</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#224c94]/20 to-[#1cb299]/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#224c94] transition-colors duration-300">Influencer Selection</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Using our extensive network and data insights, we identify and vet the perfect creators for your campaign.
              </p>
            </div>

            <div className="text-center group animate-fadeInUp stagger-3">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mx-auto animate-pulse-custom group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <span className="text-white font-bold text-3xl">3</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb299]/20 to-[#224c94]/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1cb299] transition-colors duration-300">Campaign Execution</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We manage all aspects of campaign execution, from content creation to posting schedules and compliance.
              </p>
            </div>

            <div className="text-center group animate-fadeInUp stagger-4">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mx-auto animate-pulse-custom group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                  <span className="text-white font-bold text-3xl">4</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#224c94]/20 to-[#1cb299]/20 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#224c94] transition-colors duration-300">Analytics & Optimization</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We track performance metrics and provide detailed reports with insights for future campaign optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#1cb299]/10 to-[#224c94]/10 relative overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1cb299]/20 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#224c94]/20 rounded-full opacity-10 animate-float stagger-3"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">Why Choose Social Riser?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fadeInLeft">
              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1cb299] transition-colors duration-300">Increased Reach & Engagement</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Tap into established audiences that trust and engage with our creators.</p>
                </div>
              </div>

              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#224c94] transition-colors duration-300">Authentic Brand Representation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Work with creators who genuinely align with your brand values and message.</p>
                </div>
              </div>

              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1cb299] transition-colors duration-300">Measurable ROI</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Track concrete business results with our comprehensive analytics and reporting.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fadeInRight">
              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#224c94] transition-colors duration-300">Cost-Effective Marketing</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Achieve better results at lower costs compared to traditional advertising methods.</p>
                </div>
              </div>

              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1cb299] to-[#224c94] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1cb299] transition-colors duration-300">Long-term Partnerships</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Build lasting relationships with creators for ongoing brand advocacy.</p>
                </div>
              </div>

              <div className="group flex items-start hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#224c94] to-[#1cb299] rounded-full flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#224c94] transition-colors duration-300">Expert Management</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Our experienced team handles all campaign complexities, so you can focus on your business.</p>
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
              Ready to Transform Your Marketing?
            </h2>
          </div>
          <div className="animate-fadeInUp stagger-2">
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let&apos;s create authentic campaigns that connect your brand with the right audience
              through trusted influencer partnerships.
            </p>
          </div>
          <div className="animate-fadeInUp stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-white text-[#1cb299] px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Start Your Campaign
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="group glass border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-[#1cb299] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  <svg className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View All Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}