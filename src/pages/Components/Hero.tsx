import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Web Developer.", "Coder.", "Developer.", "Learner."];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="bg-gray-900 text-white min-h-[70vh] flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft">
              Hi, I'm <span className="text-blue-400">Kajal Bharadwaj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate__animated animate__fadeInLeft animate__delay-1s">
              <span className="text-blue-400">{roles[currentRole]}</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 animate__animated animate__fadeInLeft animate__delay-2s">
              Crafting elegant solutions to complex problems through code.
              Specialized in full-stack development with a passion for clean
              architecture.
            </p>
            <div className="flex space-x-4 animate__animated animate__fadeInUp animate__delay-3s">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="border border-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate__animated animate__fadeInRight">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-400/10 flex items-center justify-center relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full absolute"></div>
              <img
                src="https://avatars.githubusercontent.com/u/136555169?v=4"
                alt=""
                className="overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
