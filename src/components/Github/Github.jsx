import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import { githubProfile } from '../../data/github'
import './Github.css'

function Github() {
  const { username, url, stats, topLanguages } = githubProfile

  return (
    <section id="github" className="section github-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Open source</span>
          <h2 className="section-title">GitHub <span className="gradient-text">Activity</span></h2>
          <p className="section-subtitle">
            A snapshot of my contributions, repositories, and the languages I work with.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          <Col lg={5}>
            <motion.div
              className="github-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="github-header">
                <span className="github-avatar"><GithubIcon size={28} /></span>
                <div>
                  <h3 className="github-username">@{username}</h3>
                  <p className="github-subtitle">Active contributor & builder</p>
                </div>
              </div>
              <div className="github-contribution-grid">
                {Array.from({ length: 91 }).map((_, i) => {
                  const level = Math.floor(Math.random() * 5)
                  return (
                    <span
                      key={i}
                      className={`contrib-cell level-${level}`}
                      title={`Contribution day ${i + 1}`}
                    />
                  )
                })}
              </div>
              <p className="github-contribution-label">Contribution activity (last 3 months)</p>
              <Row className="g-2 mt-3">
                {stats.map((s) => (
                  <Col key={s.label} xs={6} sm={3}>
                    <div className="github-stat">
                      <i className={`bi ${s.icon}`}></i>
                      <span className="github-stat-value">{s.value}</span>
                      <span className="github-stat-label">{s.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
          <Col lg={5}>
            <motion.div
              className="github-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="github-languages-title">Top Languages</h3>
              <div className="github-lang-bar">
                {topLanguages.map((l) => (
                  <span
                    key={l.name}
                    className="lang-segment"
                    style={{ width: `${l.percent}%`, background: l.color }}
                    title={`${l.name} ${l.percent}%`}
                  />
                ))}
              </div>
              <div className="github-lang-list">
                {topLanguages.map((l) => (
                  <div key={l.name} className="lang-item">
                    <span className="lang-dot" style={{ background: l.color }} />
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-percent">{l.percent}%</span>
                  </div>
                ))}
              </div>
              <Button className="btn-gradient w-100 mt-4" href={url} target="_blank" rel="noreferrer">
                <span><ArrowUpRight size={18} className="me-2" />Visit GitHub Profile</span>
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Github
