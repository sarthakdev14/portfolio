import { Container } from 'react-bootstrap'
import { Mail } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import './Footer.css'

const EMAIL = 'aries.sarthakgupta@gmail.com'
const GITHUB_URL = 'https://github.com/sarthakdev14'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sarthak-gupta-99a0512a2'

const socials = [
  { icon: GithubIcon, href: GITHUB_URL },
  { icon: LinkedinIcon, href: LINKEDIN_URL },
  { icon: Mail, href: `mailto:${EMAIL}` },
]

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <p className="footer-credit">Designed &amp; Developed by</p>
        <h4 className="footer-name gradient-text">Sarthak Gupta</h4>
        <div className="footer-socials">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Social link">
              <s.icon size={20} />
            </a>
          ))}
        </div>
        <p className="footer-copyright">&copy; 2026 Sarthak Gupta</p>
      </Container>
    </footer>
  )
}

export default Footer
