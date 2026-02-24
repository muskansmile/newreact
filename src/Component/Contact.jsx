import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="contact-header">
          <Col lg={8} md={12} className="mx-auto text-center">
            <h1>Get In Touch</h1>
            <p className="lead">We'd love to hear from you. Send us a message!</p>
          </Col>
        </Row>

        <Row className="contact-content">
          <Col lg={5} md={12} className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Address</h4>
              <p>123 Main Street<br />City, Country 12345</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Phone</h4>
              <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h4>Email</h4>
              <p><a href="mailto:info@clubsclient.com">info@clubsclient.com</a></p>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
            </div>
          </Col>

          <Col lg={7} md={12} className="contact-form-wrapper">
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your full name" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="What is this about?" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Enter your message" 
                  required 
                />
              </Form.Group>

              <Button type="submit" className="btn-submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
