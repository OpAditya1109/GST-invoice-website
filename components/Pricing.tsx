"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying GST automation.",
    features: [
      "5 invoice scans/month",
      "Basic GST calculation",
      "PDF & image upload",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Best for small businesses getting started.",
    features: [
      "100 invoice scans/month",
      "Full GST report export",
      "6 months invoice history",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "₹2999",
    period: "/month",
    description: "For growing businesses & CAs needing advanced tools.",
    features: [
      "500 invoice scans/month",
      "Advanced analytics",
      "Full invoice history",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams with custom needs.",
    features: [
      "Unlimited scans",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 bg-radial-top" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-semibold text-primary tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-hero tracking-[-0.02em]">
            Simple, transparent
            <br />
            <span className="text-gradient-primary">pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Start free. Upgrade when you're ready. No hidden charges, ever.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative rounded-3xl transition-all duration-500 ${
                tier.highlighted
                  ? "glass glow-lg border-primary/30 scale-[1.03] z-10"
                  : "glass hover:border-primary/20 hover:glow-sm"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-lg shadow-primary/20">
                    <Sparkles className="w-3 h-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Hover shimmer */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 shimmer" />
              </div>

              <div className="relative z-10 p-8 space-y-7">
                {/* Tier name */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5">
                  <span className={`font-display text-5xl font-bold tracking-tight ${
                    tier.highlighted ? "text-gradient-primary" : "text-foreground"
                  }`}>
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>

                {/* Divider */}
                <div className={`h-px ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"
                    : "bg-gradient-to-r from-border via-border/50 to-transparent"
                }`} />

                {/* Features */}
                <ul className="space-y-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5 ${
                        tier.highlighted
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground glow-md hover:brightness-110"
                      : "border border-border hover:border-primary/30 text-foreground hover:glow-sm"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include GST. Cancel anytime. 14-day money-back guarantee on paid plans.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
