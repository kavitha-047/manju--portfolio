import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Users, ShoppingCart, Tv } from 'lucide-react';

const projects = [
  {
    title: 'Sales Dashboard Analysis',
    description: 'Developed an interactive Power BI dashboard to visualize quarterly sales trends, identifying a 15% growth opportunity in the Northeast region.',
    tools: ['Power BI', 'Excel', 'SQL'],
    icon: <BarChart3 size={24} />,
    link: '#',
    github: '#'
  },
  {
    title: 'Customer Churn Analysis',
    description: 'Analyzed telecom customer data using Python to identify key churn drivers, resulting in high-risk customer segments for retention campaigns.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    icon: <Users size={24} />,
    link: '#',
    github: '#'
  },
  {
    title: 'E-commerce Data Insights',
    description: 'Extracted and cleaned transactional data from SQL databases to create a comprehensive report on product performance and customer behavior.',
    tools: ['SQL', 'Tableau', 'Excel'],
    icon: <ShoppingCart size={24} />,
    link: '#',
    github: '#'
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Exploratory Data Analysis (EDA) on Netflix content dataset to visualize trends in genres, release years, and country-wise content distribution.',
    tools: ['Python', 'Seaborn', 'Jupyter'],
    icon: <Tv size={24} />,
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">Portfolio</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Featured Projects</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
            A selection of my recent data analysis projects, showcasing my ability to clean, analyze, and visualize complex datasets.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tools">
                {project.tools.map(tool => (
                  <span key={tool} className="tool-tag">{tool}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} className="icon-link" aria-label="Github">
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a href={project.link} className="icon-link" aria-label="Live Demo">
                  <ExternalLink size={18} />
                  <span>Dashboard</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: var(--primary);
        }

        .project-icon {
          width: 50px;
          height: 50px;
          background: var(--accent-light);
          color: var(--primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .project-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .project-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tool-tag {
          font-size: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text-muted);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .icon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .icon-link:hover {
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
