export const servicesPageContent = {
  hero: {
    titlePrefix: "Practical AI That",
    titleHighlight: "Powers Growth",
    description:
      "We build and manage the systems that attract new customers, convert more calls, and keep your existing customers coming back — implemented in days or weeks, not months.",
  },
  services: [
    {
      id: "voice-ai",
      iconKey: "mic",
      title: "Voice AI",
      subtitle: "Inbound Reception & Outbound Calling",
      description:
        "Never miss a call, an inquiry, or an opportunity. Our AI voice agents handle inbound calls 24/7 — answering questions, booking appointments, and routing to the right person. We also deploy outbound voice AI for follow-ups, confirmations, and reactivation campaigns.",
      benefits: [
        "24/7 inbound call handling and reception",
        "Appointment booking and confirmations",
        "Outbound calling for follow-ups and campaigns",
        "Seamless handoff to your team when needed",
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: "retention-loyalty",
      iconKey: "users",
      title: "Retention & Loyalty Programs",
      subtitle: "Keep Customers Coming Back",
      description:
        "Your existing customers are your most valuable asset — and most businesses are quietly losing them. We design and automate the programs that win them back and keep them loyal: reactivation campaigns, rebooking reminders, review management, and loyalty programs built for your business.",
      benefits: [
        "Automated customer reactivation campaigns",
        "Rebooking reminders and follow-up sequences",
        "Review generation and reputation management",
        "Custom loyalty program design and automation",
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      id: "lead-generation",
      iconKey: "target",
      title: "Lead Generation & Ads",
      subtitle: "Attract Qualified Customers",
      description:
        "Grow your customer base with targeted ad campaigns built for performance. We design, launch, and manage paid advertising strategies that consistently generate qualified leads and new customer bookings — without wasting budget on the wrong audience.",
      benefits: [
        "Targeted paid ad campaign management",
        "Lead capture and qualification",
        "Performance tracking and optimization",
        "Consistent pipeline of new customer appointments",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "ai-automation",
      iconKey: "brain",
      title: "AI & Automation Consulting",
      subtitle: "Practical AI, Implemented Fast",
      description:
        "Not sure where AI fits in your business — or how to get the most from it? We assess your operations, identify high-impact opportunities, and design practical AI and automation solutions that deliver results. No jargon, no months-long projects — just clear strategy and fast execution.",
      benefits: [
        "AI readiness and opportunity assessment",
        "Workflow automation design and deployment",
        "Process re-engineering for operational efficiency",
        "Ongoing optimization and performance reviews",
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
    },
  ],
  ctaSection: {
    title: "Ready to Stop Losing Revenue?",
    description:
      "Let's find exactly where opportunities are slipping through and build the systems to capture them.",
  },
} as const;
