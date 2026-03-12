import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <span className="badge">Get In Touch</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Let's Work Together</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>manju@example.com</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon"><Linkedin size={20} /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/manju-data</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>TamilNau,India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a whileHover={{ y: -5 }} href="#" className="social-btn"><Linkedin /></motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="social-btn"><Github /></motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="social-btn"><Mail /></motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-extras"
          >
            {/* Resume Section */}
            <div className="resume-card">
              <div className="resume-content">
                <FileText className="resume-icon" size={40} />
                <div>
                  <h3>Download my Resume</h3>
                  <p>Curious about my full background?</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                id="resume"
              >
                Download PDF
              </motion.button>
            </div>

            <div className="availability-card">
              <div className="status-dot"></div>
              <span>Currently available for freelance projects.</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .method-item {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .method-icon {
          width: 40px;
          height: 40px;
          background: var(--accent-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .method-item h4 {
          font-size: 0.9rem;
          margin-bottom: 0.1rem;
        }

        .method-item p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          width: 50px;
          height: 50px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .resume-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
        }

        .resume-content {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .resume-icon {
          color: var(--primary);
        }

        .resume-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .resume-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .availability-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 480px) {
          .resume-card {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .resume-content {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
