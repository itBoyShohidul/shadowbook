import React from "react";
import "../index.css";
import about from "../asset/images/google.jpg";
import coffee from "../asset/images/coffee.jpg";
import person from "../asset/images/person.png";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <section className="first">
        <nav className="nav-home">
          <div className="brand left">
            <Link to="/">
              <h1>Shadow Book</h1>
            </Link>
          </div>
          <div className="nav-home-link right">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </ul>
          </div>
        </nav>
        <header>
          <h1 className="header-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dolor.
          </h1>
          <p className="header-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur asperiores ullam iure. Culpa illum ducimus fuga
            tenetur, reiciendis vel corporis eos laboriosam laborum doloremque
            recusandae magnam, necessitatibus voluptate nam fugit?
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            unde id laborum suscipit exercitationem, facilis optio saepe magnam
            repellendus cumque facere beatae praesentium ratione commodi
            repudiandae atque, vitae eaque earum.
          </p>

          <div className="header-btn">
            <a href="#about">
              <button>About</button>
            </a>
            <a href="./pages/contact.html">
              <button>Contact</button>
            </a>
          </div>
        </header>
      </section>
      <section className="about" id="about">
        <h2 className="heading">About</h2>
        <hr />
        <div className="about-container">
          <div className="left">
            <img src={about} alt="about_image" />
          </div>
          <div className="right">
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>
                Dolores incidunt inventore tempora beatae tempore atque ipsam?
              </li>
              <li>Ratione minus magnam neque sit possimus doloremque amet.</li>
              <li>
                Repudiandae, consequatur rerum. Quis alias rem voluptatem quia?
              </li>
              <li>
                Exercitationem quibusdam molestiae vel illum, blanditiis vero
                eligendi.
              </li>
              <li>Beatae laboriosam culpa nemo quia, corrupti aperiam ut!</li>
              <li>Tempora sequi distinctio vel adipisci deserunt sint est.</li>
              <li>
                Dolores quisquam voluptate eius! Cum ut accusamus voluptate.
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="mission">
        <h3 className="heading">Mission</h3>
        <hr />
        <div className="mission-container">
          <div className="left">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Perspiciatis debitis delectus rem porro ea?</li>
              <li>Fugiat maiores nisi debitis nihil nam.</li>
              <li>Alias qui totam architecto nostrum nobis.</li>
              <li>Soluta quos cupiditate itaque eum accusantium!</li>
            </ul>
          </div>
          <div className="right">
            <img src={coffee} alt="mission_image" />
          </div>
        </div>
      </section>
      <section className="team">
        <h4 className="heading">Our Team</h4>
        <hr />
        <div className="team-container">
          <div className="card">
            <img src={person} alt="Person" />
            <h5 className="person-name">John Doe</h5>
            <h6 className="person-role">Web Developer</h6>
            <button className="card-btn">Contact me</button>
          </div>
          <div className="card">
            <img src={person} alt="Person" />
            <h5 className="person-name">David T.</h5>
            <h6 className="person-role">Web Designer</h6>
            <button className="card-btn">Contact me</button>
          </div>
          <div className="card">
            <img src={person} alt="Person" />
            <h5 className="person-name">R. Smith</h5>
            <h6 className="person-role">SEO Expert</h6>
            <button className="card-btn">Contact me</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
