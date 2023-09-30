import React from 'react';
import homeImage from '../img/course1e.jpg';

const Home = () => {
  return (
    <section className="section" id="home_section">
      <div id="home_content" className="d-flex align-items-center container">
        <div id="home_div" className="col-lg-6">
          <h1 id="home_h1">Astronomy 101</h1>
          <p id="home_p">Explore the wonders of the universe. Today.</p>
          <button id="home_btn" className="btn btn-primary">
            <a href="#">I'm in!</a>
          </button>
        </div>
        <div id="home_img_div" className="col-lg-6 float-right">
          <img src={homeImage} alt="A girl swinging in a hammock in the middle of stars." id="home_img" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Home;
