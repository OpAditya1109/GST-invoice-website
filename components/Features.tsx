"use client";
import { motion } from "framer-motion";
import {
  ScanLine,
  Calculator,
  TrendingUp,
  FileText,
  Cloud,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "OCR Invoice Scanning",
    description:
      "Point your camera at any invoice. Our AI extracts GST details, amounts, and vendor info in under 2 seconds.",
    accent: true,
  },
  {
    icon: Calculator,
    title: "Auto GST Calculation",
    description:
      "Automatically splits tax into CGST, SGST, and IGST based on transaction type and state.",
  },
  {
    icon: TrendingUp,
    title: "ITC Tracking",
    description:
      "Track your Input Tax Credit in real-time. Never miss a claim or overpay on your GST returns.",
  },
  {
    icon: FileText,
    title: "Monthly Reports",
    description:
      "Generate GSTR-ready reports with one tap. Export as PDF or share directly with your chartered accountant.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Your data is securely synced across all your devices. Access invoices and reports from anywhere, anytime.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "256-bit encryption keeps your financial data safe. Fully compliant with Indian GST regulations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute inset-0 bg-radial-top" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-5"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-semibold text-primary tracking-wide uppercase"
          >
            Features
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-hero tracking-[-0.02em]">
            Everything you need
            <br />
            <span className="text-gradient-primary">for GST compliance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Built specifically for Indian businesses. From invoice scanning to
            filing-ready reports, we automate the hard parts.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative glass rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 cursor-default overflow-hidden ${
                feature.accent ? "lg:row-span-1" : ""
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent" />

              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 shimmer" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/[0.07] border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:glow-sm transition-all duration-500">
                  <feature.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2.5 group-hover:text-gradient-hero transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
