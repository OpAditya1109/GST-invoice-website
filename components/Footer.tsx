import { motion } from "framer-motion";
import { Zap, ArrowRight, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[150px]" style={{ animation: "breathe 5s ease-in-out infinite" }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mx-auto glow-lg"
          >
            <Zap className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] font-bold text-gradient-hero tracking-[-0.03em] leading-[1.05]">
            Ready to simplify
            <br />
            <span className="text-gradient-fire">your GST?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Join thousands of Indian businesses already saving hours on tax compliance every month.
          </p>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 0 80px hsl(163 100% 44% / 0.3), 0 0 200px hsl(163 100% 44% / 0.1)" }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg glow-intense"
          >
            Get Started — It's Free
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer links */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
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
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact", href: "/contact" },
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
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-primary fill-primary" /> by AdityaxInnovations © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
