"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Kirana Store Owner, Delhi",
    avatar: "RK",
    stars: 5,
    text: "GST ITC saved me 6 hours every month. I just scan my invoices and the reports are ready. My CA is impressed!",
    highlight: true,
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer, Mumbai",
    avatar: "PS",
    stars: 5,
    text: "As a freelancer, GST was a nightmare. This app made it dead simple — scan, calculate, file. No more spreadsheets.",
  },
  {
    name: "Arun Patel",
    role: "Textile Shop, Surat",
    avatar: "AP",
    stars: 5,
    text: "The OCR scanning is incredible. Even blurry invoices get read perfectly. We process 200+ invoices monthly with zero errors.",
  },
  {
    name: "Meera Iyer",
    role: "Restaurant Chain, Bangalore",
    avatar: "MI",
    stars: 4,
    text: "We switched from Tally for GST tracking and haven't looked back. The ITC tracking alone has saved us ₹2L this year.",
  },
  {
    name: "Vikram Singh",
    role: "Electronics Retailer, Jaipur",
    avatar: "VS",
    stars: 5,
    text: "The cloud sync is a game-changer. I can check my GST reports from anywhere. My accountant loves the export feature.",
  },
  {
    name: "Sunita Reddy",
    role: "Boutique Owner, Hyderabad",
    avatar: "SR",
    stars: 5,
    text: "I'm not tech-savvy at all, but this app is so intuitive. Scan the bill, and everything is done. Highly recommend!",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < count ? "text-primary fill-primary" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-top" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-5"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-xs font-semibold text-primary tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-hero tracking-[-0.02em]">
            Loved by businesses
            <br />
            <span className="text-gradient-primary">across India</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Join 10,000+ shop owners, freelancers, and small businesses who trust GST ITC for their tax compliance.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`break-inside-avoid group glass rounded-2xl p-6 hover:border-primary/25 transition-all duration-500 cursor-default overflow-hidden relative ${
                t.highlight ? "glow-md" : "hover:glow-sm"
              }`}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

              <div className="relative z-10 space-y-4">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/15" />

                {/* Review text */}
                <p className="text-sm text-foreground/85 leading-relaxed">
                  "{t.text}"
                </p>

                {/* Stars */}
                <StarRating count={t.stars} />

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-primary/10 via-border to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-xs font-bold text-primary font-mono">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
