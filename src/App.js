import React, { useState } from 'react';
import './index.css';
import Contact from './Contact';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="portfolio-container flex flex-col items-center justify-center h-screen bg-gray-000">      
    {/* Portfolio Card Container */}
      <div className="portfolio-card-container flex p-8 rounded-t-2xl 
      bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent">
        <div className="w-1/4 p-6">
          <div className="flex justify-between items-center h-full">
            <div className="w-14 h-14 absolute drop-shadow-md shadow-lg shadow-indigo-500/50 gradient-border
            hover:motion-safe:animate-spin">
              <img
                src={process.env.PUBLIC_URL + '/media/portrait.jpg'}
                alt="Avatar"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="portfolio-about-me w-full">
          <p className="text-gray-800">
            What's up! Welcome to my Portfolio Card, my name is
          </p>
          <h1 className="text-2xl font-bold mb-2 text-gray-900">Bazinga</h1>
          <p className="text-gray-700">
            a <b><span className="full-stack animate-pulse">Full-Stack Developer</span></b> with a passion for creativity, simplicity, and the aesthetically pleasing. 
            <br></br>
            <br></br>I love to code, but I also have a hobby for games, and photography,video
            <br></br>cinematography and video editing.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>Take a look around!</center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>Testing spacing
          </p>
          {/* You can add more content or components here */}
        </div>
      </div>

      {/* Buttons Container */}
      <div className="portfolio-buttons-container flex justify-between p-4 pt-24 bg-gray-000 rounded-b-2xl bg-gradient-to-t from-transparent via-purple-50 to-transparent">
        <a
          href={process.env.PUBLIC_URL + '/media/your-resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button flex justify-center font-sans text-xl/9 text-white p-2 mr-4 w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
        >
          Resume
        </a>
        <button
          className="contact-button flex justify-center font-sans text-xl/9 text-white p-2 mr-[260px] w-48 h-14 rounded-full drop-shadow-lg bg-indigo-500 hover:bg-indigo-700 hover:animate-pulse hover:shadow-inner"
          onClick={openModal}
        >
          Contact Me!
        </button>
        {showModal && (
          <Contact closeModal={closeModal}>
            <button onClick={closeModal} className="text-white">
              X
            </button>
          </Contact>
        )}

        <div className="flex space-x-4 items-center">
        <a
          href="https://github.com/example-link"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:bg-gradient-to-t hover:from-gray-500 hover:to-white-200 ... hover:scale-125 duration-100"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/github.svg'}
            alt="GitHub"
            className=""
          />
        </a>
        <a
          href="https://www.instagram.com/example-link/"                target="_blank"
          rel="noopener noreferrer"
          className="instagram-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 ... hover:scale-125 duration-100"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/instagram.svg'}
            alt="Instagram"
            className=""
          />
        </a>
        <a
          href="https://linkedin.com/in/example-link"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button transition ease-in-out delay-50 w-14 h-14 p-2 bg-gray-200 drop-shadow-md rounded-md 
          bg-gradient-to-t from-purple-100 to-transparent ... hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-200 ... hover:scale-125 duration-100"
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
            alt="LinkedIn"
            className=""
          />
        </a>
        {/* Similar code for other social buttons */}
        </div>

      </div>
    </div>
  );
}

export default App;
