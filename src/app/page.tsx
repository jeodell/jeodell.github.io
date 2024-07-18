import { CodeBracketIcon, EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <body>
        <main>
          <div className="flex items-center justify-center full-page-intro">
            <div className="container mx-auto my-5">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center text-center text-white md:w-2/3">
                  <h1 className="mb-4 text-4xl font-bold animate__animated animate__fadeInDown">Jason O&apos;Dell</h1>
                  <hr className="w-24 my-4 border-t-2 border-white animate__animated animate__fadeInDown" />
                  <h3 className="mb-4 text-2xl animate__animated animate__fadeInDown">
                    Full Stack Developer from North Carolina.
                  </h3>
                  <div className="space-x-4">
                    <a className="flex items-center text-white hover:underline" href="mailto:jasoneodell@gmail.com">
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      jasoneodell@gmail.com
                    </a>
                    <a
                      className="flex items-center text-white hover:underline"
                      href="https://www.github.com/jeodell"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeBracketIcon className="w-4 h-4 mr-2" />
                      github.com/jeodell
                    </a>
                  </div>
                </div>
                <div className="my-4 md:w-1/3">
                  <img src="./img/jason.jpg" className="rounded-full shadow-lg" alt="Jason O'Dell" />
                </div>
              </div>
            </div>
          </div>
          <section id="about" className="container p-5 mx-auto my-10">
            <h2 className="mb-6 text-3xl text-center">About</h2>
            <div className="max-w-4xl mx-auto">
              <p className="mb-6">
                I&apos;m a full stack developer with 5 years of programming experience in both web and mobile
                development. I&apos;m currently working for VitalFlo, a lung health start-up, building our web portal
                and mobile app. I have a Computer Programming Certificate from NC State after originally earning a BS in
                Human Biology before transitioning my career to computer science. Throughout my learning and work,
                I&apos;ve picked up skills on the frontend, backend, and mobile sides of development. I pride myself in
                my problem solving abilities, my communication skills, and my eagerness to learn more about the field.
                In my spare time, I&apos;ve also completed many personal projects such as a Flutter app for my wedding
                trip (including Bingo, a quiz, and more), deploying a photography e-commerce site, volunteering to
                redesign the website for Piedmont Legacy Trails, creating a Spotify Web App to show you your followed
                artists&apos; recent releases, and more.
              </p>
              <div className="text-center">
                <a
                  href="./img/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                >
                  View Resume
                </a>
              </div>
            </div>
          </section>

          <section id="skills" className="container p-5 mx-auto my-10">
            <h2 className="mb-6 text-3xl text-center">Skills</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 text-white bg-blue-500 rounded-lg shadow-md">
                <h5 className="mb-2 font-bold text-center">Front-End</h5>
                <ul>
                  <li>
                    <i className="mr-2 fab fa-html5"></i>HTML5
                  </li>
                  <li>
                    <i className="mr-2 fab fa-css3-alt"></i>CSS3 | Bootstrap
                  </li>
                  <li>
                    <i className="mr-2 fab fa-react"></i>JavaScript | React
                  </li>
                  <li>
                    <i className="mr-2 fas fa-mobile-alt"></i>Dart | Flutter
                  </li>
                </ul>
              </div>
              <div className="p-4 text-white bg-blue-500 rounded-lg shadow-md">
                <h5 className="mb-2 font-bold text-center">Back-End</h5>
                <ul>
                  <li>
                    <i className="mr-2 fab fa-python"></i>Python | Django
                  </li>
                  <li>
                    <i className="mr-2 fab fa-node-js"></i>Node.js | Express
                  </li>
                  <li>
                    <i className="mr-2 fab fa-java"></i>Java
                  </li>
                </ul>
              </div>
              <div className="p-4 text-white bg-blue-500 rounded-lg shadow-md">
                <h5 className="mb-2 font-bold text-center">Databases | Deployment</h5>
                <ul>
                  <li>
                    <i className="mr-2 fab fa-deskpro"></i>PostgreSQL
                  </li>
                  <li>
                    <i className="mr-2 fas fa-database"></i>MongoDB
                  </li>
                  <li>
                    <i className="mr-2 fab fa-digital-ocean"></i>Digital Ocean | NGINX
                  </li>
                  <li>
                    <i className="mr-2 fas fa-rocket"></i>Heroku | Netlify | GitHub Pages
                  </li>
                </ul>
              </div>
              <div className="p-4 text-white bg-blue-500 rounded-lg shadow-md">
                <h5 className="mb-2 font-bold text-center">Technologies</h5>
                <ul>
                  <li>
                    <i className="mr-2 fab fa-github"></i>Git | GitHub
                  </li>
                  <li>
                    <i className="mr-2 fab fa-wordpress"></i>WordPress
                  </li>
                  <li>
                    <i className="mr-2 fas fa-laptop-code"></i>VSCode
                  </li>
                  <li>
                    <i className="mr-2 fas fa-book-open"></i>Jupyter Notebook
                  </li>
                  <li>
                    <i className="mr-2 fas fa-table"></i>Tableau
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="container p-5 mx-auto my-10">
            <h2 className="mb-6 text-3xl text-center">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative group">
                <img src="./img/BH Photography 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalBKH"
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="relative group">
                <img src="./img/Spotify New Releases 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalSpotify"
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="relative group">
                <img src="./img/Piedmont Trail Finder 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalPTF"
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="relative group">
                <img src="./img/Piedmont Legacy Trails Cover 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalPLT"
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="relative group">
                <img src="./img/NC State Projects 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalNCSU"
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="relative group">
                <img src="./img/Other Projects 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-6 py-2 text-white bg-blue-500 rounded-full btn btn-lg"
                    data-toggle="modal"
                    data-target="#modalOP"
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-10 text-white bg-blue-500">
            <footer className="container mx-auto">
              <div className="mb-10 text-center">
                <p className="mb-4 text-xl font-bold">Contact</p>
                <hr className="w-24 mx-auto my-4 border-t-2 border-white" />
                <p className="flex items-center justify-center">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  North Carolina
                </p>
                <p className="flex items-center justify-center">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  jasoneodell@gmail.com
                </p>
                <p className="flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  (336) 403-7837
                </p>
              </div>
              <div className="flex justify-center mb-10 space-x-4">
                <a
                  href="https://www.linkedin.com/in/jason-o-dell-43b6a564/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
                <a
                  href="https://www.github.com/jeodell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
              <div className="text-center">
                <p>© {new Date().getFullYear()} Copyright: Jason O&apos;Dell</p>
              </div>
            </footer>
          </section>
        </main>
      </body>
    </>
  )
}
