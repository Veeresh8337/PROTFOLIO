import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Send,
  Check,
  Loader,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const { toast } = useToast();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service, template, and user IDs
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const USER_ID = "your_user_id";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, USER_ID).then(
      (result) => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          className: "bg-cyberpunk-darker border-cyberpunk-green text-white",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      },
      (error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          className: "bg-red-900 border-red-500 text-white",
        });
        setIsSubmitting(false);
      }
    );
  };

  // Alternate hover effect for contact form
  useEffect(() => {
    const interval = setInterval(() => {
      setHoverEffect((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:veereshhindiholi@8337gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 md:py-20 lg:py-32 bg-cyberpunk-darker relative"
    >
      <div className="absolute inset-0 overflow-hidden matrix-bg"></div>

      {/* Animated cyber elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/3 h-32 -top-16 right-1/4 bg-cyberpunk-green/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute w-1/4 h-40 bottom-10 left-10 bg-cyberpunk-blue/10 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">
          {">"} Contact<span className="cursor"></span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-white">
          Get In <span className="text-cyberpunk-green">Touch</span>
        </h2>

        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 opacity-0 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "translate-y-12"
          )}
        >
          {/* Contact Form */}
          <div
            className={cn(
              "bg-cyberpunk-dark p-4 sm:p-6 rounded-md cyberpunk-border relative",
              hoverEffect
                ? "shadow-[0_0_15px_rgba(12,255,12,0.3)]"
                : "shadow-none",
              "transition-shadow duration-700"
            )}
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyberpunk-green to-transparent animate-[gradient-slide_3s_ease_infinite]"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyberpunk-green to-transparent animate-[gradient-slide_3s_ease_infinite]"></div>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyberpunk-green to-transparent animate-[gradient-slide-vertical_3s_ease_infinite]"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyberpunk-green to-transparent animate-[gradient-slide-vertical_3s_ease_infinite]"></div>
            </div>

            <h3 className="terminal-text text-lg mb-6 flex items-center">
              {">"} <span className="typing-animation ml-2">Send_Message</span>
              <span className="cursor"></span>
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <label
                  htmlFor="name"
                  className="block text-white/70 text-sm mb-2 font-mono"
                >
                  {">"} Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyberpunk-darker/50 border border-cyberpunk-green/30 rounded-sm px-4 py-2 text-white font-mono focus:outline-none focus:border-cyberpunk-green focus:shadow-[0_0_8px_rgba(12,255,12,0.3)] transition-all"
                />
                <div className="absolute right-3 bottom-2 text-xs text-cyberpunk-green/50 font-mono">
                  {formData.name.length > 0 && `${formData.name.length} chars`}
                </div>
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-white/70 text-sm mb-2 font-mono"
                >
                  {">"} Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyberpunk-darker/50 border border-cyberpunk-green/30 rounded-sm px-4 py-2 text-white font-mono focus:outline-none focus:border-cyberpunk-green focus:shadow-[0_0_8px_rgba(12,255,12,0.3)] transition-all"
                />
                <div className="absolute right-3 bottom-2 text-xs text-cyberpunk-green/50 font-mono">
                  {formData.email.match(/@/) && "valid"}
                </div>
              </div>

              <div className="mb-6 relative">
                <label
                  htmlFor="message"
                  className="block text-white/70 text-sm mb-2 font-mono"
                >
                  {">"} Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-cyberpunk-darker/50 border border-cyberpunk-green/30 rounded-sm px-4 py-2 text-white font-mono focus:outline-none focus:border-cyberpunk-green focus:shadow-[0_0_8px_rgba(12,255,12,0.3)] transition-all"
                />
                <div className="absolute right-3 bottom-2 text-xs text-cyberpunk-green/50 font-mono">
                  {formData.message.length > 0 &&
                    `${formData.message.length} chars`}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "w-full py-3 px-4 rounded-sm terminal-text border border-cyberpunk-green relative transition-all duration-300",
                  isSubmitting || isSuccess
                    ? "bg-cyberpunk-green/20"
                    : "hover:bg-cyberpunk-green/10",
                  "group overflow-hidden"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center transition-all duration-300",
                    isSuccess ? "opacity-0" : "opacity-100"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="animate-spin mr-2" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send
                        size={16}
                        className="mr-2 group-hover:translate-x-1 transition-transform"
                      />{" "}
                      Submit
                    </>
                  )}
                </span>

                {/* Success indicator */}
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-300",
                    isSuccess ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Check size={18} className="mr-2" /> Message Sent
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div
              className={cn(
                "bg-cyberpunk-dark p-4 sm:p-6 rounded-md cyberpunk-border hover:shadow-[0_0_15px_rgba(12,255,12,0.3)]",
                "transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <h3 className="terminal-text text-lg mb-6">
                {">"} Connection_Info<span className="cursor"></span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-cyberpunk-green/10 flex items-center justify-center mr-3 group-hover:bg-cyberpunk-green/20 transition-colors">
                    <Mail size={16} className="text-cyberpunk-green" />
                  </div>
                  <a
                    href="mailto:veereshhindiholi@8337gmail.com"
                    className="text-white/80 hover:text-cyberpunk-green transition-colors"
                  >
                    veereshhindiholi@8337gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-cyberpunk-green/10 flex items-center justify-center mr-3 group-hover:bg-cyberpunk-green/20 transition-colors">
                    <Phone size={16} className="text-cyberpunk-green" />
                  </div>
                  <a
                    href="tel:7483460029"
                    className="text-white/80 hover:text-cyberpunk-green transition-colors"
                  >
                    +91 7483460029
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-cyberpunk-green/10 flex items-center justify-center mr-3 group-hover:bg-cyberpunk-green/20 transition-colors">
                    <Phone size={16} className="text-cyberpunk-green" />
                  </div>
                  <a
                    href="https://wa.me/917483460029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-cyberpunk-green transition-colors flex items-center"
                  >
                    WhatsApp Me
                    <span className="ml-2 text-xs border border-cyberpunk-green/50 py-0.5 px-1 rounded text-cyberpunk-green">
                      chat
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "bg-cyberpunk-dark p-4 sm:p-6 rounded-md cyberpunk-border hover:shadow-[0_0_15px_rgba(12,255,12,0.3)]",
                "transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <h3 className="terminal-text text-lg mb-6">
                {">"} Social_Networks<span className="cursor"></span>
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-cyberpunk-darker/70 border border-cyberpunk-green/30 px-4 py-3 rounded-sm hover:bg-cyberpunk-green/10 transition-all group"
                      >
                        <link.icon
                          size={18}
                          className="text-cyberpunk-green mr-2 group-hover:animate-pulse"
                        />
                        <span className="text-white/80 group-hover:text-cyberpunk-green transition-colors">
                          {link.label}
                        </span>
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-cyberpunk-darker border-cyberpunk-green/50 text-white w-auto p-2">
                      Connect on {link.label}
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
