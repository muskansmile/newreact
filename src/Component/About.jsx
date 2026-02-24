import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Container>
        <Row className="about-hero">
          <Col lg={8} md={12} className="mx-auto">
            <div className="about-header">
              <h1>About ClubsClient</h1>
              <p className="lead">Building communities, one club at a time.</p>
            </div>
          </Col>
        </Row>

        <Row className="about-content">
          <Col lg={6} md={12} className="about-text">
            <h2>Our Mission</h2>
            <p>
              At ClubsClient, we believe that communities thrive when they have the right tools to
              connect, organize, and grow together. Our mission is to empower club managers,
              community leaders, and organizers with an intuitive platform that simplifies
              management and enhances member engagement.
            </p>
            <h2 style={{ marginTop: "2rem" }}>Why We Started</h2>
            <p>
              Founded in 2024, ClubsClient was born from the frustration of managing communities
              with fragmented tools. We saw an opportunity to create a unified solution that
              brings everything a club needs into one place.
            </p>
          </Col>
          <Col lg={6} md={12} className="about-image">
            <div className="about-placeholder">
              👨‍💼
            </div>
          </Col>
        </Row>

        <Row className="values-section">
          <Col lg={12} md={12} className="text-center">
            <h2 className="section-title">Our Core Values</h2>
          </Col>
          <Col lg={4} md={6} sm={12} className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Community First</h4>
            <p>We put our users and their communities at the heart of everything we do.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="value-card">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>We continuously innovate to provide the best tools for community management.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="value-card">
            <div className="value-icon">🔧</div>
            <h4>Simplicity</h4>
            <p>We believe in making complex tasks simple and intuitive for everyone.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
