import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Academic background</span>
          <h2 className="section-title"><span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">
            My formal training in engineering and technology.
          </p>
        </div>
        <div className="edu-timeline">
          {education.map((e, i) => (
            <motion.div
              key={e.id}
              className="edu-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-card glass-card">
                <span className="edu-period">{e.period}</span>
                <h3 className="edu-institution">{e.institution}</h3>
                <div className="edu-degree-row">
                  <span className="edu-degree">{e.degree}</span>
                  <span className="edu-field">{e.field}</span>
                </div>
                <p className="edu-desc">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
