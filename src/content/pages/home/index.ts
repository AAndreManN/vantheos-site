import { siteCtas } from "@/content/site";

export const homeContent = {
  hero: {
    headingPrefix: "Stop Losing Revenue —",
    headingHighlight: "You've Earned It",
    subheadline: "Vantheos uses practical AI to capture more leads, convert more calls, and keep your customers coming back.",
    description:
      "From first contact to long-term loyalty — implemented in days or weeks, not months.",
    primaryCta: {
      label: siteCtas.bookDiscoveryCall.label,
      href: siteCtas.bookDiscoveryCall.href,
      external: siteCtas.bookDiscoveryCall.external,
    },
    secondaryCta: {
      label: "Explore Services",
      href: "/services",
    },
  },
  servicesOverview: {
    eyebrow: "What We Do",
    title: "Practical AI That Drives Real Results",
    description:
      "We build and manage the systems that attract new customers, convert more calls, and keep your existing customers coming back.",
    items: [
      {
        iconKey: "mic",
        title: "Voice AI",
        description:
          "AI-powered inbound reception and outbound calling — available 24/7 so you never miss a lead or a booking.",
      },
      {
        iconKey: "users",
        title: "Retention & Loyalty Programs",
        description:
          "Reactivate lapsed customers, automate rebooking reminders, manage reviews, and build loyalty programs that keep customers coming back.",
      },
      {
        iconKey: "target",
        title: "Lead Generation & Ads",
        description:
          "Targeted ad campaigns that consistently generate qualified leads and new customer appointments without wasting budget.",
      },
      {
        iconKey: "brain",
        title: "AI & Automation Consulting",
        description:
          "Practical AI strategy and workflow automation that eliminates bottlenecks and scales your operations — implemented in days or weeks, not months.",
      },
    ],
    cta: {
      label: "View All Services",
      href: "/services",
    },
  },
  benefits: {
    eyebrow: "Why Vantheos",
    title: "AI-Augmented Growth, Without the Complexity",
    description:
      "Practical AI that works alongside your business — not a massive project, not a long wait. Real results, fast.",
    items: [
      {
        iconKey: "clock",
        stat: "24/7",
        title: "Always-On Operations",
        description: "Systems that never sleep, stall, or miss a beat.",
      },
      {
        iconKey: "zap",
        stat: "10x",
        title: "Faster Execution",
        description: "Replace wait times with continuous, reliable execution.",
      },
      {
        iconKey: "shield",
        stat: "99.9%",
        title: "Autonomous Reliability",
        description: "Agents that understand context and take action independently.",
      },
      {
        iconKey: "trendingUp",
        stat: "∞",
        title: "Scalable Growth",
        description: "Operations that expand without proportional headcount increase.",
      },
    ],
  },
  cta: {
    title: "Stop Losing Revenue You've Already Earned",
    description:
      "Let's identify exactly where you're losing leads, calls, and customers — and build the practical AI systems to fix it.",
    primaryButton: {
      label: siteCtas.scheduleDiscoveryCall.label,
      href: siteCtas.scheduleDiscoveryCall.href,
      external: siteCtas.scheduleDiscoveryCall.external,
    },
    secondaryButton: {
      label: "Contact Us",
      href: "/contact",
    },
  },
} as const;
