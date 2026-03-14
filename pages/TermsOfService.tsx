import { Layout } from "@/components/layout";

const TermsOfService = () => {
  return (
    <Layout>
      <section className="section-padding pt-32 pb-20">
        <div className="container-wide max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing or using the services of Vantheos ("the Company," "we," "us," or "our"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Description of Services</h3>
              <p className="mb-3">
                Vantheos provides AI consulting and automation services, which may include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>AI strategy and consulting</li>
                <li>Business process automation</li>
                <li>Voice agent development and deployment</li>
                <li>Process re-engineering</li>
                <li>CRM and automation setup</li>
                <li>AI-driven business tools and integrations</li>
              </ul>
              <p className="mt-3">
                Services may be offered on a subscription, project, or consulting basis and are subject 
                to change at the Company's discretion.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Messaging & Communications</h3>
              <p className="mb-3">
                By providing your phone number and opting in, you consent to receive SMS and MMS messages 
                from Vantheos, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service-related notifications</li>
                <li>Appointment and onboarding updates</li>
                <li>Marketing and promotional messages</li>
                <li>Account alerts and business communications</li>
              </ul>
              <p className="mt-3">
                <strong>Message frequency may vary.</strong> Message & data rates may apply. 
                You may opt out at any time by replying STOP. Consent to receive messages is 
                not a condition of purchase.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Client Responsibilities</h3>
              <p className="mb-3">Clients and users agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of login credentials</li>
                <li>Use services in compliance with all applicable laws and regulations</li>
                <li>Obtain proper consent from their own contacts before initiating automated communications</li>
                <li>Not use the Company's services for spam, fraud, or unlawful purposes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h3>
              <p>
                All materials, strategies, templates, software configurations, and content created by 
                Vantheos remain the intellectual property of the Company unless otherwise agreed in writing. 
                Clients are granted a limited, non-transferable license for business use only.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h3>
              <p>
                Services are provided "as is" and "as available" without warranties of any kind. 
                Vantheos shall not be liable for any indirect, incidental, special, or consequential damages, 
                including loss of revenue, data, or business opportunities arising from use of our services 
                or communications.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">7. Compliance & Third-Party Platforms</h3>
              <p>
                The Company utilizes third-party platforms (including CRM, messaging, and automation providers). 
                Vantheos is not responsible for outages, policy changes, or compliance actions taken by 
                third-party providers or mobile carriers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">8. Modifications to Terms</h3>
              <p>
                Vantheos reserves the right to update or modify these Terms of Service at any time. 
                Continued use of services after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">9. Termination</h3>
              <p>
                We reserve the right to suspend or terminate services for violations of these Terms, 
                non-payment, or activities that jeopardize compliance with legal or carrier regulations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h3>
              <p>
                For questions regarding these Terms of Service or messaging communications, please contact 
                us via our website or support channels provided during onboarding.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              <strong>Last Updated:</strong> December 2024
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;