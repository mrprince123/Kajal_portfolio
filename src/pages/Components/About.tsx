

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16 animate__animated animate__fadeIn">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-white font-semibold mb-3 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                Education
              </h3>
              <h4 className="text-blue-500 mb-2">Gandhi Engineering College</h4>
              <p className="text-gray-300">
                Bachelor's in Computer Science from Tech University.
                Continuously learning through certifications and hands-on
                projects.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                <svg
                  className="w-6 h-6 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Bio
              </h3>
              <p className="text-gray-300">
                A passionate Software Engineer with extensive experience in
                developing web applications. I thrive on solving complex
                problems and creating efficient solutions. My journey in
                technology has been driven by curiosity and a constant desire to
                learn and grow.
              </p>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="bg-gray-800 rounded-lg p-8">
              {/* <!-- Profile Image --> */}
              <img
                src="https://placehold.co/192x192/DEDEDE/555555?text=Image+Unavailable"
                alt="Image unavailable"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg transition-opacity duration-300 opacity-100 error-image"
                loading="lazy"
              />

              {/* <!-- Bio Text --> */}
              <p className="text-gray-300 text-center leading-relaxed">
                I believe in the power of technology to transform lives and
                businesses. When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>

              {/* <!-- Resume Download Button --> */}
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
