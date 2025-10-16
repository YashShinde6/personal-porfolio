import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Globe,
  Settings,
  Cpu
} from 'lucide-react';
import Typed from 'typed.js';
import StatsPage from './StatsPage';
import { WorkExperienceSection, EducationSection } from './ExperienceSection';

// TypedText Component
const TypedText = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'AI Developer',
        'Java Developer',
        'Web Developer',
        'Problem Solver'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="font-medium" ref={el}></span>;
};

// Grid Background Component
const GridBackground = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 z-0 opacity-30">
      <div
        className={`absolute inset-0 ${darkMode
          ? 'bg-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          }`}
        style={{
          backgroundImage: darkMode
            ? `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`
            : `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

// Navigation Component
const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'stats', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
      setIsOpen(false);

      // Update URL without hash and without page reload
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        className={`backdrop-blur-md ${darkMode
          ? 'bg-gray-900/70 border border-gray-700/50'
          : 'bg-white/70 border border-gray-200/50'
          } transition-all duration-300 rounded-2xl px-8 py-4 shadow-lg`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center gap-8">
          <motion.div
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            whileHover={{ scale: 1.05 }}
          >
            Yash
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id
                  ? `${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`
                  : `${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}`
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${darkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 dark:border-gray-800 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === item.id
                      ? `${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`
                      : `${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}`
                      }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

// Clean Hero Section Component
const HeroSection = ({ darkMode }) => {
  // Prevent hash from appearing in URL
  React.useEffect(() => {
    const preventHash = () => {
      if (window.location.hash) {
        const url = window.location.href.split('#')[0];
        window.history.replaceState({}, document.title, url);
      }
    };

    preventHash();
    const interval = setInterval(preventHash, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <GridBackground darkMode={darkMode} />

      {/* Background PNG Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `url('/yash_png.png')`,
            backgroundPosition: 'center right',
            backgroundSize: '70%'
          }}
        />
        <div className={`absolute inset-0 ${darkMode
          ? 'bg-gradient-to-r from-black via-black/80 to-transparent'
          : 'bg-gradient-to-r from-white via-white/80 to-transparent'
          }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl">
            {/* Small Profile Badge */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className={`w-full h-full rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center overflow-hidden`}>
                  <img
                    src="/yash_png.png"
                    alt="Yash Shinde"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} hidden`}>
                    Y
                  </div>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100/50 text-gray-700'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className={`text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Yash Shinde
            </motion.h1>

            {/* Subtitle with Typing Effect */}
            <motion.div
              className={`text-2xl md:text-3xl lg:text-4xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <TypedText />
            </motion.div>

            {/* Description */}
            <motion.p
              className={`text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              An aspiring AI & Full Stack Developer passionate about crafting intelligent,
              scalable, and visually engaging digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>

              <motion.a
                href="/Yash_Shinde_Resume.pdf"
                download="Yash_Shinde_Resume.pdf"
                className={`px-8 py-4 border-2 ${darkMode
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50'
                  : 'border-gray-400 text-gray-700 hover:border-gray-500 hover:bg-gray-50'
                  } font-semibold text-lg rounded-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Connect with me:
              </span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/YashShinde6-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } transition-colors hover:scale-110`}
                  whileHover={{ y: -2 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yash-naresh-shinde-ab1012332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } transition-colors hover:scale-110`}
                  whileHover={{ y: -2 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate about creating innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a dedicated developer with a passion for artificial intelligence and full-stack development.
              My journey began with Java and data structures, and has evolved to encompass machine learning,
              web development, and mobile app creation.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I believe in writing clean, efficient code and creating user experiences that are both
              functional and delightful. When I'm not coding, you'll find me exploring new technologies
              or working on personal projects that challenge my skills.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode
                    ? 'bg-gray-800 text-gray-300 border border-gray-700'
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Experience Timeline */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}>
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h3>
              <div className="space-y-4">
                {[
                  { year: '2024', title: 'Started AI & ML Journey', desc: 'Began exploring machine learning and AI development' },
                  { year: '2023', title: 'Full-Stack Development', desc: 'Mastered React, Flask, and database technologies' },
                  { year: '2022', title: 'Programming Foundation', desc: 'Built strong foundation in Java and data structures' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      } flex items-center justify-center text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      {item.year}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "PHP"],
      icon: Code,
      color: "blue"
    },
    {
      title: "Frontend Development",
      skills: ["React", "HTML/CSS", "TailwindCSS", "Responsive Design"],
      icon: Globe,
      color: "green"
    },
    {
      title: "Backend & APIs",
      skills: ["Flask", "Node.js", "REST APIs", "Authentication"],
      icon: Settings,
      color: "purple"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase", "Database Design"],
      icon: Database,
      color: "orange"
    },
    {
      title: "Mobile Development",
      skills: ["Android (Java)", "Firebase Integration", "Mobile UI/UX"],
      icon: Smartphone,
      color: "pink"
    },
    {
      title: "AI & Machine Learning",
      skills: ["XGBoost", "Data Analysis", "Predictive Models", "Grok API"],
      icon: Cpu,
      color: "indigo"
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
                } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorMap[category.color]} flex items-center justify-center mb-6`}>
                <category.icon size={24} className="text-white" />
              </div>

              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorMap[category.color]}`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "Stock Market Predictor",
      description: "A React web app predicting stock trends using historical data and XGBoost ML model with real-time analytics.",
      tech: ["React", "Python", "XGBoost", "ML", "API"],
      github: "#",
      demo: "#",
      color: "blue",
      featured: true
    },
    {
      title: "TrolleyGo – Auto Cart App",
      description: "Java-based Android app managing cart items with Firebase backend and real-time synchronization.",
      tech: ["Android", "Java", "Firebase", "Real-time DB"],
      github: "#",
      demo: "#",
      color: "green",
      featured: true
    },
    {
      title: "Sanskar Classes LMS",
      description: "Full Learning Management System with admission portal, AI-powered analytics and performance insights.",
      tech: ["React", "Flask", "Grok API", "AI", "Analytics"],
      github: "#",
      demo: "#",
      color: "purple",
      featured: true
    }
  ];

  const colorMap = {
    blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'from-green-500 to-green-600', text: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', border: 'border-purple-200' }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Project - Takes full width on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorMap[projects[0].color].bg}`} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Featured Project
                    </span>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {projects[0].title}
                  </h3>

                  <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={projects[0].github}
                      className={`flex items-center gap-2 px-6 py-3 border-2 ${darkMode
                        ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                        } rounded-lg font-medium transition-all duration-300`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>

                    <motion.a
                      href={projects[0].demo}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colorMap[projects[0].color].bg} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                <div className={`h-64 lg:h-80 rounded-xl bg-gradient-to-br ${colorMap[projects[0].color].bg} bg-opacity-10 flex items-center justify-center`}>
                  <div className={`text-6xl opacity-20`}>🚀</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
                } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorMap[project.color].bg} flex items-center justify-center mb-6 text-2xl`}>
                {project.color === 'green' ? '🛒' : '🎓'}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>

              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  className={`flex items-center gap-2 px-4 py-2 border ${darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    } rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>

                <motion.a
                  href={project.demo}
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colorMap[project.color].bg} text-white rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({ darkMode }) => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/YashShinde6-", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yash-naresh-shinde-ab1012332/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:yash@example.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Email', value: 'yash@example.com', icon: Mail },
                { label: 'Location', value: 'Available Remotely', icon: Globe },
                { label: 'Response Time', value: 'Within 24 hours', icon: Settings }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                    } flex items-center justify-center`}>
                    <item.icon size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                  </div>
                  <div>
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.label}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}>
              <h4 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect With Me
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl ${darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      } transition-all duration-300 flex flex-col items-center gap-2 group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Available for Work
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Open to new opportunities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`text-center pt-16 mt-16 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Yash Shinde. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Aggressive hash removal
  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash) {
        const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    };

    // Immediate removal
    removeHash();

    // Continuous monitoring
    const interval = setInterval(removeHash, 5);

    // Event listeners
    const events = ['hashchange', 'popstate', 'pushstate', 'replacestate'];
    const handler = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      removeHash();
      return false;
    };

    events.forEach(event => {
      window.addEventListener(event, handler, true);
    });

    return () => {
      clearInterval(interval);
      events.forEach(event => {
        window.removeEventListener(event, handler, true);
      });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Easter egg: AI console command
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Listen for "AI" typed anywhere on the page
      if (e.key === 'A' || e.key === 'a') {
        setTimeout(() => {
          const nextKey = (event) => {
            if (event.key === 'I' || event.key === 'i') {
              // Trigger neon glow effect
              document.body.style.boxShadow = '0 0 50px rgba(139, 92, 246, 0.8)';
              document.body.style.transition = 'box-shadow 0.5s ease';

              // Show easter egg message
              const message = document.createElement('div');
              message.textContent = '✨ AI Mode Activated! ✨';
              message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(45deg, #8b5cf6, #06b6d4);
                color: white;
                padding: 20px 40px;
                border-radius: 10px;
                font-weight: bold;
                z-index: 9999;
                animation: glow 2s ease-in-out;
              `;
              document.body.appendChild(message);

              setTimeout(() => {
                document.body.style.boxShadow = '';
                document.body.removeChild(message);
              }, 3000);

              document.removeEventListener('keypress', nextKey);
            }
          };
          document.addEventListener('keypress', nextKey);
          setTimeout(() => document.removeEventListener('keypress', nextKey), 1000);
        }, 100);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode
      ? 'dark bg-black text-white'
      : 'bg-gray-50 text-gray-900'
      }`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <StatsPage darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <WorkExperienceSection darkMode={darkMode} />
      <EducationSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </div>
  );
}