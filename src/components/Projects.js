import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/proj/pro1.png";
import projImg2 from "../assets/proj/pro2.png";
import projImg3 from "../assets/proj/pro3.png";
import projImg4 from "../assets/proj/pro4.png";
import projImg5 from "../assets/proj/pro5.png";
import colorSharp2 from "../assets/img/side bar.png";
import crt1 from "../assets/Certificate/crt1.jpg";
import crt2 from "../assets/Certificate/crt2.jpg";
import crt3 from "../assets/Certificate/crt3.jpg";
import crt4 from "../assets/Certificate/crt4.jpg";
import bgs1 from "../assets/Badges/bgs-1.jpg";





import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "StayFinder",
      description: "Find Your Home Away from Home: Explore Rental Options on Our User-Friendly, HTML, CSS, and PHP-Based Site",  
      imgUrl: projImg1,
    },
    {
      title: "LoveScore",
      description: "Find Your Perfect Match: Calculate Your Love Score Using Our Sleek, User-Friendly Love Calculator Built with HTML, Bootstrap, and JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Utkal Wishes",
      description: "Utkal Divas Special: Personalize Your Celebration with Posters Made with HTML, CSS, and JavaScrip",
      imgUrl: projImg3,
    },
    {
      title: "Bytes: Your Digital Companion",
      description: "Connect Effortlessly with iBytes: Enjoy a Modern Interface from Logo Splash Screen to Sign-In, Powered by Flutter",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio",
      description: "",
      imgUrl: projImg5,
    },
    {
      // title: "Business Startup",
      // description: "Design & Development",
      // imgUrl: projImg3,
    },
  ];

  const Badges = [
    {
      title: "Om Sundeep Sahoo: Android Co-member at GDSC GIETU Startup",
      description: "Honored to be recognized as an Android Co-member at Google Developer Student Clubs, GIET University, Gunupur.",
      imgUrl: bgs1,
    },
  ];

  const Certificate = [
    {
      title: "Elite Certificate in Data Analytics with Python",
      description: "Awarded to Om Sundeep Sahoo for achieving a consolidated score of 60%.",
      imgUrl: crt1,
    },
    {
      title: "Elite Certificate in Data Structure and Algorithms Using Java",
      description: "This certificate is awarded to Om Sundeep Sahoo for completing the course with a consolidated score of 81%.",
      imgUrl: crt2,
    },
    {
      title: "Certificate of Completion in Learn JavaScript - For Beginners",
      description: "Awarded to Om Sundeep Sahoo for completing the course on March 29, 2024.",
      imgUrl: crt3,
    },
    {
      title: "Python Development Internship at Tech Octanet Services Pvt ",
      description: "Completed a 1-month Python Development Internship at Tech Octanet Services Pvt Ltd, gaining hands-on experience and honing my skills in various projects.",
      imgUrl: crt4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects / Achievement</h2>
                <p>Embark on a visual journey through my portfolio, where creativity meets code. Explore projects crafted with passion, innovation, and attention to detail. Welcome to my world of digital creation</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Badges</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificate </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Badges.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Certificate.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
