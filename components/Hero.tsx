"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ScanLine, BarChart3, Cloud, CheckCircle2 } from "lucide-react";

const mockRows = [
  { icon: ScanLine, label: "Invoice #INV-2847", value: "₹24,500", status: "Scanned" },
  { icon: BarChart3, label: "CGST (9%)", value: "₹2,205", status: "Calculated" },
  { icon: BarChart3, label: "SGST (9%)", value: "₹2,205", status: "Calculated" },
  { icon: Cloud, label: "ITC Eligible", value: "₹4,410", status: "Tracked" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-hero" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] float" />
      <div className="absolute bottom-20 right-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px] float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-[150px]" />

      {/* Orbiting dots */}
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/40" style={{ animation: "orbit 20s linear infinite" }} />
      <div className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-primary/30" style={{ animation: "orbit 25s linear infinite reverse" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-20 items-center w-full">
        {/* Left */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.06] shimmer"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">AI-Powered GST Compliance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            <span className="text-gradient-hero">Your GST,</span>
            <br />
            <span className="text-gradient-primary">automated</span>
            <span className="text-gradient-hero">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            Scan invoices with AI, auto-calculate taxes, track ITC, and generate filing-ready reports — all from your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-base overflow-hidden glow-lg"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-border hover:border-primary/30 text-foreground font-semibold text-base hover:glow-sm transition-all duration-300"
            >
              See How It Works
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5 text-sm text-muted-foreground"
          >
            {["No credit card", "Free forever plan", "Made for India"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/70" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right - Premium mock card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateY: -5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-8 bg-primary/[0.04] blur-[60px] rounded-3xl" />

          <div className="relative glass rounded-3xl p-1 glow-md">
            <div className="rounded-[20px] bg-card/80 p-6 space-y-5">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ScanLine className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-foreground">Invoice Scanner</h3>
                    <p className="text-[11px] text-muted-foreground">Real-time processing</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold tracking-wide uppercase border border-primary/20">
                  Live
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Rows */}
              <div className="space-y-2.5">
                {mockRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/30 hover:border-primary/20 hover:bg-muted/60 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-primary/[0.07] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <row.icon className="w-3.5 h-3.5 text-primary/80" />
                      </div>
                      <div>
                        <span className="text-sm text-foreground/90 font-medium">{row.label}</span>
                        <p className="text-[10px] text-muted-foreground">{row.status}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground font-mono">{row.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Card footer */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] text-muted-foreground">Synced • just now</span>
                </div>
                <a href="#" className="text-[11px] text-primary font-semibold hover:underline">
                  View Full Report →
                </a>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 glow-sm float"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">₹4,410 ITC</p>
                <p className="text-[10px] text-muted-foreground">Claimed this month</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 glow-sm float-delayed"
          >
            <p className="text-[10px] text-muted-foreground">Accuracy</p>
            <p className="text-sm font-bold text-primary font-mono">99.8%</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
