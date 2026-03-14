export const servicesPageContent = {
  hero: {
    titlePrefix: "Intelligent Systems",
    titleHighlight: "That Execute",
    description:
      "From strategy to deployment, we deliver autonomous solutions that transform how your business operates.",
  },
  services: [
    {
      iconKey: "brain",
      title: "AI Consulting",
      subtitle: "Strategic Intelligence Implementation",
      description:
        "We assess your operations, identify automation opportunities, and architect intelligent systems that align with your business objectives. Our consulting process delivers actionable roadmaps for AI adoption.",
      benefits: [
        "Comprehensive AI readiness assessment",
        "Custom implementation roadmap",
        "Technology stack recommendations",
        "ROI projections and success metrics",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      iconKey: "workflow",
      title: "Automation Solutions",
      subtitle: "End-to-End Workflow Automation",
      description:
        "Transform manual processes into autonomous workflows. We design and deploy automation systems that eliminate bottlenecks, reduce errors, and scale operations without proportional headcount increases.",
      benefits: [
        "Process analysis and optimization",
        "Custom automation development",
        "Integration with existing systems",
        "Continuous monitoring and refinement",
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      iconKey: "mic",
      title: "Voice Agents",
      subtitle: "Intelligent Voice Operations",
      description:
        "Deploy AI-powered voice agents that answer calls, handle inquiries, schedule appointments, and execute tasks around the clock. Replace dropped calls and wait times with reliable, always-on support.",
      benefits: [
        "24/7 call handling capability",
        "Natural language understanding",
        "Seamless handoff to human agents",
        "Multi-language support",
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      iconKey: "cog",
      title: "Process Re-engineering",
      subtitle: "Operational Transformation",
      description:
        "We analyze existing workflows and where appropriate, re-engineer them into autonomous systems that operate with precision. The result is leaner operations that adapt, execute, and deliver consistent outcomes.",
      benefits: [
        "Workflow analysis and mapping",
        "Bottleneck identification",
        "Autonomous system design",
        "Change management support",
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
    },
  ],
  ctaSection: {
    title: "Ready to Transform Your Operations?",
    description: "Let us show you how Vantheos can deliver operational autonomy for your business.",
  },
} as const;
