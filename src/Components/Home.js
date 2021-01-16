import "./Home.css";
import Resume from "../Images/Resume.png";

const Home = () => {
  return (
    <div className="home">
      <h1 className="Name">Aravind Balaji</h1>
      <h3 className="Role">Web Developer</h3>
      <a href={Resume} download>
        <button type="button" class="btn btn-light Resume">
          Resume
        </button>
      </a>
    </div>
  );
};

export default Home;
