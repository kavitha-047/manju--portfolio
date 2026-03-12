import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, delay }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="progress-bg">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          viewport={{ once: true }}
          className="progress-fill"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'Excel (Advanced)', level: 90 },
    { name: 'SQL (PostgreSQL / MySQL)', level: 85 },
    { name: 'Python (Pandas, NumPy)', level: 80 },
    { name: 'Power BI / Tableau', level: 85 },
    { name: 'Data Visualization', level: 90 },
    { name: 'Statistics', level: 75 }
  ];

  const softSkills = [
    'Critical Thinking',
    'Problem Solving',
    'Data Cleaning',
    'Business Insights',
    'Communication',
    'Collaboration'
  ];

  return (
    <section className="skills" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge">Expertise</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Technical Skillset</h2>
        </div>

        <div className="skills-grid">
          <div className="technical-bars">
            {technicalSkills.map((skill, i) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>

          <div className="soft-skills">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Core Competencies</h3>
            <div className="tags-container">
              {softSkills.map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              className="skills-illustration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="chart-mockup">
                  <div className="bar b1"></div>
                  <div className="bar b2"></div>
                  <div className="bar b3"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 5rem;
          align-items: start;
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-main);
        }

        .skill-percentage {
          color: var(--primary);
          font-weight: 600;
        }

        .progress-bg {
          height: 8px;
          background: #e2e8f0;
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: white;
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          cursor: default;
          transition: all 0.3s ease;
        }

        .skills-illustration {
          margin-top: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 1.5rem;
          border: 1px solid var(--border-color);
          display: flex;
          justify-content: center;
        }

        .chart-mockup {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          height: 100px;
        }

        .bar {
          width: 20px;
          background: var(--primary);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          opacity: 0.3;
        }

        .b1 { height: 60%; animation: pulse 2s infinite ease-in-out; }
        .b2 { height: 90%; animation: pulse 2s infinite ease-in-out 0.5s; }
        .b3 { height: 40%; animation: pulse 2s infinite ease-in-out 1s; }

        @keyframes pulse {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.1); opacity: 0.6; }
        }

        @media (max-width: 968px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
