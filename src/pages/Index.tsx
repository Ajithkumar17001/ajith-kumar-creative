import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import Laptop3D from "@/components/Laptop3D";
import { Button } from "@/components/ui/button";

const Index = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ajithkumar07ak"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://www.behance.net/ajithkumar32"
    }
  ];

  const downloadResume = () => {
    // This would typically download a PDF file
    console.log("Downloading resume...");
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        {/* Gradient Blur Elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-primary font-medium text-lg"
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold gradient-text leading-tight"
                >
                  Ajith Kumar M
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                >
                  E-Learning Developer
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                >
                  Transforming complex ideas into engaging digital learning experiences with 4+ years of expertise in SCORM-compliant course development.
                </motion.p>
              </div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadResume}
                  className="border-primary/50 hover:bg-primary/10 group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex space-x-4"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card flex items-center justify-center hover:animate-glow transition-smooth group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
            
            {/* 3D Laptop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <Laptop3D />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground text-sm"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Index;
