import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/IN.png";
import navIcon2 from "../assets/img/GT.png";
import navIcon3 from "../assets/img/G.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/om-sundeep-sahoo-ba0376270"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Sundeep-Sahoo"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sundeep.sahoo.9?igsh=c2UwMjV6OW4xYmE1"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Stay Connected!!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
