'use client';

import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  const [premiumValue, setPremiumValue] = useState(860000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculateLeak = (premium: number) => {
    return Math.round((premium * 0.38) / 12);
  };

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most agencies are fully onboarded within 1-2 weeks. Our team handles the technical integration while you focus on your business."
    },
    {
      question: "How is pricing structured?",
      answer: "Pricing is based on the number of active policies and users. We offer flexible plans designed to scale with your agency. Contact us for a custom quote."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide dedicated onboarding support, ongoing technical assistance, and regular check-ins to ensure you're getting the most value from AgentSpace."
    },
    {
      question: "Is my client data secure?",
      answer: "Absolutely. We use bank-grade encryption, conduct regular security audits, and are fully TCPA and CCPA compliant. Your data security is our top priority."
    },
    {
      question: "Can I try AgentSpace before committing?",
      answer: "Yes! We offer personalized demos and can set up a pilot program for your agency. Contact us to schedule a demo and discuss trial options."
    }
  ];

  const carriers = [
    "Aetna", "Aflac", "Liberty Bankers", "Transamerica",
    "Mutual of Omaha", "Kansas City Life", "SBLI", "North American Life"
  ];

  const pieData = [
    { name: 'Combined', value: 49.7, color: '#f97316' },
    { name: 'Aflac', value: 20.4, color: '#6366f1' },
    { name: 'Liberty', value: 15.2, color: '#8b5cf6' },
    { name: 'Others', value: 14.7, color: '#10b981' }
  ];

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
              The Future of Insurance Sales Distribution
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A digital platform for insurance agencies to manage clients, policies, and communications powered by AI automation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://cal.com/ashok-devireddy/30min"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Dashboard Preview with Blue Gradient */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent z-10"></div>

              {/* Dashboard placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="p-8 h-full flex flex-col">
                  {/* Mock dashboard header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white text-2xl font-bold">AgentSpace Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Mock metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 relative group">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Persistency Insights
                      </div>
                      <div className="text-blue-400 text-sm mb-1">Retention Rate</div>
                      <div className="text-white text-3xl font-bold">94.2%</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 relative group">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Top Producers
                      </div>
                      <div className="text-green-400 text-sm mb-1">Active Policies</div>
                      <div className="text-white text-3xl font-bold">2,847</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 relative group">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Book of Business Overview
                      </div>
                      <div className="text-purple-400 text-sm mb-1">Monthly Premium</div>
                      <div className="text-white text-3xl font-bold">$2.1M</div>
                    </div>
                  </div>

                  {/* Mock chart area */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 60, 90, 70, 85, 95, 75, 88, 92].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
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
              Transform Your Agency in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                  1
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Auto-Pull Carrier Data
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI agents automatically extract and sync policy data from carrier reports in minutes.
                </p>
                {/* AI agent pulling data visual */}
                <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border border-gray-200 relative">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs text-gray-600 font-medium text-center">Carrier Reports</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs text-black font-semibold">AI Agent</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-3 shadow-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600 font-medium text-center">AgentSpace</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                  2
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Automate Workflows
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Let AI handle routine tasks like client follow-ups, policy renewals, and document management.
                </p>
                {/* AI workflow visual */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-black">Client: "When is my renewal?"</div>
                      <div className="text-xs text-gray-500 mt-1">AI responds instantly with renewal date</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-black">Automated follow-up sent</div>
                      <div className="text-xs text-gray-500 mt-1">Personalized renewal reminder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                  3
                </div>
                <h3 className={`text-2xl font-bold text-black mb-4 ${playfair.className}`}>
                  Grow Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Focus on relationships and closing deals while AgentSpace manages retention, data, and insights.
                </p>
                {/* Growth metrics visual */}
                <div className="mt-8 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Time Saved per Week</span>
                      <span className="font-semibold text-black">15 hours</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Revenue Leak Reduction</span>
                      <span className="font-semibold text-black">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              Built for Insurance Agencies, Powered by AI
            </h2>
          </div>

          {/* Client Management */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className={`text-4xl font-bold text-black mb-6 ${playfair.className}`}>
                Client Management
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Comprehensive CRM tailored to insurance workflows.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">360 degree client profiles with policy history and renewal data</span>
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
                  <span className="text-gray-700">Smart segmentation for personalized campaigns</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold">Client Dashboard</h4>
                  <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center font-bold text-white">JD</div>
                    <div>
                      <div className="font-medium text-white">John Doe</div>
                      <div className="text-sm text-gray-400">3 Active Policies</div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center font-bold text-white">SM</div>
                    <div>
                      <div className="font-medium text-white">Sarah Miller</div>
                      <div className="text-sm text-gray-400">2 Active Policies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Persistency Insights */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-6 text-black">Active Policies by Carrier</h4>
                <div className="relative h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">2,847</div>
                      <div className="text-sm text-gray-500">Total Policies</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    <div>
                      <div className="text-sm font-semibold text-black">Combined</div>
                      <div className="text-xs text-gray-500">49.7%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                    <div>
                      <div className="text-sm font-semibold text-black">Aflac</div>
                      <div className="text-xs text-gray-500">20.4%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <div>
                      <div className="text-sm font-semibold text-black">Liberty</div>
                      <div className="text-xs text-gray-500">15.2%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div>
                      <div className="text-sm font-semibold text-black">Others</div>
                      <div className="text-xs text-gray-500">14.7%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className={`text-4xl font-bold text-black mb-6 ${playfair.className}`}>
                Persistency Insights
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Understand which carriers, agents, and teams are retaining clients and which are leaking revenue.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carrier-level persistency analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time revenue leak detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Historical performance tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Chat Analytics */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className={`text-4xl font-bold text-black mb-6 ${playfair.className}`}>
                AI Chat Analytics
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Ask your data anything — instantly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Create custom graphs and metrics with natural language</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Compare agents, teams, or carriers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Get visual reports on demand</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-white">"Show me persistency by carrier over the last 6 months"</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-white mb-3">Here is your persistency analysis:</p>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-end justify-between h-24 gap-1">
                        {[85, 78, 82, 88, 90, 92].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-400 mt-2 text-center">7% improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Retention & Messaging */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-8 text-black">Automated Message Timeline</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-black mb-1">Birthday Message</div>
                      <div className="text-sm text-gray-600">Personalized greeting sent automatically</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-black mb-1">Billing Reminder</div>
                      <div className="text-sm text-gray-600">Sent 3 days before payment due</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-black mb-1">Lapse Alert</div>
                      <div className="text-sm text-gray-600">Prevent cancellations before they happen</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-black mb-1">AI Client Assistant</div>
                      <div className="text-sm text-gray-600">Coming soon: 24/7 automated support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className={`text-4xl font-bold text-black mb-6 ${playfair.className}`}>
                Client Retention & Messaging
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Keep every client engaged automatically.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personalized birthday messages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Billing and renewal reminders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lapse prevention alerts (agent + client)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Upcoming AI-powered client assistants</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className={`text-4xl font-bold text-black mb-6 ${playfair.className}`}>
                  Security & Compliance
                </h3>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade security with full regulatory compliance built in.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-black mb-1">TCPA & CCPA</div>
                  <div className="text-xs text-gray-600">Compliant messaging</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-black mb-1">Bank-Grade</div>
                  <div className="text-xs text-gray-600">Encryption</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-black mb-1">Routine Audits</div>
                  <div className="text-xs text-gray-600">Security monitoring</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-black mb-1">Full Transparency</div>
                  <div className="text-xs text-gray-600">Activity logs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section - Leak Calculator */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              Discover Hidden Revenue Leaks in 60 Seconds
            </h2>
            <p className="text-xl text-gray-600">Estimate Your Opportunity</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border-2 border-green-500 rounded-xl p-8 mb-8">
              <div className="text-gray-300 text-sm mb-2">Your Estimated Opportunity</div>
              <div className="text-green-400 text-5xl md:text-6xl font-bold mb-2">
                ${calculateLeak(premiumValue).toLocaleString()}
              </div>
              <div className="text-gray-300 text-sm">in potentially hidden revenue leaks per month</div>
            </div>

            <div className="mb-8">
              <label className="text-white text-lg mb-4 block">
                What&apos;s your monthly premium submitted?
              </label>
              <p className="text-gray-400 text-sm mb-6">(This helps us estimate your potential monthly savings)</p>
              <div className="relative">
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="10000"
                  value={premiumValue}
                  onChange={(e) => setPremiumValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl px-8 py-5 inline-block mb-8">
              <div className="text-black text-3xl font-bold">
                ${(premiumValue).toLocaleString()}
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500 rounded-lg p-5">
              <p className="text-green-400 text-sm">
                Agencies submitting ${(premiumValue/1000).toFixed(0)}K/month typically discover ${(calculateLeak(premiumValue)*0.7).toLocaleString()} to ${(calculateLeak(premiumValue)*1.1).toLocaleString()} in hidden leaks monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              From Chaos to Clarity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">Before AgentSpace</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-700">Dozens of spreadsheets, no clear persistency tracking</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-700">Missed renewals and untracked lapses</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-700">Hours spent manually updating CRMs</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-700">No visibility into carrier performance</p>
                </div>
              </div>
              {/* Chaotic visual */}
              <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-12 bg-red-100 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">After AgentSpace</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Unified dashboard showing carrier-level persistency</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Automated lapse detection and client messaging</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">AI workflows updating client and policy data automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Real-time insights across all carriers and agents</p>
                </div>
              </div>
              {/* Clean dashboard visual */}
              <div className="mt-6 p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-green-600/50">
                <div className="flex items-center justify-between text-white text-xs mb-3">
                  <span>Dashboard Overview</span>
                  <span className="text-green-400">● Live</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/10 rounded p-2 text-center">
                    <div className="text-white text-lg font-bold">94%</div>
                    <div className="text-gray-400 text-xs">Retention</div>
                  </div>
                  <div className="bg-white/10 rounded p-2 text-center">
                    <div className="text-white text-lg font-bold">2.8K</div>
                    <div className="text-gray-400 text-xs">Policies</div>
                  </div>
                  <div className="bg-white/10 rounded p-2 text-center">
                    <div className="text-white text-lg font-bold">$2.1M</div>
                    <div className="text-gray-400 text-xs">Premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfair.className}`}>
              Why We Built AgentSpace
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The founders ran a multi-million-dollar insurance agency but lacked visibility into what was actually working.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                They couldn't tell which carriers were bleeding money or which agents needed help. Critical business decisions were being made in the dark.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Frustrated by expensive, clunky software that didn't solve their real problems, they built the solution themselves — combining real industry experience with modern AI technology.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-50 border-2 border-orange-500">
                <span className="text-sm font-bold text-orange-600">Backed by Y Combinator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              Trusted by Agencies Working With
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {carriers.map((carrier, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:border-gray-300 transition-all group"
              >
                <span className="text-lg font-semibold text-gray-400 group-hover:text-black transition-colors">
                  {carrier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfair.className}`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${playfair.className}`}>
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join our waitlist to be the first to know when AgentSpace launches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://cal.com/ashok-devireddy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg"
            >
              Request Demo
            </a>
            <a
              href="mailto:ashok@useagentspace.com?subject=AgentSpace Waitlist"
              className="px-10 py-5 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all text-lg"
            >
              Join Waitlist
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <div className={`text-2xl font-bold text-white ${playfair.className}`}>
              AgentSpace
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="text-sm font-bold text-white">Backed by Y Combinator</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
