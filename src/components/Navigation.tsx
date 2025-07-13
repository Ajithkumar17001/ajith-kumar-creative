import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FolderOpen, Award, FileText, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/skills", label: "Skills", icon: Award },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card px-6 py-3">
        <div className="flex space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={path}
                to={path}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium hidden md:block">{label}</span>
                </motion.div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    layoutId="navbar-active"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;