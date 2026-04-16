"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from "emailjs-com";

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
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSuccess(false);
  setErrorMsg("");

  try {
    await emailjs.sendForm(
      "service_5y4dhhn",
      "template_bmfn757",
      e.currentTarget,
      "n2ggw6RssaoG4P3SzSrDe"
    );

    setSuccess(true);
    e.currentTarget.reset();
  } catch (error) {
    console.error(error);
    setErrorMsg("Failed to send message. Please try again.");
  }

  setIsSubmitting(false);
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
            name="name"
            required
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />

          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />

          {/* Success Message */}
          {success && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </p>
          )}

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-400 text-sm">
              ❌ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 px-6 py-3 rounded text-black flex items-center gap-2 justify-center w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </button>

          <p className="text-xs text-muted-foreground text-center">
            We usually reply within 24 hours
          </p>
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