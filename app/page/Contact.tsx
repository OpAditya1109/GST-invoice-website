import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@adityaxinnovations.com",
    href: "mailto:support@adityaxinnovations.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Contact Us
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  We'd love to hear from you
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Have a question about GST ITC, need help with your account, or want to explore a partnership? Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-card/50 border-border/60 focus:border-primary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="bg-card/50 border-border/60 focus:border-primary/40"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  required
                  placeholder="How can we help?"
                  className="bg-card/50 border-border/60 focus:border-primary/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="bg-card/50 border-border/60 focus:border-primary/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 mt-8">
              <p className="text-sm font-medium text-foreground mb-1">
                Business Hours
              </p>
              <p className="text-sm text-muted-foreground">
                Monday – Saturday: 9:00 AM – 6:00 PM IST
              </p>
              <p className="text-sm text-muted-foreground">
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
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

export default Contact;
