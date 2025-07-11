import meter1 from "../assets/img/F.png";
import meter2 from "../assets/img/C.png";
import meter3 from "../assets/img/java.png";
import meter4 from "../assets/img/java-script.png";
import meter5 from "../assets/img/mysql.png";
import meter6 from "../assets/img/css-3.png";
import meter7 from "../assets/img/html-5.png";
import meter8 from "../assets/img/python.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/left-arrow.png";
import arrow2 from "../assets/img/right-chevron.png";
import colorSharp from "../assets/img/side bar.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
        <button className="custom-left-arrow" onClick={onClick}>
            <img src={arrow1} alt="left arrow"/>
        </button>
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <button className="custom-right-arrow" onClick={onClick}>
            <img src={arrow2} alt="right arrow"/>
        </button>
    );
};

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My Journey from Intermediate Skills to Mastery in Coding, Design, and Innovation. Diligently working to bridge the gap between proficiency and expertise, transforming passions into polished brilliance, and blending creativity with technical prowess for lasting impact</p>
                        <Carousel responsive={responsive} autoPlay={true}  autoPlaySpeed={1500} infinite={true} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <a href="https://flutter.dev/"><img src={meter1} alt="Image" /></a>
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.cprogramming.com/"><img src={meter2} alt="Image" /></a>
                                <h5>C Programming </h5>
                            </div>
                            <div className="item">
                            <a href="https://www.java.com/en/"><img src={meter3} alt="Image" /></a>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.javascript.com/"><img src={meter4} alt="Image" /></a>
                                <h5>Java-Script</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.mysql.com/"><img src={meter5} alt="Image" /></a>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src={meter6} alt="Image" /></a>
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                            <a href="https://html.com/"><img src={meter7} alt="Image" /></a>
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.python.org/"><img src={meter8} alt="Image" /></a>
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
