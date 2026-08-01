import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import './Skills.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {skillCategories.map((cat, i) => (
            <Col key={cat.id} xs={12} sm={6} lg={4}>
              <motion.div
                className="skill-card glass-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="skill-card-header">
                  <span className="skill-icon-wrap">
                    <i className={`bi ${cat.icon}`}></i>
                  </span>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
