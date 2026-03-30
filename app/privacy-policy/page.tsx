"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "**Personal Information**: When you register, we collect your name, email address, phone number, and GST identification number (GSTIN).",
      "**Business Data**: GST invoices, purchase records, and Input Tax Credit (ITC) data you upload or sync with our platform.",
      "**Usage Data**: Browser type, IP address, pages visited, and interaction patterns to improve our services.",
      "**Device Information**: Device type, operating system, and unique device identifiers for security purposes.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our GST ITC reconciliation and compliance services.",
      "To process and analyze your GST data for accurate ITC matching and discrepancy detection.",
      "To send you service-related notifications, updates, and compliance alerts.",
      "To detect, prevent, and address technical issues and security threats.",
      "To comply with legal obligations and government regulations related to GST.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard encryption (AES-256) for all data at rest and TLS 1.3 for data in transit.",
      "Access to your data is restricted to authorized personnel only, with multi-factor authentication enforced.",
      "We conduct regular security audits and vulnerability assessments to protect your information.",
      "All GST data is stored on secure, SOC 2 compliant cloud infrastructure within India.",
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    content: [
      "We do **not** sell, trade, or rent your personal or business data to third parties.",
      "We may share data with trusted service providers who assist in operating our platform, bound by strict confidentiality agreements.",
      "We may disclose information if required by law, regulation, or legal process by Indian authorities.",
      "In the event of a merger or acquisition, your data may be transferred with prior notice to you.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "**Access**: You can request a copy of all personal and business data we hold about you.",
      "**Correction**: You can update or correct inaccurate information at any time through your dashboard.",
      "**Deletion**: You can request deletion of your account and associated data, subject to legal retention requirements.",
      "**Portability**: You can export your data in standard formats (CSV, JSON) at any time.",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "We use essential cookies to maintain your session and preferences.",
      "Analytics cookies help us understand how you use our platform to improve the experience.",
      "You can manage cookie preferences through your browser settings at any time.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any material changes via email or in-app notification.",
      "Continued use of our services after changes constitutes acceptance of the updated policy.",
      "Previous versions of this policy are available upon request.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, please contact us at **Info@adityaxinnovations.com**.",
      "AdityaxInnovations, India.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: March 30, 2026
              </p>
            </div>
          </motion.div>
          <p className="text-muted-foreground max-w-2xl">
            At GST ITC by AdityaxInnovations, we are committed to protecting your privacy and ensuring the security of your business data. This policy explains how we collect, use, and safeguard your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.content.map((item, j) => (
                <li
                  key={j}
                  className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border hover:border-primary/40 transition-colors"
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground font-medium">$1</strong>'
                    ),
                  }}
                />
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 AdityaxInnovations. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
