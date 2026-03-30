"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-hero tracking-[-0.02em]">
            Ready to simplify
            <br />
            <span className="text-gradient-primary">your GST?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Join thousands of Indian businesses already saving hours on tax compliance every month.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base glow-xl"
          >
            Get Started — It's Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-display font-bold text-foreground">GST ITC</span>
                <span className="text-[11px] text-muted-foreground ml-2">by AdityaxInnovations</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Twitter", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AdityaxInnovations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
