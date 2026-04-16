"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is GST ITC free to use?",
    a: "Yes! We offer a generous free-forever plan that includes up to 5 invoice scans per month, basic GST calculations, and monthly reports. Upgrade to Pro for unlimited scans and advanced features.",
  },
  {
    q: "How accurate is the OCR invoice scanning?",
    a: "Our AI-powered OCR achieves 99.8% accuracy on standard Indian GST invoices. It supports printed, handwritten, and even blurry invoices. Any edge cases are flagged for manual review.",
  },
  {
    q: "Does it work for all Indian states and GST types?",
    a: "Absolutely. GST ITC automatically detects intra-state vs inter-state transactions and calculates CGST, SGST, or IGST accordingly. It supports all 28 states and 8 union territories.",
  },
  {
    q: "Can I export reports for my CA or accountant?",
    a: "Yes — generate GSTR-1, GSTR-3B ready reports with one tap. Export as PDF, Excel, or share a secure link directly with your chartered accountant.",
  },
  {
    q: "Is my financial data secure?",
    a: "We use bank-grade 256-bit AES encryption, SOC 2 compliant infrastructure, and your data never leaves Indian servers. We never sell or share your data with third parties.",
  },
  {
    q: "Do I need any accounting knowledge to use this?",
    a: "Not at all. GST ITC is designed for shop owners and small businesses with zero accounting background. Just scan, and we handle all the calculations and compliance.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`group glass rounded-2xl overflow-hidden transition-all duration-500 ${
        open ? "border-primary/25 glow-sm" : "hover:border-border/60"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-gradient-to-r from-primary/20 via-border to-transparent mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-semibold text-primary tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero tracking-[-0.02em]">
            Got questions?
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about GST ITC.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
