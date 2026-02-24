import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} sm={6} xs={12} className="footer-section">
            <h5 className="footer-title">🏢 ClubsClient</h5>
            <p className="footer-description">
              Your trusted platform for managing clubs and communities with ease.
            </p>
            <div className="social-links">
              <a href="#facebook" className="social-link">f</a>
              <a href="#twitter" className="social-link">𝕏</a>
              <a href="#linkedin" className="social-link">in</a>
              <a href="#instagram" className="social-link">📷</a>
            </div>
          </Col>

          <Col md={2} sm={6} xs={12} className="footer-section">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="footer-section">
            <h6 className="footer-subtitle">Resources</h6>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="footer-section">
            <h6 className="footer-subtitle">Contact Info</h6>
            <p className="footer-contact">
              📧 Email: <a href="mailto:info@clubsclient.com">info@clubsclient.com</a>
            </p>
            <p className="footer-contact">
              📱 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p className="footer-contact">
              📍 Address: 123 Main St, City, Country
            </p>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6} xs={12}>
            <p className="footer-text">
              © {currentYear} ClubsClient. All rights reserved.
            </p>
          </Col>
          <Col md={6} xs={12} className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <span> | </span>
            <Link to="#">Terms of Service</Link>
            <span> | </span>
            <Link to="#">Cookie Policy</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;