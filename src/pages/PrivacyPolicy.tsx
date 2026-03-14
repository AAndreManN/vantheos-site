import { Layout } from "@/components/layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding pt-32 pb-20">
        <div className="container-wide max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p><strong>Effective Date:</strong> 12/01/2025</p>
            <p><strong>Company:</strong> Vantheos</p>
            
            <p>
              Vantheos ("Company," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you provide. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold text-foreground">a. Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Billing and payment information</li>
              <li>Any information voluntarily submitted through forms, chats, or consultations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">b. Messaging Data</h3>
            <p>If you opt in to receive SMS/MMS messages, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mobile phone number</li>
              <li>Message content</li>
              <li>Message timestamps</li>
              <li>Opt-in and opt-out records</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">c. Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and usage data</li>
            </ul>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our services</li>
              <li>Communicate regarding services, onboarding, and support</li>
              <li>Send marketing and promotional messages (with consent)</li>
              <li>Improve our website, services, and automation workflows</li>
              <li>Maintain compliance with legal, regulatory, and carrier requirements</li>
            </ul>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">3. SMS & Messaging Privacy (A2P Compliance)</h2>
            <p>By providing your phone number and opting in, you consent to receive SMS/MMS messages from <strong>Vantheos</strong>.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Message frequency may vary</li>
              <li>Message & data rates may apply</li>
              <li>You may opt out at any time by replying <strong>STOP</strong></li>
              <li>For help, reply <strong>HELP</strong></li>
            </ul>
            <p><strong>Mobile information will not be shared with third parties for marketing or promotional purposes.</strong></p>
            <p>We do not sell or rent your mobile information.</p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">4. Sharing of Information</h2>
            <p>We may share information only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers and technology partners necessary to operate our services (e.g., CRM, messaging platforms, analytics tools)</li>
              <li>Legal authorities if required by law or to protect our rights</li>
            </ul>
            <p>We do <strong>not</strong> sell personal information.</p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no electronic transmission or storage method is 100% secure.
            </p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">6. Your Rights & Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of SMS communications at any time</li>
              <li>Unsubscribe from marketing emails</li>
              <li>Request access, correction, or deletion of your personal data (subject to legal requirements)</li>
            </ul>
            <p>Requests may be submitted via our contact channels.</p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">7. Cookies & Tracking</h2>
            <p>
              We may use cookies and similar tracking technologies to improve user experience, analyze website traffic, and optimize marketing efforts. You may disable cookies through your browser settings.
            </p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">8. Third-Party Links & Platforms</h2>
            <p>
              Our website and services may contain links to third-party websites or tools. We are not responsible for the privacy practices of these third parties.
            </p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">9. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
            </p>

            <hr className="border-border" />

            <h2 className="text-2xl font-bold text-foreground">10. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us through our website or support channels.
            </p>
            <p><strong>Vantheos</strong></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;