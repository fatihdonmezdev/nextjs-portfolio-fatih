import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/*Sidebar*/}
      <div className="wrapper">
        <span>Fatihdevelops</span>
        <div className="social">
          <a href="">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
