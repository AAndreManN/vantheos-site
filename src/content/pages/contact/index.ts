export const contactPageContent = {
  hero: {
    titlePrefix: "Let's Talk",
    titleHighlight: "Growth",
    description: "Ready to capture more leads, convert more calls, and keep more customers? Let's find out where to start.",
  },
  form: {
    title: "Send a Message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "you@company.com",
      },
      phone: {
        label: "Phone Number",
        placeholder: "(555) 123-4567",
      },
      company: {
        label: "Company",
        placeholder: "Company name",
      },
      service: {
        label: "Service Interest",
        placeholder: "Select a service",
        options: [
          "Voice AI",
          "Retention & Loyalty Programs",
          "Lead Generation & Ads",
          "AI & Automation Consulting",
          "General Inquiry",
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell us about your operational challenges...",
      },
    },
    submitLabel: "Send Message",
    submittingLabel: "Sending...",
  },
  toast: {
    title: "Message sent",
    description: "We'll be in touch within 24 hours.",
  },
  callout: {
    title: "Book a Discovery Call",
    description: "Schedule a 30-minute discovery call to discuss your operational challenges.",
  },
  contactInfo: {
    title: "Other Ways to Reach Us",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
} as const;
