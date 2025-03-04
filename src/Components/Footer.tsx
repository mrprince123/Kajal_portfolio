

const Footer = () => {
  return (
    <footer id="footer" className=" text-white">
    <div className="container mx-auto px-4">
      {/* <!-- Main Footer Content --> */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* <!-- Brand Section --> */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Kajal Bharadwaj</h3>
          <p className="text-gray-400">Software Engineer specializing in creating innovative digital solutions.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- Quick Links --> */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a></li>
          </ul>
        </div>

        {/* <!-- Contact Info --> */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">Banglore</li>
            <li className="text-gray-400">kjal66511@gmail.com</li>
          
          </ul>
        </div>

        {/* <!-- Newsletter --> */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to receive updates and news.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-neutral-700 focus:border-blue-400 focus:outline-none flex-grow"/>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Bottom Bar --> */}
      <div className="border-t border-neutral-800 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 John Doe. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Scroll to Top Button --> */}
    <button id="scrollToTop" className="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors opacity-0 invisible">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </footer>
  );
};

export default Footer;
