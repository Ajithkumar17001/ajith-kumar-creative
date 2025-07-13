import { motion } from "framer-motion";
import { Download, Award, Briefcase, GraduationCap, Globe, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const downloadResume = () => {
    // This would typically download a PDF file
    console.log("Downloading resume...");
  };

  return (
    <PageTransition animationType="rotate">
      <div className="relative min-h-screen bg-background overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-purple-primary/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-secondary/25 rounded-full blur-3xl"
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
              Resume
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete professional background and experience
            </p>
            <Button
              size="lg"
              onClick={downloadResume}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Professional Experience</h2>
              </div>

              <div className="space-y-8">
                {/* Novac Technology */}
                <div className="border-l-2 border-primary/30 pl-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Senior E-Learning Developer
                  </h3>
                  <p className="text-lg font-medium mb-2">Novac Technology Solutions</p>
                  <p className="text-muted-foreground mb-4">Feb 2022 – Present</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Designed 50+ interactive eLearning courses across industries (healthcare, finance, education) with 95% satisfaction rate</li>
                    <li>• Collaborated with SMEs to build impactful learning resources</li>
                    <li>• Built SCORM-compliant modules compatible across LMSs</li>
                    <li>• Introduced gamification and branching to increase completion by 30%</li>
                  </ul>
                </div>

                {/* EduficDigital */}
                <div className="border-l-2 border-accent-blue/30 pl-6">
                  <h3 className="text-xl font-bold text-accent-blue mb-2">
                    Learning Experience Designer
                  </h3>
                  <p className="text-lg font-medium mb-2">EduficDigital</p>
                  <p className="text-muted-foreground mb-4">Nov 2020 – Jul 2021</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Developed modules using Adobe Captivate, Articulate Storyline, Camtasia</li>
                    <li>• Created interactive scenarios and simulations</li>
                    <li>• Provided LMS tech support and resolved course issues</li>
                    <li>• Worked closely with instructional designers</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold">University of Madras</h3>
                  <p className="text-primary">B.Com (First Class with Distinction)</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Image Creative Education</h3>
                  <p className="text-primary">CTECH-HD-FX</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sri Shankara Vidhya Kendra Matric Hr. Sec. School</h3>
                  <p className="text-primary">HSLC (91%)</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements & Languages */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-pink/20 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-accent-pink" />
                  </div>
                  <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Star Performer award (3 times)</li>
                  <li>• Consistently delivered eLearning projects on time & budget</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="glass-card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Languages</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Tamil</span>
                    <span className="text-primary">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-primary">Fluent</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 className="text-3xl font-bold">Soft Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Communication", "Collaboration", "Problem-solving", "Critical Thinking", "Time Management"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;