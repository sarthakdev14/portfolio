import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Download, FolderOpen } from 'lucide-react'
import './Hero.css'

const roles = ['Backend Developer', 'MERN Stack Developer', 'Full Stack Developer', 'Problem Solver']

function useTypingCycle(words, typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

function Hero() {
  const typed = useTypingCycle(roles)

  return (
    <section id="home" className="hero-section">
      <div className="blob blob-1" style={{ top: '-8%', left: '-5%' }} />
      <div className="blob blob-2" style={{ bottom: '-10%', right: '-5%' }} />
      <div className="blob blob-3" style={{ top: '40%', right: '20%' }} />

      <Container className="hero-container">
        <Row className="align-items-center g-5">
          <Col lg={6} className="hero-left">
            <motion.span
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I&apos;m
            </motion.span>
            <motion.h1
              className="hero-name gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Sarthak Gupta
            </motion.h1>
            <motion.div
              className="hero-typed-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="hero-typed cursor-blink">{typed}</span>
            </motion.div>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Backend-focused Software Engineering undergraduate passionate about building
              scalable applications using React, Node.js, Express.js, and MongoDB. I enjoy solving
              real-world problems through clean architecture, REST APIs, and modern web technologies.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button className="btn-gradient" href="#projects">
                <span><FolderOpen size={18} className="me-2" />View Projects</span>
              </Button>
              <Button className="btn-outline-glass" href="https://drive.google.com/file/d/1nLm37SjUx-0_YVvfY9gFKthLasEzBq6R/view?usp=sharing" target="_blank" rel="noreferrer">
                <Download size={18} className="me-2" />Download Resume
              </Button>
            </motion.div>
          </Col>
          <Col lg={6} className="hero-right">
            <motion.div
              className="hero-illustration glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/6424587/pexels-photo-6424587.jpeg?auto=compress&cs=tinysrgb&h=900&w=600"
                alt="Developer coding on a dark screen"
                loading="eager"
              />
              <div className="hero-code-overlay">
                <div className="code-dots">
                  <span></span><span></span><span></span>
                </div>
                <pre className="code-snippet">{`const sarthak = {
  role: 'SDE Aspirant',
  stack: 'MERN',
  focus: 'Backend & APIs',
  location: 'Bengaluru',
  openToWork: true,
}`}</pre>
              </div>
            </motion.div>
          </Col>
        </Row>
        <motion.a
          href="#about"
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll to next section"
        >
          <span></span>
        </motion.a>
      </Container>
    </section>
  )
}

export default Hero
