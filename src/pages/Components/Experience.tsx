import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate__animated animate__fadeIn">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* <!-- Timeline --> */}
          <div className="relative space-y-8">
            {/* <!-- Line --> */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-400"></div>

            {/* <!-- Experience 1 --> */}
            <div className="relative flex items-center md:justify-between md:odd:flex-row-reverse group transition-transform hover:scale-105 duration-300">
              <div className="flex items-center md:w-1/2">
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-4 md:ml-0 md:mx-4 bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                  <span className="text-blue-400 text-sm">2024 - Present</span>
                  <h3 className="text-xl font-bold mt-1">
                    Web Developer
                  </h3>
                  <p className="text-gray-400 font-medium">
                    Self Pace
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li>• Led development of microservices architecture</li>
                    <li>• Managed team of 5 developers</li>
                    <li>• Reduced system latency by 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Experience 2 --> */}
            <div className="relative flex items-center md:justify-between group transition-transform hover:scale-105 duration-300">
              <div className="flex items-center md:w-1/2 md:ml-auto">
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-4 md:ml-0 md:mx-4 bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
                  <span className="text-blue-400 text-sm">2024 - 2024</span>
                  <h3 className="text-xl font-bold mt-1">
                    Web Developer
                  </h3>
                  <p className="text-gray-400 font-medium">
                    Kreativan Technologies
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li>• Developed scalable web applications</li>
                    <li>• Implemented CI/CD pipelines</li>
                    <li>• Improved app performance by 60%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Experience 3 --> */}
            <div className="relative flex items-center md:justify-between md:odd:flex-row-reverse group transition-transform hover:scale-105 duration-300">
              <div className="flex items-center md:w-1/2">
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-4 md:ml-0 md:mx-4 bg-gray-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
                  <span className="text-blue-400 text-sm">2023 - 2024</span>
                  <h3 className="text-xl font-bold mt-1">Arduino Club</h3>
                  <p className="text-gray-400 font-medium">Team Member</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li>• Build a Arduino System</li>
                    <li>• Build a MPV</li>
                    <li>• Learn Arduino Hardware</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Skills Summary --> */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 animate__animated animate__fadeIn">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate__animated animate__fadeInUp">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
