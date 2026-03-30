"use client";
import { motion } from "framer-motion";
import { Scan, BarChart3, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Scan,
    step: "01",
    title: "Scan Your Invoice",
    description: "Simply point your phone camera at any GST invoice. Our AI reads and extracts all details automatically.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Auto-Calculate Tax",
    description: "CGST, SGST, IGST — all calculated instantly based on your state and transaction type. Zero manual work.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Generate Reports",
    description: "Get monthly GST reports ready for filing. Export to PDF, share with your CA, or file directly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-semibold text-primary tracking-wide uppercase">
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-hero tracking-[-0.02em]">
            Three steps. That's it.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center space-y-5"
            >
              <div className="relative mx-auto w-14 h-14 rounded-2xl bg-primary/[0.08] border border-primary/20 flex items-center justify-center pulse-glow">
                <step.icon className="w-6 h-6 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary font-mono">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
