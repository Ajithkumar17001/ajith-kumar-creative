import { motion } from "framer-motion";
import { Laptop, Cloud, Palette, Settings, Video, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";

const Skills = () => {
  const skillCategories = [
    {
      title: "E-Learning Development Tools",
      icon: Laptop,
      skills: ["Articulate Storyline", "Adobe Captivate", "Articulate Rise", "Vyond"],
      gradient: "from-primary to-accent-blue"
    },
    {
      title: "LMS Platforms",
      icon: Cloud,
      skills: ["Moodle", "Scorm Cloud"],
      gradient: "from-accent-blue to-accent-pink"
    },
    {
      title: "Multimedia & Design",
      icon: Palette,
      skills: ["Photoshop", "Illustrator", "Adobe XD", "Canva"],
      gradient: "from-accent-pink to-primary"
    },
    {
      title: "Project Management",
      icon: Settings,
      skills: ["Jira"],
      gradient: "from-primary to-accent-blue"
    },
    {
      title: "Video/Audio Tools",
      icon: Video,
      skills: ["After Effects", "Premiere Pro", "Camtasia", "Audition"],
      gradient: "from-accent-blue to-accent-pink"
    },
    {
      title: "Other",
      icon: FileText,
      skills: ["Microsoft Office Suite"],
      gradient: "from-accent-pink to-primary"
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground particleCount={60} />
        <Navigation />
        
        {/* Gradient Blur Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold gradient-text mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical proficiency across industry-leading tools and platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 group hover:animate-glow transition-smooth"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground hover:text-foreground transition-smooth">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Core Competencies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technical Skills</h4>
                  <p className="text-muted-foreground">
                    SCORM Compliance • End-to-End Project Management • Interactive Design • Multimedia Production
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-accent-blue">Soft Skills</h4>
                  <p className="text-muted-foreground">
                    Communication • Collaboration • Problem-solving • Critical Thinking • Time Management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;