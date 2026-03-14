import { siteCtas } from "@/content/site";

export const homeContent = {
  hero: {
    headingPrefix: "Operational",
    headingHighlight: "Autonomy",
    subheadline: "AI agents that execute, answer, and operate—24/7",
    description:
      "Vantheos delivers always-on AI agents that autonomously execute business operations—from answering calls to handling workflows—so work gets done without waiting on people.",
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
    title: "Intelligent Systems That Execute",
    description:
      "Agents that think, act, and deliver outcomes. No wait times, no dropped calls, no manual bottlenecks.",
    items: [
      {
        iconKey: "brain",
        title: "AI Consulting",
        description:
          "Strategic guidance for implementing intelligent systems that align with your business objectives.",
      },
      {
        iconKey: "workflow",
        title: "Automation Solutions",
        description:
          "End-to-end workflow automation that eliminates bottlenecks and scales operations effortlessly.",
      },
      {
        iconKey: "mic",
        title: "Voice Agents",
        description:
          "Intelligent voice agents that make and answer calls, handle inquiries, and execute tasks around the clock.",
      },
      {
        iconKey: "cog",
        title: "Process Re-engineering",
        description:
          "Transform existing workflows into autonomous systems that operate with precision.",
      },
    ],
    cta: {
      label: "View All Services",
      href: "/services",
    },
  },
  benefits: {
    eyebrow: "Why Vantheos",
    title: "True Operational Autonomy",
    description:
      "Unlike chatbots or one-off automations, Vantheos agents operate independently, understand context, and follow through.",
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
    title: "Ready for Operational Autonomy?",
    description:
      "Discover how Vantheos can transform your business operations with intelligent agents that execute without supervision.",
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
