

const Achievement = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16 animate__animated animate__fadeIn">
          My <span className="text-blue-600">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Achievement 1 --> */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <p className="text-gray-200 text-lg mb-6">
                "Developed Intellilearn as a final year project—an educational
                app designed for students to learn in their regional language.
                Built using Flutter, with complete responsibility for research
                and documentation."
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                Final Year Project Excellence
              </h4>
              <p className="text-gray-300">Team Member, 2024</p>
            </div>
          </div>

          {/* <!-- Achievement 2 --> */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M20 19H4V5H20V19M18 15H6V17H18V15M18 11H6V13H18V11M18 7H6V9H18V7Z"></path>
                </svg>
              </div>
              <p className="text-gray-200 text-lg mb-6">
                "Successfully managed a major college event during the 3rd year,
                coordinating with multiple teams, ensuring smooth execution, and
                enhancing overall event participation."
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                Event Management Leadership
              </h4>
              <p className="text-gray-300">2023 Achievement</p>
            </div>
          </div>

          {/* <!-- Achievement 3 --> */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"></path>
                </svg>
              </div>
              <p className="text-gray-200 text-lg mb-6">
                "Designed and published three innovative JavaScript projects
                from scratch, showcasing creativity and technical expertise in
                building interactive and functional web applications."
              </p>
              <h4 className="text-xl font-semibold text-blue-500">
                Event Manager
              </h4>
              <p className="text-gray-300">2022 Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
