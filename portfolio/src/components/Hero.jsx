import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ChevronRight, BarChart, Database, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-element node-1"
        >
          <BarChart size={40} />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-element node-2"
        >
          <Database size={32} />
        </motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-element node-3"
        >
          <TrendingUp size={60} />
        </motion.div>
      </div>

      <div className="container hero-content">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="badge">Fresher Data Analyst</span>
          <h1>
            Turning Raw Data Into <br />
            <span className="text-gradient">Meaningful Insights</span>
          </h1>
          <p className="hero-description">
            Hi, I'm Manju. I specialize in data cleaning, visualization, and finding stories within numbers to help businesses make data-driven decisions.
          </p>
          
          <div className="hero-ctas">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              href="#resume" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume <FileDown size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
                      radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .bg-element {
          position: absolute;
          color: var(--primary);
          opacity: 0.1;
        }

        .node-1 { top: 20%; right: 15%; }
        .node-2 { bottom: 25%; left: 10%; }
        .node-3 { top: 40%; left: 20%; }

        .hero-content {
          text-align: center;
          max-width: 800px;
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.1;
          margin: 1.5rem 0;
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--primary), #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .hero-ctas {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
