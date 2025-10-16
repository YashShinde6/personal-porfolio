import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Spline 3D Component (using iframe for better compatibility)
const SplineScene = ({ scene, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }>
        <iframe
          src={scene}
          frameBorder="0"
          width="100%"
          height="100%"
          className="rounded-2xl"
          loading="lazy"
        />
      </Suspense>
    </div>
  );
};

// Floating 3D Elements Component
const Floating3DElements = ({ darkMode }) => {
  const elements = [
    {
      id: 1,
      scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
      size: "w-32 h-32",
      position: "top-20 left-10",
      delay: 0
    },
    {
      id: 2,
      scene: "https://prod.spline.design/llK5dJMYBBhBUXpT/scene.splinecode",
      size: "w-24 h-24",
      position: "top-40 right-20",
      delay: 0.5
    },
    {
      id: 3,
      scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
      size: "w-28 h-28",
      position: "bottom-32 left-20",
      delay: 1
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.position} ${element.size}`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 0.7, 
            scale: 1, 
            rotate: 0,
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 2,
            delay: element.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className={`w-full h-full rounded-2xl ${
            darkMode ? 'bg-gray-800/20' : 'bg-white/20'
          } backdrop-blur-sm border border-white/10 shadow-lg`}>
            <SplineScene scene={element.scene} className="w-full h-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Main 3D Hero Component
const Hero3DComponent = ({ darkMode }) => {
  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-full h-full"
      >
        <div className={`w-full h-full rounded-3xl ${
          darkMode ? 'bg-gray-800/30' : 'bg-white/30'
        } backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden`}>
          <SplineScene 
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

// Alternative: CSS-based 3D elements if Spline doesn't load
const CSS3DElements = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-1">
      {/* Floating Cube */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className={`w-full h-full ${
          darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
        } rounded-lg shadow-lg transform-gpu`} 
        style={{
          transform: 'rotateX(45deg) rotateY(45deg)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
        }} />
      </motion.div>

      {/* Floating Sphere */}
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={`w-full h-full ${
          darkMode ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-green-400 to-teal-500'
        } rounded-full shadow-lg`}
        style={{
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)'
        }} />
      </motion.div>

      {/* Floating Triangle */}
      <motion.div
        className="absolute top-1/2 left-10 w-14 h-14"
        animate={{ 
          rotateZ: [0, 360],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div 
          className={`w-full h-full ${
            darkMode ? 'bg-gradient-to-br from-orange-500 to-red-600' : 'bg-gradient-to-br from-orange-400 to-red-500'
          } shadow-lg transform rotate-45`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'
          }}
        />
      </motion.div>
    </div>
  );
};

export { SplineScene, Floating3DElements, Hero3DComponent, CSS3DElements };