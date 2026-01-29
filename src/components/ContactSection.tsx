import { motion } from "framer-motion";
import { useState } from "react";
import personalData from "../data/personal.json";
import { icons } from "../components/ui/icons";
import { fadeInUpProps, staggerContainerVariants, staggerItemVariants, viewportConfig } from "../lib/animations";

export const ContactSection = () => {
  const MailIcon = icons.mail;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <motion.h2 className="section-title" {...fadeInUpProps}>
        Get In Touch
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={staggerItemVariants}>
          <div className="glass p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${personalData.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalData.email}
                </a>
              </p>

              <p className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  <path d="M12 21s8-5 8-11V5l-8-3-8 3v5c0 6 8 11 8 11Z" />
                </svg>
                <span>{personalData.location}</span>
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {personalData.socials.map((social) => {
                  const Icon = icons[social.icon as keyof typeof icons];

                  return Icon ? (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 glass hover:bg-primary hover:text-white rounded-full transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-200 p-4 rounded-md mb-4">
                Thanks for your message! I'll get back to you soon.
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};
