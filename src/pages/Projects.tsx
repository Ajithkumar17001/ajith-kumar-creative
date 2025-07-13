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
      subtitle: "Articulate Storyline",
      description: "An interactive version of the classic snake game with scoring and feedback, supporting both keyboard arrows and on-screen buttons for movement.",
      url: "https://360.articulate.com/review/content/027837f0-77e4-492d-9848-8bd89d7a30c0/review",
      icon: Play,
      gradient: "from-primary to-accent-blue"
    },
    {
      title: "Corporate Explainer Video",
      subtitle: "Adobe After Effects",
      description: "A dynamic, animated explainer video using motion graphics to simplify complex corporate topics and deliver training content in an engaging way.",
      url: "https://360.articulate.com/review/content/3f17e6e1-9daf-43b7-9d20-74319276be46/review",
      icon: Play,
      gradient: "from-accent-blue to-accent-pink"
    },
    {
      title: "Custom Learning Module",
      subtitle: "Articulate Storyline",
      description: "A user-friendly module designed with a custom menu, transcript for accessibility, progress bar, navigation buttons, and smooth loop animations.",
      url: "https://360.articulate.com/review/content/94696a81-1e95-45d8-b801-5c538755a926/review",
      icon: Book,
      gradient: "from-accent-pink to-primary"
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground particleCount={60} />
        <Navigation />
        
        {/* Gradient Blur Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
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

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 group hover:animate-glow transition-smooth"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
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