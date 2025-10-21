export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: October 21, 2025 | Last Updated: October 21, 2025</p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
          <p className="text-gray-700">
            Protecting your privacy and data security is our highest priority. This Privacy Policy explains how AgentSpace Inc.
            ("AgentSpace," "we," "our," or "us") collects, uses, and protects your personal information across our websites,
            platform, and communication systems (including text messaging).
          </p>
          <p className="text-gray-700 mt-4 font-semibold">
            By using our services, you consent to the data practices described here.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Our Commitment to Privacy</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We never sell or rent your data.</li>
            <li>No mobile information will ever be sold, shared, or transferred to third parties for promotional or marketing purposes.</li>
            <li>All data is encrypted in transit and at rest using industry-standard encryption protocols (TLS 1.2+ and AES-256).</li>
            <li>We use your data only to provide, improve, and secure your experience on the AgentSpace platform.</li>
            <li>We are compliant with relevant privacy and communication laws including the Telephone Consumer Protection Act (TCPA),
            CAN-SPAM, and state data privacy acts such as the California Consumer Privacy Act (CCPA).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect the following types of information:</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Account and Contact Information</h3>
          <p className="text-gray-700">
            Name, phone number, email address, mailing address, date of birth, and professional license information (for agents).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Client and Policy Information</h3>
          <p className="text-gray-700">
            Insurance policy details such as policy number, coverage amount, effective date, billing cycle, payment history,
            and beneficiary data.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Communication Data</h3>
          <p className="text-gray-700">
            Text messages, emails, or recorded conversations exchanged through AgentSpace systems, including both automated
            and agent-driven communications.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Device and Usage Information</h3>
          <p className="text-gray-700">
            IP address, device type, operating system, browser type, session activity, and general location data.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Payment and Transaction Information</h3>
          <p className="text-gray-700">
            Billing data provided when purchasing services or paying commissions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
          <p className="text-gray-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide CRM and agency management services.</li>
            <li>Send SMS reminders, notifications, and updates regarding client policies.</li>
            <li>Enable AI-driven conversational agents to answer client questions, collect information, and provide support.</li>
            <li>Offer relevant product recommendations, including annuities or related insurance products, with appropriate consent.</li>
            <li>Improve our services through analytics and product development.</li>
            <li>Detect, prevent, and address security incidents or fraud.</li>
            <li>Comply with laws, regulations, and contractual obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. AI and Conversational Messaging</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AgentSpace's AI assistants may use limited data such as your name, policy details, and interaction history to
            generate personalized and relevant responses.</li>
            <li>All AI communications are logged for quality assurance and compliance.</li>
            <li>AI models do not have unrestricted access to your private data; inputs are securely filtered and processed.</li>
            <li>You will always have the right to opt out of AI messaging.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">We retain your information only as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>deliver our services,</li>
            <li>meet legal and regulatory obligations, or</li>
            <li>resolve disputes and enforce agreements.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Conversations and message logs may be kept for up to seven years for compliance and audit purposes unless otherwise
            required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing</h2>
          <p className="text-gray-700 mb-4">We may share your data only with:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your insurance agency or authorized agent(s)</li>
            <li>Service providers that help us deliver messaging, data storage, or analytics services (e.g., Telnyx, Twilio, AWS, Supabase)</li>
            <li>Legal or regulatory authorities, when required by law</li>
            <li>Successor entities, in the event of a merger or acquisition (with notice to you)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            All third parties must comply with strict data protection and confidentiality obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You can opt out of SMS messages at any time by replying STOP.</li>
            <li>You can request data access, correction, or deletion by emailing{' '}
              <a href="mailto:ashok@useagentspace.com" className="text-primary-600 hover:text-primary-700 underline">
                ashok@useagentspace.com
              </a>.
            </li>
            <li>You can disable cookies in your browser or opt out of analytics collection.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
          <p className="text-gray-700 mb-4">
            All information is encrypted and stored securely. We regularly review our systems for potential vulnerabilities and
            implement advanced monitoring to detect unauthorized access.
          </p>
          <p className="text-gray-700">
            Despite these measures, no system is completely secure. If we detect a breach, we will notify affected users promptly
            with full transparency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
          <p className="text-gray-700">
            Our platform is not intended for use by minors under 18. We do not knowingly collect or store personal data from
            individuals under 18 without parental consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy periodically. The latest version will always be available at{' '}
            <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
              https://useagentspace.com/privacy
            </a>
            . Significant changes will be communicated via email or in-app notification.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
          <p className="text-gray-700">
            AgentSpace Inc.<br />
            Email:{' '}
            <a href="mailto:ashok@useagentspace.com" className="text-primary-600 hover:text-primary-700 underline">
              ashok@useagentspace.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

