import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition animationType="slideLeft">
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-primary/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-secondary/25 rounded-full blur-3xl"
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl font-bold gradient-text mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating engaging digital learning experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground">
                  With 4+ years of experience in eLearning development and design, I specialize in SCORM compliance, end-to-end project management, and utilizing top industry tools. I have a proven track record of delivering results under tight deadlines while aligning solutions with organizational goals. I aim to contribute my expertise to creating impactful digital learning solutions globally.
                </p>
              </div>
              
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4+</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
                  <p className="text-muted-foreground">In eLearning development and design</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-blue">50+</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
                  <p className="text-muted-foreground">Interactive eLearning courses delivered</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-pink">95%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Satisfaction Rate</h3>
                  <p className="text-muted-foreground">Client satisfaction across projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;