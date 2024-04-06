import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Fatih DÖNMEZ</h2>
          <h1>Frontend Developer</h1>
          <div className="buttons">
            <button>See my Projects</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
