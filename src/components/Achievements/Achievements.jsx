import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { achievements } from '../../data/achievements'
import './Achievements.css'

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(value)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="achievement-counter">
      {count}{suffix}
    </span>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Milestones</span>
          <h2 className="section-title">Achievements &amp; <span className="gradient-text">Highlights</span></h2>
          <p className="section-subtitle">
            Recognition, community involvement, and milestones along the way.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {achievements.map((a, i) => (
            <Col key={a.id} xs={12} sm={6} lg={3}>
              <motion.div
                className="achievement-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="achievement-icon-wrap">
                  <i className={`bi ${a.icon}`}></i>
                </div>
                {a.value !== null ? (
                  <AnimatedCounter value={a.value} suffix={a.suffix || ''} />
                ) : null}
                <h3 className="achievement-label">{a.label}</h3>
                <p className="achievement-desc">{a.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Achievements
