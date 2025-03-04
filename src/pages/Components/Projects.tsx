
import Piano from "../../assets/piano.png";
import TicTak from "../../assets/tictak.png";
import Calculator from "../../assets/calculator.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Piano,
      name: "Piano",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corporis doloribus iure, veritatis cupiditate asperiores molestias ratione commodi ducimus consequuntur assumenda laboriosam earum nobis error.",
      technology: ["HTML", "Css", "Javascript"],
      github: "https://github.com/kksb29/piano",
      demo: "https://kajalpiano.vercel.app/",
    },
    {
      id: 2,
      image: TicTak,
      name: "Tictak",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corporis doloribus iure, veritatis cupiditate asperiores molestias ratione commodi ducimus consequuntur assumenda laboriosam earum nobis error.",
      technology: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/kksb29/tictak",
      demo: "https://tictak-p1ht.vercel.app/",
    },
    {
      id: 3,
      image: Calculator,
      name: "My Calculator",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corporis doloribus iure, veritatis cupiditate asperiores molestias ratione commodi ducimus consequuntur assumenda laboriosam earum nobis error.",
      technology: ["HTML", "CSS", "Javascript", "Tailwind"],
      github: "https://github.com/kksb29/my-calculator",
      demo: "https://my-calculator-snowy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16 animate__animated animate__fadeIn">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Project 1 --> */}
          {projects.map((item, id) => (
            <div
              key={id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp transition-transform hover:scale-105 duration-300"
            >
              <img src={item.image} alt="" />

              <div className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technology.map((tech, id) => (
                    <span
                      key={id}
                      className="px-3 py-1 bg-gray-700 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={item.github}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={item.demo}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors animate__animated animate__fadeIn"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
