import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ *
 * TEMPLATE — NOT LEGAL ADVICE.
 * Replace every [BRACKETED] value and have this reviewed before you
 * rely on it for a paid product or an app store submission.
 * ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${site.name} products.`,
};

const sections: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: [
      `By accessing ${site.domain} or any product operated by ${site.name} — including any product hosted on a subdomain of ${site.domain} — you agree to these terms. If you do not agree, do not use the products.`,
      `${site.name} is operated by [LEGAL ENTITY NAME], [REGISTERED ADDRESS].`,
    ],
  },
  {
    heading: "The products",
    body: [
      `${site.name} operates a number of independent software products. Each is provided on an "as available" basis, and features may be added, changed or removed as products develop.`,
      "A product may be discontinued. Where we retire a product, we will give reasonable notice and, where practical, a way to export your data.",
    ],
  },
  {
    heading: "Your account",
    body: [
      "Some products require an account. You are responsible for keeping your credentials secure and for all activity that occurs under your account. Notify us immediately if you believe your account has been compromised.",
      "You must provide accurate information and must be old enough to form a binding contract in your jurisdiction.",
    ],
  },
  {
    heading: "Acceptable use",
    body: ["You agree not to:", [
      "Use the products for any unlawful purpose or in breach of any applicable regulation.",
      "Attempt to gain unauthorised access to our systems, accounts or data.",
      "Interfere with, overload or disrupt the products or their infrastructure.",
      "Scrape, resell or redistribute the products or their content without written permission.",
      "Upload malware, or content that infringes someone else's rights.",
    ],
      "We may suspend or terminate access for any account that breaches these rules.",
    ],
  },
  {
    heading: "Your content",
    body: [
      "You retain ownership of content you create or upload. You grant us a limited licence to host, store, process and display that content strictly for the purpose of operating the product for you.",
      "You are responsible for ensuring you have the rights to any content you upload.",
    ],
  },
  {
    heading: "Our intellectual property",
    body: [
      `The ${site.name} name, logos, product names, designs, code and content are owned by us and protected by intellectual property law. These terms do not grant you any right to use them beyond using the products as intended.`,
    ],
  },
  {
    heading: "Payments",
    body: [
      "Where a product offers paid plans, pricing and billing frequency are shown at the point of purchase. Fees are charged in advance and are non-refundable except where required by law or stated in a product-specific refund policy.",
      "You may cancel a subscription at any time; access continues until the end of the current billing period.",
    ],
  },
  {
    heading: "Third-party links and services",
    body: [
      "Our products may link to or integrate with third-party services. We are not responsible for the content, policies or practices of those services, and your use of them is governed by their own terms.",
    ],
  },
  {
    heading: "No warranties",
    body: [
      'The products are provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose, uninterrupted availability, or that the products will be error-free.',
      "Nothing in our products constitutes professional, financial, legal or investment advice. Any data presented — including market or listing information — is provided for general information only and should be independently verified before you act on it.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      `To the maximum extent permitted by law, ${site.name} will not be liable for any indirect, incidental, special or consequential loss, or for loss of profits, revenue or data, arising out of your use of the products.`,
      "Our total aggregate liability for any claim relating to the products is limited to the greater of the amount you paid us in the [12] months preceding the claim, or [INR 1,000 / USD 50].",
    ],
  },
  {
    heading: "Termination",
    body: [
      "You may stop using the products at any time and delete your account. We may suspend or terminate your access if you breach these terms, if required by law, or if we discontinue a product.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of [JURISDICTION], and the courts of [CITY, COUNTRY] have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may revise these terms as our products change. The date at the top of this page reflects the most recent revision. Continuing to use the products after a change takes effect means you accept the revised terms.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="15 August 2026"
      intro={`These terms govern your use of ${site.domain} and every product operated by ${site.name}.`}
      sections={sections}
    />
  );
}
