import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { GraduationCap, Code2, Rocket, MapPin } from 'lucide-react'
import './About.css'

const cards = [
  { icon: GraduationCap, label: 'Bangalore Institute of Technology' },
  { icon: Code2, label: 'MERN Stack Developer' },
  { icon: Rocket, label: 'Open to Internship & SDE-1 Roles' },
  { icon: MapPin, label: 'Bengaluru, India' },
]

const milestones = [
  {
    step: '01',
    title: 'The First Project — Pantry Pal',
    text: 'Every developer has one project that changes the way they think about programming. For me, that was Pantry Pal — my first solo project and the moment I realized how much I enjoyed building software from the ground up. From planning features to debugging problems, I experienced the complete software development process for the first time.',
  },
  {
    step: '02',
    title: 'Diving Deeper into Full-Stack',
    text: 'That experience inspired me to dive deeper into full-stack development. I built AI-powered applications, completed a frontend internship, collaborated in Agile teams, and developed scalable REST APIs using the MERN stack.',
  },
  {
    step: '03',
    title: 'Working Toward SDE',
    text: "Today I'm working toward becoming a Software Development Engineer with a strong interest in backend engineering, scalable systems, and writing production-ready software.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

function About() {
  return (
    <section id="about" className="section about-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">My story</span>
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">
            How a single project sparked a passion for building software from the ground up.
          </p>
        </div>
        <Row className="g-4 justify-content-center mb-5">
          {cards.map((c, i) => (
            <Col key={i} xs={6} md={6} lg={3}>
              <motion.div
                className="about-card glass-card text-center"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="about-icon-wrap">
                  <c.icon size={26} />
                </div>
                <p className="about-card-label">{c.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="journey-timeline">
          {milestones.map((m, i) => (
            <motion.div
              key={m.step}
              className="journey-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="journey-step">{m.step}</div>
              <div className="journey-content glass-card">
                <h3 className="journey-title">{m.title}</h3>
                <p className="journey-text">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
