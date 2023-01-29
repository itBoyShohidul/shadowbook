import React from "react";
import Footer from "../component/Footer";
import person from "../asset/images/person.png";
import "../css/profile.css";
import Post from "../features/Post";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaGithub,
  FaDiscord,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";
import LoggedNav from "../component/LoggedNav";

function Profile() {
  return (
    <div>
      <LoggedNav />
      <section className="profile-img">
        <div className="img">
          <img src={person} alt="Profile_Picture" />
        </div>
        <div className="profile-text">
          <h2 className="profile-name">Shohidul Islam</h2>
          <h3>@itBoyShohidul</h3>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            expedita, delectus quo ratione laborum sequi? Veritatis, similique.
            Quam, nihil minus, repellendus explicabo cumque iure vel, quas error
            deleniti placeat officiis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sint
            aut consequatur recusandae natus libero debitis est voluptas
            voluptatum porro impedit commodi hic, provident quod corporis ea
            nesciunt qui eius.
          </p>
        </div>
      </section>
      <div className="social-link-container">
        <div className="button-container">
          <ul>
            <li>
              <button className="social-btn">
                <FaFacebook />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaTwitter />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaTelegram />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaLinkedin />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaMedium />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaWhatsapp />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaGithub />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaDiscord />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaGooglePlus />
              </button>
            </li>
            <li>
              <button className="social-btn">
                <FaInstagram />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <section className="profile-body">
        <div className="profile-details">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Sit pariatur atque deleniti reprehenderit?</li>
            <li>Itaque sit sequi labore quae?</li>
            <li>Doloremque sunt ab voluptatem assumenda.</li>
            <li>Doloribus officiis ut maxime totam.</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Sit pariatur atque deleniti reprehenderit?</li>
            <li>Itaque sit sequi labore quae?</li>
            <li>Doloremque sunt ab voluptatem assumenda.</li>
            <li>Doloribus officiis ut maxime totam.</li>
          </ul>
          <hr />
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Sit pariatur atque deleniti reprehenderit?</li>
            <li>Itaque sit sequi labore quae?</li>
            <li>Doloremque sunt ab voluptatem assumenda.</li>
            <li>Doloribus officiis ut maxime totam.</li>
          </ul>
          <hr />
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Sit pariatur atque deleniti reprehenderit?</li>
            <li>Itaque sit sequi labore quae?</li>
            <li>Doloremque sunt ab voluptatem assumenda.</li>
            <li>Doloribus officiis ut maxime totam.</li>
          </ul>
        </div>
        <div className="profile-post">
          <Post />
          <Post />
          <Post />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
