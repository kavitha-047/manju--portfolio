import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileCode, PieChart, Layout, Cpu, Server, Layers, Globe } from 'lucide-react';

const toolIcons = [
  { name: 'SQL', icon: <Database />, color: '#336791' },
  { name: 'Python', icon: <FileCode />, color: '#3776AB' },
  { name: 'Power BI', icon: <PieChart />, color: '#F2C811' },
  { name: 'Excel', icon: <Layout />, color: '#217346' },
  { name: 'Tableau', icon: <Layers />, color: '#E97627' },
  { name: 'Pandas', icon: <Cpu />, color: '#150458' },
  { name: 'PostgreSQL', icon: <Server />, color: '#336791' },
  { name: 'Jupyter', icon: <Globe />, color: '#F37626' }
];

const Tools = () => {
  return (
    <section className="tools" id="tools" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">Toolkit</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Tools & Technologies</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
            The specialized environment and frameworks I use to transform raw data into interactive dashboards and reports.
          </p>
        </div>

        <div className="tools-grid">
          {toolIcons.map((tool, index) => (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)',
                borderColor: 'var(--primary)'
              }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
              viewport={{ once: true }}
              className="tool-card"
            >
              <div className="tool-icon" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <span className="tool-name">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1.5rem;
        }

        .tool-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1.25rem;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: default;
          transition: border-color 0.3s ease;
        }

        .tool-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border-radius: 1rem;
        }

        .tool-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        @media (max-width: 480px) {
          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Tools;
