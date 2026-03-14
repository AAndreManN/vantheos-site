export const siteNavLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const siteLegalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
] as const;

const calendlyHref = "https://calendly.com/andre-mattera/discovery-automation-and-increased-profit";

export const siteCtas = {
  bookCall: {
    label: "Book a Call",
    href: calendlyHref,
    external: true,
  },
  bookDiscoveryCall: {
    label: "Book a Discovery Call",
    href: calendlyHref,
    external: true,
  },
  scheduleDiscoveryCall: {
    label: "Schedule a Discovery Call",
    href: calendlyHref,
    external: true,
  },
  scheduleConsultation: {
    label: "Schedule a Consultation",
    href: calendlyHref,
    external: true,
  },
  workWithUs: {
    label: "Work With Us",
    href: calendlyHref,
    external: true,
  },
  scheduleNow: {
    label: "Schedule Now",
    href: calendlyHref,
    external: true,
  },
  contactUs: {
    label: "Contact Us",
    href: "/contact",
  },
} as const;

export const siteContact = {
  email: "hello@vantheos.com",
  emailHref: "mailto:hello@vantheos.com",
  phoneDisplay: "(289) 552-9686",
  phoneHref: "tel:+12895529686",
} as const;
