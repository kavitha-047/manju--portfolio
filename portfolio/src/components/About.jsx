import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-image-container"
        >
          <div className="profile-placeholder">
            <div className="placeholder-inner">
               <span className="placeholder-text">Portrait Placeholder</span>
            </div>
            <div className="image-decoration dec-1"></div>
            <div className="image-decoration dec-2"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <span className="badge">About Me</span>
          <h2>Driven by Data, <br />Focused on Results</h2>
          <p>
            I am a passionate fresher Data Analyst with a strong foundation in statistical analysis, data visualization, and business intelligence. I love uncovering patterns in complex datasets and translating them into actionable business insights.
          </p>
          <p>
            My approach combines technical proficiency in SQL, Python, and Power BI with a keen eye for detail and a commitment to data accuracy. I am constantly learning and exploring new ways to leverage data for strategic decision-making.
          </p>
          
          <div className="stats-grid">
            {[
              { label: 'Projects Completed', value: '10+' },
              { label: 'Tools Mastered', value: '8+' },
              { label: 'Datasets Analyzed', value: '25+' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image-container {
          position: relative;
        }

        .profile-placeholder {
          aspect-ratio: 1;
          background: var(--bg-secondary);
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border-color);
        }

        .placeholder-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        }

        .placeholder-text {
          color: var(--text-muted);
          font-weight: 500;
        }

        .image-decoration {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 1rem;
          z-index: -1;
        }

        .dec-1 {
          background: var(--accent-light);
          top: -20px;
          left: -20px;
        }

        .dec-2 {
          background: #dbeafe;
          bottom: -20px;
          right: -20px;
        }

        .about-text h2 {
          font-size: 2.5rem;
          margin: 1rem 0;
          line-height: 1.2;
        }

        .about-text p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-card {
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          text-align: center;
        }

        .stat-value {
          color: var(--primary);
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-text {
            order: 2;
          }
          .about-image-container {
            order: 1;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
