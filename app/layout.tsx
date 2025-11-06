import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

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
        <div className="min-h-screen flex flex-col bg-white">
          <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-5">
                <Link href="/" className={`text-3xl font-bold text-black tracking-tight ${playfair.className}`}>
                  AgentSpace
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
                    Privacy
                  </Link>
                  <a
                    href="https://app.useagentspace.com"
                    className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    Login
                  </a>
                  <a
                    href="https://cal.com/ashok-devireddy/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Request Demo
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-500 text-sm">
                  © 2025 AgentSpace Inc. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <Link href="/terms" className="text-gray-500 hover:text-black transition-colors">
                    Terms & Conditions
                  </Link>
                  <Link href="/privacy" className="text-gray-500 hover:text-black transition-colors">
                    Privacy Policy
                  </Link>
                  <a href="mailto:ashok@useagentspace.com" className="text-gray-500 hover:text-black transition-colors">
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

