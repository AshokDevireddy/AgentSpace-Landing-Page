import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Backed by YC Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Backed by</span>
              <span className="ml-2 text-sm font-bold text-black">Y Combinator</span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="text-center space-y-6 mb-12">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight ${playfair.className}`}>
              The Future of
              <br />
              Insurance Sales Distribution
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A digital platform for insurance agencies to manage clients, policies, and communications with AI-powered automation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:ashok@useagentspace.com?subject=AgentSpace Demo Request"
              className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Request Demo
            </a>
            <a
              href="mailto:ashok@useagentspace.com?subject=AgentSpace Early Access"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg border-2 border-black hover:bg-gray-50 transition-all"
            >
              Get Early Access
            </a>
          </div>

          {/* Demo Video Placeholder */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">Watch Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your insurance agency in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Connect Your Systems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrate your existing CRM and policy management systems with AgentSpace in minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Automate Workflows
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Let AI handle routine tasks like client follow-ups, policy renewals, and document management.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Grow Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus on what matters most—building relationships and closing deals while we handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfair.className}`}>
                Client Management
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Comprehensive CRM designed specifically for insurance agencies. Track every client interaction, policy detail, and renewal date in one central location.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">360-degree client profiles with complete policy history</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated renewal reminders and follow-ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Smart segmentation for targeted campaigns</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center border border-gray-200">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center border border-gray-200 order-2 md:order-1">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="order-1 md:order-2">
              <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfair.className}`}>
                AI-Powered Support
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Intelligent automation that keeps your clients engaged and informed without the manual effort.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated SMS reminders for payments and renewals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Smart client communication workflows</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 availability for client inquiries</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfair.className}`}>
                Secure & Compliant
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade security with full regulatory compliance built in from day one.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">TCPA and CCPA compliant communications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bank-level encryption for all client data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regular security audits and updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center border border-gray-200">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${playfair.className}`}>
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join the waitlist to be the first to know when AgentSpace launches and get exclusive early access.
          </p>
          <a
            href="mailto:ashok@useagentspace.com?subject=AgentSpace Early Access"
            className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg"
          >
            Get Early Access
          </a>
        </div>
      </section>
    </div>
  );
}
