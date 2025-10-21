export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 bg-clip-text text-transparent">
              Insurance Sales Distribution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A digital platform for insurance agencies to manage clients, policies, and communications with AI-powered automation.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="flex flex-col items-center space-y-6 pt-8">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-lg">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Management</h3>
            <p className="text-gray-600">Comprehensive CRM for managing your insurance clients and policies.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Support</h3>
            <p className="text-gray-600">Automated SMS reminders and intelligent customer engagement.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">Enterprise-grade security with full TCPA and CCPA compliance.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your agency?
            </h2>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Join the waitlist to be the first to know when AgentSpace launches.
            </p>
            <a
              href="mailto:ashok@useagentspace.com?subject=AgentSpace Waitlist"
              className="inline-block px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

