import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, ExternalLink, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ajithkumar07ak",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://www.behance.net/ajithkumar32",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground particleCount={60} />
        <Navigation />
        
        {/* Gradient Blur Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next eLearning project or collaboration opportunity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-glass-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-glass-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-glass-border resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground">Let's start a conversation</p>
                  </div>
                </div>
                <a
                  href="mailto:ajithkumar17001ak@gmail.com"
                  className="text-primary hover:text-primary/80 transition-smooth font-medium"
                >
                  ajithkumar17001ak@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${link.gradient} rounded-lg flex items-center justify-center mr-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-smooth">
                          {link.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-2">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to work on innovative eLearning projects and bring creative solutions to life.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-blue rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;