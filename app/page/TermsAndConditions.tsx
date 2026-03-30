import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using GST ITC by AdityaxInnovations, you agree to be bound by these Terms and Conditions.",
      "If you do not agree with any part of these terms, you must not use our services.",
      "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "GST ITC provides automated GST Input Tax Credit reconciliation, compliance management, and reporting tools.",
      "The service includes invoice matching, discrepancy detection, and ITC optimization features.",
      "We may update, modify, or discontinue features with reasonable notice to users.",
    ],
  },
  {
    title: "User Accounts & Responsibilities",
    content: [
      "You must provide accurate and complete registration information, including a valid **GSTIN**.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree not to share your account access with unauthorized third parties.",
      "You must notify us immediately of any unauthorized use of your account.",
    ],
  },
  {
    title: "Data Accuracy & Usage",
    content: [
      "You are responsible for the accuracy of all GST data, invoices, and documents uploaded to the platform.",
      "Our reconciliation results are based on the data you provide and should be verified before filing.",
      "GST ITC is a **tool to assist** compliance — it does not constitute legal or tax advice.",
      "We recommend consulting a qualified CA or tax professional for complex GST matters.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, features, and functionality of GST ITC are owned by **AdityaxInnovations**.",
      "You may not copy, modify, distribute, or reverse-engineer any part of our platform.",
      "Your uploaded data remains your property. We claim no ownership over your business data.",
    ],
  },
  {
    title: "Payment & Subscriptions",
    content: [
      "Certain features require a paid subscription. Prices are listed on our pricing page.",
      "Subscriptions auto-renew unless cancelled before the renewal date.",
      "Refunds are provided in accordance with our refund policy, available upon request.",
      "We reserve the right to change pricing with **30 days' prior notice**.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "GST ITC is provided **\"as is\"** without warranties of any kind, express or implied.",
      "We are not liable for any indirect, incidental, or consequential damages arising from use of our service.",
      "Our total liability shall not exceed the amount paid by you in the **12 months** preceding the claim.",
      "We are not responsible for any penalties or losses due to incorrect GST filings based on our outputs.",
    ],
  },
  {
    title: "Termination",
    content: [
      "We may suspend or terminate your account for violation of these terms or misuse of the platform.",
      "You may terminate your account at any time through your dashboard settings.",
      "Upon termination, your data will be retained for **90 days** before permanent deletion, unless legally required otherwise.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of **India**.",
      "Any disputes shall be subject to the exclusive jurisdiction of courts in India.",
      "If any provision is found unenforceable, the remaining provisions shall continue in full effect.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions about these Terms, contact us at **legal@adityaxinnovations.com**.",
      "AdityaxInnovations, India.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16">
          <Link
            to="/"
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: March 30, 2026
              </p>
            </div>
          </motion.div>
          <p className="text-muted-foreground max-w-2xl">
            Please read these Terms and Conditions carefully before using GST ITC by AdityaxInnovations. These terms govern your access to and use of our platform.
          </p>
        </div>
      </div>

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

      <div className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 AdityaxInnovations. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
