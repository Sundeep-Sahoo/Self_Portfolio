import meter1 from "../assets/img/Flutter.png";
import meter2 from "../assets/img/C.png";
import meter3 from "../assets/img/java.png";
import meter4 from "../assets/img/java-script.png";
import meter5 from "../assets/img/mysql.png";
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} autoPlay={true}  autoPlaySpeed={1500} infinite={true} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Web Development</h5>
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
