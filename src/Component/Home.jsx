import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="hero-content">
              <h1 className="hero-title">Welcome to ClubsClient</h1>
              <p className="hero-subtitle">
                Manage your clubs and communities with ease. Create, organize, and grow your community effortlessly.
              </p>
              <div className="hero-buttons">
                <Button as={Link} to="/about" className="btn-primary-custom me-3">
                  Learn More
                </Button>
                <Button as={Link} to="/contact" className="btn-secondary-custom">
                  Get In Touch
                </Button>
              </div>
            </Col>
            <Col lg={6} md={12} className="hero-image">
              <div className="hero-placeholder">
                🏢
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2 className="section-title">Why Choose ClubsClient?</h2>
          <Row className="features-grid">
            <Col lg={4} md={6} sm={12} className="feature-card-wrapper">
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">📊</div>
                  <Card.Title>Easy Management</Card.Title>
                  <Card.Text>
                    Manage all your club activities and members in one place with an intuitive interface.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="feature-card-wrapper">
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">👥</div>
                  <Card.Title>Community Building</Card.Title>
                  <Card.Text>
                    Connect with members and build a strong community around your shared interests.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="feature-card-wrapper">
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🔒</div>
                  <Card.Title>Secure & Reliable</Card.Title>
                  <Card.Text>
                    Your data is protected with enterprise-grade security and 99.9% uptime.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Ready to Build Your Community?</h2>
            <p>Join thousands of successful club managers using ClubsClient today.</p>
            <Button as={Link} to="/contact" className="btn-cta">
              Start Your Journey
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;