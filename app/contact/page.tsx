"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@adityaxinnovations.com",
    href: "mailto:info@adityaxinnovations.com",
  },
  
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! We'll get back to you soon.");
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-10">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">
          We'd love to hear from you
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <input
            required
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <textarea
            required
            rows={5}
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 px-6 py-3 rounded text-black flex items-center gap-2"
          >
            {isSubmitting ? "Sending..." : "Send"}
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex gap-3 items-center">
              <info.icon className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-gray-400">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;