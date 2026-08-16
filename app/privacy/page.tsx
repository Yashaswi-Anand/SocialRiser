import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ *
 * TEMPLATE — NOT LEGAL ADVICE.
 * Replace every [BRACKETED] value and have this reviewed before you
 * submit the URL to Google OAuth, Play Store, Stripe or Razorpay.
 * ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information across all of its products.`,
};

const sections: LegalSection[] = [
  {
    heading: "Who this policy covers",
    body: [
      `This policy applies to ${site.domain} and to every product operated by ${site.name}, including any product hosted on a subdomain of ${site.domain}.`,
      `Individual products may publish an additional notice describing data specific to that product. Where they do, that notice applies in addition to this one.`,
      `${site.name} is operated by [LEGAL ENTITY NAME], [REGISTERED ADDRESS].`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Depending on which product you use and how you use it, we may collect:",
      [
        "Account information you provide — name, email address, and a password or third-party sign-in identifier.",
        "Content you create or upload while using a product.",
        "Usage data — pages viewed, features used, and approximate time of use.",
        "Technical data — IP address, browser type, device type, and operating system.",
      ],
      "We do not collect payment card numbers. Where a product accepts payment, card details are handled directly by our payment processor and are never stored on our servers.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information above to operate and improve our products, authenticate you, respond to support requests, send service-related messages, detect abuse and fraud, and meet legal obligations.",
      "We do not sell your personal information, and we do not share it with advertisers.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "We use cookies that are strictly necessary to keep you signed in and to remember your preferences.",
      "We may also use privacy-respecting analytics to understand aggregate usage. Where required by law, we ask for your consent before setting non-essential cookies. You can clear or block cookies through your browser at any time, though some features may stop working.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "We rely on a small number of service providers to run our products, which may process data on our behalf:",
      [
        "Hosting and content delivery — [e.g. Vercel, Cloudflare]",
        "Database and storage — [e.g. Supabase, AWS S3]",
        "Authentication — [e.g. Google Sign-In, Clerk]",
        "Email delivery — [e.g. Resend, Postmark]",
        "Payments — [e.g. Stripe, Razorpay]",
      ],
      "These providers are permitted to use your data only to deliver their service to us.",
    ],
  },
  {
    heading: "How long we keep data",
    body: [
      "We keep account data for as long as your account is active. If you delete your account, we delete or anonymise associated personal data within [30] days, except where we are required to retain records for legal, tax or accounting purposes.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Subject to your local law, you may request access to the personal data we hold about you, correction of inaccurate data, deletion of your data, a copy of your data in a portable format, or restriction of certain processing.",
      `To exercise any of these rights, email ${site.email}. We will respond within the period required by applicable law.`,
    ],
  },
  {
    heading: "Security",
    body: [
      "We use encryption in transit (HTTPS), access controls, and regular dependency updates to protect your data. No system is perfectly secure, but we take reasonable technical and organisational measures appropriate to the risk.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Our products are not directed at children under [13/16], and we do not knowingly collect their personal data. If you believe a child has provided us with personal data, contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as our products change. The date at the top of this page reflects the most recent revision. Material changes will be announced on this page before they take effect.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy or your data can be sent to ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="15 August 2026"
      intro={`This policy explains what information ${site.name} collects, why we collect it, and what you can do about it. It covers ${site.domain} and every product we operate.`}
      sections={sections}
    />
  );
}
