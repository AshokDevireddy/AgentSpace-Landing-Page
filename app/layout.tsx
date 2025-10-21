import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentSpace - The Future of Insurance Sales Distribution",
  description: "AgentSpace provides a digital platform for insurance agencies to manage clients, policies, and communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  AgentSpace
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/terms" className="text-gray-700 hover:text-primary-600 transition-colors">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-gray-700 hover:text-primary-600 transition-colors">
                    Privacy
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-600 text-sm">
                  © 2025 AgentSpace Inc. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Terms & Conditions
                  </Link>
                  <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Privacy Policy
                  </Link>
                  <a href="mailto:ashok@useagentspace.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

