import React from 'react';
import courseVideo from '../video/coursevideo.mp4';

const Course = () => {
  return (
    <section id="course_section">
      <div className="container mt-5">
      <video autoPlay loop muted className="w-100">
          <source src={courseVideo} type="video/mp4" />
          Can't play the video.
        </video>
      </div>
    <div className="container text-white mt-5">
      <h2 className="display-4 text-center fw-bold">About the course</h2>
      <p className="lead text-center fw-bold">
        Welcome to Astronomy 101: Discovering the Universe!
      </p>
      <p>
        Are you fascinated by the mysteries of the cosmos? Have you ever looked
        up at the night sky and wondered about the stars, planets, and galaxies
        that adorn it? If so, this course is your gateway to the captivating
        world of astronomy.
      </p>
      <p>
        Our course is tailored for beginners with little to no prior knowledge
        of astronomy. Over the duration of this journey, you will embark on an
        astronomical adventure that will unravel the secrets of the universe.
      </p>
      <p className="text-center display-6 fw-bold">What you'll learn:</p>
      <ul className="ul_custom">
        <li className="li_custom">Explore the basics of stargazing and celestial objects.</li>
        <li className="li_custom">Discover the fascinating history of astronomy and its pioneers.</li>
        <li className="li_custom">Unearth the wonders of our solar system, from the Sun to distant planets.</li>
        <li className="li_custom">Voyage through the Milky Way and beyond, delving into the mysteries of distant galaxies and black holes.</li>
        <li className="li_custom">Gain hands-on experience with telescopes and observation techniques.</li>
        <li className="li_custom">Connect with fellow stargazers and share your passion for the cosmos.</li>
      </ul>
      <p className="mt-4">
        Our experienced instructors are passionate about making astronomy
        accessible and enjoyable for everyone. Join us on this incredible
        journey as we gaze at the stars, contemplate the cosmos, and expand our
        understanding of the universe.
      </p>
      <p>
        No prior experience is required—just a curious mind and a sense of
        wonder. Enroll today and let the exploration begin!
      </p>
    </div>
    </section>
  );
};

export default Course;
