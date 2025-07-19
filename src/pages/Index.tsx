import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Download, Linkedin, ExternalLink, FolderOpen, Award, FileText, Mail, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const projects = [
    {
      title: "Gamified Snake Game",
      tool: "Articulate Storyline",
      description: "Interactive snake game with scoring and keyboard/button control",
      link: "https://360.articulate.com/review/content/027837f0-77e4-492d-9848-8bd89d7a30c0/review",
      image: "/lovable-uploads/c5ac92e5-dd48-4879-b9bb-9986c3fbed07.png"
    },
    {
      title: "Corporate Explainer Video",
      tool: "Adobe After Effects", 
      description: "Motion graphics explainer video for training",
      link: "https://360.articulate.com/review/content/3f17e6e1-9daf-43b7-9d20-74319276be46/review",
      image: "/placeholder.svg" // Will be updated when images are provided
    },
    {
      title: "Custom E-learning Module",
      tool: "Articulate Storyline",
      description: "SCORM module with transcript, loop animations, and nav",
      link: "https://360.articulate.com/review/content/94696a81-1e95-45d8-b801-5c538755a926/review", 
      image: "/placeholder.svg" // Will be updated when images are provided
    }
  ];

  const skills = [
    {
      category: "E-Learning Development Tools",
      items: ["Articulate Storyline", "Adobe Captivate", "Articulate Rise", "Vyond"]
    },
    {
      category: "LMS Platforms", 
      items: ["Moodle", "Scorm Cloud"]
    },
    {
      category: "Multimedia & Design",
      items: ["Photoshop", "Illustrator", "Adobe XD", "Canva"]
    },
    {
      category: "Project Management",
      items: ["Jira"]
    },
    {
      category: "Video/Audio Tools",
      items: ["After Effects", "Premiere Pro", "Camtasia", "Audition"]
    },
    {
      category: "Other",
      items: ["Microsoft Office Suite"]
    }
  ];

  const downloadResume = () => {
    // Will be updated when PDF is provided
    toast({
      title: "Resume Download",
      description: "Resume file will be available soon.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formsubmit.co/ajithkumar17001ak@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Portfolio Contact Form Submission'
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="relative bg-background">
      <ParticleBackground />
      <Navigation />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="fixed top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 right-10 w-72 h-72 bg-purple-secondary/20 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="container mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadResume}
                  className="border-primary/50 hover:bg-white hover:text-background transition-all duration-300 group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
              
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
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                {/* 3D element removed */}
              </div>
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold gradient-text mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating engaging digital learning experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                With 4+ years of experience in eLearning development and design, I specialize in SCORM compliance, end-to-end project management, and utilizing top industry tools. I have a proven track record of delivering results under tight deadlines while aligning solutions with organizational goals. I aim to contribute my expertise to creating impactful digital learning solutions globally.
              </p>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                { value: "4+", label: "Years Experience", desc: "In eLearning development and design" },
                { value: "50+", label: "Projects Completed", desc: "Interactive eLearning courses delivered" },
                { value: "95%", label: "Satisfaction Rate", desc: "Client satisfaction across projects" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold gradient-text mb-6">My Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative eLearning solutions and interactive experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 group hover:scale-105 transition-all duration-300"
                whileHover={{ rotateY: 5, rotateX: 5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-primary/50 rounded-lg"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {project.tool}
                    </span>
                    <FolderOpen className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group/btn"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold gradient-text mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolkit for creating exceptional digital learning experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold gradient-text mb-6">My Resume</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey and achievements in eLearning development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Professional Experience</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="text-xl font-bold text-primary">Senior E-Learning Developer</h4>
                  <p className="text-muted-foreground mb-2">Novac Technology Solutions | Feb 2022 – Present</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Designed 50+ interactive eLearning courses across industries (healthcare, finance, education) with 95% satisfaction rate</li>
                    <li>• Collaborated with SMEs to build impactful learning resources</li>
                    <li>• Built SCORM-compliant modules compatible across LMSs</li>
                    <li>• Introduced gamification and branching to increase completion by 30%</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="text-xl font-bold text-primary">Learning Experience Designer</h4>
                  <p className="text-muted-foreground mb-2">EduficDigital | Nov 2020 – Jul 2021</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Developed modules using Adobe Captivate, Articulate Storyline, Camtasia</li>
                    <li>• Created interactive scenarios and simulations</li>
                    <li>• Provided LMS tech support and resolved course issues</li>
                    <li>• Worked closely with instructional designers</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education & Achievements */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">University of Madras</h4>
                    <p className="text-muted-foreground">B.Com (First Class with Distinction)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Image Creative Education</h4>
                    <p className="text-muted-foreground">CTECH-HD-FX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Sri Shankara Vidhya Kendra</h4>
                    <p className="text-muted-foreground">HSLC (91%)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4">Achievements & Skills</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Achievements</h4>
                    <ul className="text-muted-foreground mt-2 space-y-1">
                      <li>• Star Performer award (3 times)</li>
                      <li>• Consistently delivered projects on time & budget</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Languages</h4>
                    <p className="text-muted-foreground">Tamil (Fluent), English (Fluent)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Soft Skills</h4>
                    <p className="text-muted-foreground">Communication, collaboration, problem-solving, critical thinking, time management</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                onClick={downloadResume}
                className="bg-primary hover:bg-white hover:text-background transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Full Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold gradient-text mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next eLearning project or collaboration opportunity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
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
                  className="w-full bg-primary hover:bg-primary/90 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email</h4>
                    <p className="text-muted-foreground">Let's start a conversation</p>
                  </div>
                </div>
                <motion.a
                  href="mailto:ajithkumar17001ak@gmail.com"
                  className="text-primary hover:text-primary/80 transition-smooth font-medium block"
                  whileHover={{ scale: 1.05 }}
                >
                  ajithkumar17001ak@gmail.com
                </motion.a>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
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
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-smooth">
                          {link.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-lg font-bold mb-2">Ready to Collaborate?</h4>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to work on innovative eLearning projects and bring creative solutions to life.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-secondary rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
