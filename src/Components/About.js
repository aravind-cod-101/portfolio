import Profile from "../Images/Profile.jpg";
import "./About.css";
const About = () => {
  return (
    <div id="about">
      <div className="grid-container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div id="about-me" className="grid-child">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
          <div className="col">
            <div id="about-me-info" className="grid-child">
              <h2>Hey there! </h2>
              <p>
                I am current pursuing a degree in Anna University,I realized
                that although I still had a love for science, the industry I was
                in was lacking in creativity and problem solving. After dabbling
                with some introductory JavaScript courses on the internet and
                exploring programming through self-teaching,I was constantly
                working hard to improve those skills
              </p>
              <p>
                Through LearningFuze, I have developed a strong understanding of
                JavaScript (ES6), ReactJS, Node.js,
                Firebase,Flutter,Python,HTML5, and CSS3. As a developer, I find
                a lot of joy and excitement utilizing my skills to help
                troubleshoot bugs and pushing projects forward. I enjoy learning
                new technologies and growing in a field that is constantly being
                pushed to new boundaries.
              </p>
              <p>
                Feel free to connect with me! Let's talk about web dev, tech,
                sports, photography, video games, cooking, or how I can be of
                help to your team or business! I'd love to get to know more
                developers and expand my network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
