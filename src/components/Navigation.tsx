import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Award, FileText, Mail } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "skills", label: "Skills", icon: Award },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[90vw]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card px-3 md:px-4 py-3 mx-2 md:mx-4">
        <div className="flex justify-center space-x-1 md:space-x-4 lg:space-x-6">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center space-x-1 md:space-x-2 px-1.5 md:px-2 lg:px-3 py-2 rounded-lg transition-smooth ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={14} className="md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-medium hidden sm:block">{label}</span>
                </motion.div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    layoutId="navbar-active"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;