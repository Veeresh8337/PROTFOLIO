
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-cyberpunk-darker border-cyberpunk-green text-white",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:veereshhindiholi@8337gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-cyberpunk-darker relative">
      <div className="absolute inset-0 overflow-hidden matrix-bg"></div>
      
      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">{'>'} Contact<span className="cursor"></span></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
          Get In <span className="text-cyberpunk-green">Touch</span>
        </h2>
        
        <div 
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 opacity-0 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "translate-y-12"
          )}
        >
          {/* Contact Form */}
          <div className="bg-cyberpunk-dark p-6 rounded-md cyberpunk-border">
            <h3 className="terminal-text text-lg mb-6">{'>'} Send_Message<span className="cursor"></span></h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/70 text-sm mb-2 font-mono">
                  {'>'} Name:
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
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/70 text-sm mb-2 font-mono">
                  {'>'} Email:
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
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/70 text-sm mb-2 font-mono">
                  {'>'} Message:
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
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-sm terminal-text border border-cyberpunk-green hover:bg-cyberpunk-green/10 transition-all ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? 'Transmitting...' : '> Submit'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-cyberpunk-dark p-6 rounded-md cyberpunk-border mb-6">
              <h3 className="terminal-text text-lg mb-6">{'>'} Connection_Info<span className="cursor"></span></h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={18} className="text-cyberpunk-green mr-3" />
                  <a 
                    href="mailto:veereshhindiholi@8337gmail.com" 
                    className="text-white/80 hover:text-cyberpunk-green transition-colors"
                  >
                    veereshhindiholi@8337gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-cyberpunk-green mr-3" />
                  <a 
                    href="tel:7483460029" 
                    className="text-white/80 hover:text-cyberpunk-green transition-colors"
                  >
                    +91 7483460029
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-cyberpunk-green mr-3" />
                  <a 
                    href="https://wa.me/917483460029" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-cyberpunk-green transition-colors flex items-center"
                  >
                    WhatsApp Me
                    <span className="ml-2 text-xs border border-cyberpunk-green/50 py-0.5 px-1 rounded text-cyberpunk-green">chat</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-cyberpunk-dark p-6 rounded-md cyberpunk-border">
              <h3 className="terminal-text text-lg mb-6">{'>'} Social_Networks<span className="cursor"></span></h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cyberpunk-darker/70 border border-cyberpunk-green/30 px-4 py-2 rounded-sm hover:bg-cyberpunk-green/10 transition-all group"
                  >
                    <link.icon size={18} className="text-cyberpunk-green mr-2 group-hover:animate-pulse" />
                    <span className="text-white/80 group-hover:text-cyberpunk-green transition-colors">
                      {link.label}
                    </span>
                  </a>
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
