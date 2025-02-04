import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      id: 2,
      name: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      id: 3,
      name: "Javascript",
      image:
        "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    },
    {
      id: 4,
      name: "React.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      id: 5,
      name: "Java",
      image:
        "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
    },
    {
      id: 6,
      name: "C",
      image: "https://img.icons8.com/?size=512&id=40670&format=png",
    },
    {
      id: 7,
      name: "C++",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
      id: 8,
      name: "Git",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    },
    {
      id: 9,
      name: "Github",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      id: 10,
      name: "Vs Code",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      id: 11,
      name: "Postman",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
    },
    {
      id: 12,
      name: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
  ];

  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-4" id="el-z1ush5jz">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate__animated animate__fadeIn">
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Frontend Skills --> */}
          <div className="bg-gray-800 rounded-xl p-6 animate__animated animate__fadeInUp">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Web Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                  alt="React.js"
                  className="w-12 h-12 mb-2 object-cover"
                />
                <span className="text-sm">HTML</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="TypeScript"
                  className="w-12 h-12 mb-2 object-cover"
                />
                <span className="text-sm">CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
                  alt="Tailwind CSS"
                  className="w-12 h-12 mb-2 object-cover"
                />
                <span className="text-sm">JavaScript</span>
              </div>
            </div>
          </div>

          {/* <!-- Backend Skills --> */}
          <div className="bg-gray-800 rounded-xl p-6 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                ></path>
              </svg>
              Programming Language
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"
                  alt="Java"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">Java</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                  alt="Python"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
                  alt="CPP"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">C++</span>
              </div>
            </div>
          </div>

          {/* <!-- DevOps Skills --> */}
          <div className="bg-gray-800 rounded-xl p-6 animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git/GitHub"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">Git/GitHub</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                  alt="Vs Code"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">Vs Code</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256"
                  alt="Postman"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm">Postman</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 animate__animated animate__fadeIn">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 animate__animated animate__fadeInUp">
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              CSS
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              Javascript
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              React.js
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              Java
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              C++
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors cursor-default">
              Python
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
