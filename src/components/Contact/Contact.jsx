import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Copy, Check, Download } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import './Contact.css'

const EMAIL = 'aries.sarthakgupta@gmail.com'
const GITHUB_URL = 'https://github.com/sarthakdev14'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sarthak-gupta-99a0512a2'

const contactCards = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, copyable: true },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Sarthak Gupta', href: LINKEDIN_URL },
  { icon: GithubIcon, label: 'GitHub', value: '@sarthakdev14', href: GITHUB_URL },
  { icon: MapPin, label: 'Location', value: 'Bengaluru, India', href: null },
]

function Contact() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <div className="text-center">
          <span className="section-eyebrow">Let's connect</span>
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            I'm actively open to internship and SDE-1 opportunities. Whether it's a role or a project, I'd love to talk.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          <Col lg={5}>
            <div className="contact-cards">
              {contactCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="contact-card glass-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <a href={c.href || undefined} target={c.href ? '_blank' : undefined} rel="noreferrer" className="contact-card-link">
                    <span className="contact-icon-wrap"><c.icon size={22} /></span>
                    <span className="contact-text">
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </span>
                  </a>
                  {c.copyable && (
                    <button className="contact-copy-btn" onClick={copyEmail} aria-label="Copy email address" type="button">
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  )}
                </motion.div>
              ))}
              <Button className="btn-outline-glass w-100 mt-2" href="https://drive.google.com/file/d/1nLm37SjUx-0_YVvfY9gFKthLasEzBq6R/view?usp=sharing" target="_blank" rel="noreferrer">
                <Download size={18} className="me-2" />Download Resume
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <motion.div
              className="contact-form-wrap glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {sent && (
                <Alert variant="success" className="contact-alert">
                  Thanks! Your message has been sent. I'll get back to you soon.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    required
                  />
                </Form.Group>
                <Button type="submit" className="btn-gradient w-100">
                  <span><Send size={18} className="me-2" />Send Message</span>
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
