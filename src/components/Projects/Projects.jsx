import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import { projects } from '../../data/projects'
import './Projects.css'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Things I've built</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of projects that reflect my growth across full-stack, AI, and backend engineering.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {projects.map((p, i) => (
            <Col key={p.id} md={6} lg={4}>
              <motion.article
                className="project-card glass-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="project-image-wrap">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <div className="project-image-overlay" />
                  <span className="project-tagline">{p.tagline}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-name">{p.name}</h3>
                  <div className="project-tech">
                    {p.techStack.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <ul className="project-features">
                    {p.features.map((f) => (
                      <li key={f}><CheckCircle2 size={15} /> {f}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <Button className="btn-outline-glass btn-sm" href={p.github} target="_blank" rel="noreferrer">
                      <GithubIcon size={16} className="me-2" />GitHub
                    </Button>
                    {p.live && (
                      <Button className="btn-gradient btn-sm" href={p.live} target="_blank" rel="noreferrer">
                        <span><ExternalLink size={16} className="me-2" />Live Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
