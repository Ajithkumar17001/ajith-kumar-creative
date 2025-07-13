import { motion } from "framer-motion";
import { ExternalLink, Play, Book } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Gamified Snake Game",
      tool: "Articulate Storyline",
      description: "Interactive snake game with scoring and keyboard/button control",
      link: "https://360.articulate.com/review/content/027837f0-77e4-492d-9848-8bd89d7a30c0/review",
      icon: Play,
      gradient: "from-purple-primary/20 to-purple-secondary/20"
    },
    {
      title: "Corporate Explainer Video",
      tool: "Adobe After Effects",
      description: "Motion graphics explainer video for training",
      link: "https://360.articulate.com/review/content/3f17e6e1-9daf-43b7-9d20-74319276be46/review",
      icon: Play,
      gradient: "from-purple-secondary/20 to-purple-primary/20"
    },
    {
      title: "Custom E-learning Module",
      tool: "Articulate Storyline",
      description: "SCORM module with transcript, loop animations, and nav",
      link: "https://360.articulate.com/review/content/94696a81-1e95-45d8-b801-5c538755a926/review",
      icon: Book,
      gradient: "from-purple-primary/20 to-purple-dark/20"
    }
  ];

  return (
    <PageTransition animationType="slideRight">
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-purple-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-secondary/25 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative eLearning solutions and interactive experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="project-card group"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Project Thumbnail/Icon */}
                  <div className={`relative h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 overflow-hidden`}>
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-16 h-16 text-primary" />
                    </motion.div>
                    
                    {/* Glowing border effect on hover */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-xl"
                      whileHover={{
                        borderColor: "hsl(var(--purple-primary))",
                        boxShadow: "0 0 30px hsl(var(--purple-primary) / 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.tool}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10 group/btn"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;