import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '../../data/experience'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Where I've worked</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Hands-on internship experience building real products in an Agile environment.
          </p>
        </div>
        <div className="exp-wrap">
          {experiences.map((e, i) => (
            <motion.div
              key={e.id}
              className="exp-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="exp-header">
                <div className="exp-icon-wrap">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-company">
                    {e.company} <span className="exp-sep">·</span>{' '}
                    <span className="exp-location"><MapPin size={13} /> {e.location}</span>
                  </p>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
              <p className="exp-desc">{e.description}</p>
              <div className="exp-stack">
                {e.stack.map((s) => (
                  <span key={s} className="tech-pill">{s}</span>
                ))}
              </div>
              <Row className="g-3 mt-1">
                {e.metrics.map((m) => (
                  <Col key={m.label} xs={4}>
                    <div className="metric-card glass-card">
                      <span className="metric-value gradient-text">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
