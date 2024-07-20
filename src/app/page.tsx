'use client'

import { CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  return (
    <>
      <body>
        <main className="bg-zinc-50 dark:bg-gray-800">
          <div className="flex items-center justify-center">
            <div className="container mx-auto my-5">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center text-center md:w-2/3">
                  <h1 className="mb-2 text-4xl font-bold">Jason O&apos;Dell</h1>
                  <hr className="my-4 w-24 border-t-2 border-gray-700 dark:border-zinc-200" />
                  <h3 className="mb-4 text-2xl">Full Stack Developer from North Carolina</h3>
                  <div className="space-x-4">
                    <a className="flex items-center hover:underline" href="mailto:jasoneodell@gmail.com">
                      <EnvelopeIcon className="mr-2 h-4 w-4" />
                      jasoneodell@gmail.com
                    </a>
                    <a
                      className="flex items-center hover:underline"
                      href="https://www.github.com/jeodell"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeBracketIcon className="mr-2 h-4 w-4" />
                      github.com/jeodell
                    </a>
                  </div>
                </div>
                <div className="my-4 md:w-1/3">
                  <img src="./img/jason.jpg" alt="Jason O'Dell" />
                </div>
              </div>
            </div>
          </div>
          <section id="about" className="container mx-auto my-10 p-5">
            <h2 className="mb-6 text-center text-3xl">About</h2>
            <div className="mx-auto max-w-4xl">
              <p className="mb-3">
                I&apos;m a full stack developer with 5 years of programming experience in both web and mobile
                development. I&apos;m currently working for a lung health startup building our web portal and mobile
                app. I have a Computer Programming Certificate from NC State after earning a BS in Human Biology before
                transitioning my career to computer science. The main technologies I&apos;ve used are Python (Django),
                Javascript (React), Dart (Flutter), HTML, and CSS.
              </p>
              <p className="mb-6">
                I believe my strengths are my versatility (from wearing many hats at our startup), my communication
                skills, and my eagerness to learn more about the field. In my spare time, I&apos;ve also completed many
                personal projects. Some of my favorites are a Flutter app for my wedding trip (including Bingo, a quiz,
                and more), a photography and a drone website for friends, a redesign of the website for Piedmont Legacy
                Trails, an interactive trails map, and a Spotify Web App to show you your followed artists&apos; recent
                releases. You can see all of those and more below.
              </p>
              <div className="text-center">
                <a
                  href="./img/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                >
                  View Resume
                </a>
              </div>
            </div>
          </section>

          <section id="skills" className="container mx-auto my-10 p-5">
            <h2 className="mb-6 text-center text-3xl">Skills</h2>
            <div className="grid grid-cols-1 gap-4 text-zinc-200 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-blue-500 p-4 shadow-md">
                <h5 className="mb-2 text-center font-bold">Front-End</h5>
                <ul>
                  <li>HTML | HTMX</li>
                  <li>CSS | Tailwind</li>
                  <li>JavaScript | React (Next.js)</li>
                  <li>Dart | Flutter (Bloc)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-blue-500 p-4 shadow-md">
                <h5 className="mb-2 text-center font-bold">Back-End</h5>
                <ul>
                  <li>Python | Django</li>
                  <li>Node.js | Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="rounded-lg bg-blue-500 p-4 shadow-md">
                <h5 className="mb-2 text-center font-bold">Other</h5>
                <ul>
                  <li>Git</li>
                  <li>WordPress</li>
                  <li>MapBox</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="container mx-auto my-10 p-5">
            <h2 className="mb-6 text-center text-3xl">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Brianna Haferman Photography"
                img="./img/bkh_website.png"
                description="Creative media portfolio website to display photography, illustration, and film."
                technologies={['React.js', 'Next.js', 'AWS S3']}
                website="https://www.briannahaferman.com"
                dialogId="bkh-dialog"
                coverImg="./img/bkh_card.png"
                coverAlt="Brianna Haferman Photography"
              />
              <ProjectCard
                title="Piedmont Legacy Trails"
                img="./img/plt_website.jpg"
                description="Interactive map of trails in the Piedmont region of North Carolina."
                technologies={['Node.js', 'Express', 'MongoDB', 'MapBox']}
                website="https://www.piedmontlegacytrails.org"
                dialogId="plt-dialog"
                coverImg="./img/plt_card.png"
                coverAlt="Piedmont Legacy Trails"
              />
              <ProjectCard
                title="Spotify New Releases"
                img="./img/spotify_website.mp4"
                description="View the most recent albums released by your followed artists on Spotify."
                technologies={['React', 'Node.js', 'Express']}
                website="https://jeodell.github.io/SpotifyNewReleases/"
                dialogId="spotify-dialog"
                coverImg="./img/spotify_card.png"
                coverAlt="Spotify New Releases"
                isVideo={true}
              />
              <ProjectCard
                title="Piedmont Trail Finder"
                img="./img/ptf_website.png"
                description="Browse trails in the Piedmont or login to add trails yourself."
                technologies={['Node.js', 'Express', 'MongoDB', 'EJS']}
                website="https://piedmont-trail-finder.herokuapp.com/"
                dialogId="ptf-dialog"
                coverImg="./img/ptf_card.png"
                coverAlt="Piedmont Trail Finder"
              />
              <ProjectCard
                title="Other Projects"
                img=""
                description="Personal projects not listed above."
                technologies={['Python', 'Java', 'C']}
                website=""
                dialogId="other-dialog"
                coverImg="./img/other_card.png"
                coverAlt="Other Projects"
              />
              {/* <div className="group relative">
                <img src="./img/Spotify New Releases 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                    onClick={() => handleOpenDialog('spotify')}
                  >
                    More Details
                  </button>
                  <dialog
                    className="mx-auto my-auto w-2/3 bg-white backdrop-blur-lg"
                    id="spotify-modal"
                    aria-hidden="true"
                  >
                    <div className="modal fade" id="modalSpotify" aria-hidden="true">
                      <div className="modal-dialog modal-fluid" role="document">
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="relative h-0 w-full pb-[56%]">
                                  <video
                                    src="./img/spotify-new-releases-mp4.mp4"
                                    className="absolute"
                                    width="100%"
                                    height="100%"
                                    controls
                                  ></video>
                                </div>
                              </div>
                              <div className="col-lg-5 d-flex justify-content-center">
                                <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                                  <h2 className="card-title">Spotify New Releases</h2>
                                  <p className="card-text mb-0 text-center">
                                    Login to Spotify to see a list of the most recent albums released by your followed
                                    artists. If you would rather not login, please feel free to watch the video for a
                                    short preview of the app.{' '}
                                  </p>
                                  <small className="mb-2 text-center">
                                    App uses free version of Heroku for the backend so it may take 15-30 sec
                                  </small>

                                  <p className="card-text text-center">Technologies Used: React | Node.js | Express</p>
                                  <a
                                    href="https://jeodell.github.io/SpotifyNewReleases/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-jo-spotify"
                                  >
                                    View Website
                                  </a>
                                  <a
                                    href="https://github.com/jeodell/SpotifyNewReleases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-jo-spotify"
                                  >
                                    View Code
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <div className="group relative">
                <img src="./img/Piedmont Trail Finder 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                    onClick={() => handleOpenDialog('ptf')}
                  >
                    More Details
                  </button>

                  <dialog className="mx-auto my-auto w-2/3 bg-white backdrop-blur-lg" id="plt-modal" aria-hidden="true">
                    <div className="modal fade" id="modalPTF" aria-hidden="true">
                      <div className="modal-dialog modal-fluid" role="document">
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="relative h-0 w-full pb-[56%]">
                                  <img src="./img/ptf.png" className="absolute" width="100%" height="100%" />
                                </div>
                              </div>
                              <div className="col-lg-5 d-flex justify-content-center">
                                <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                                  <h2 className="card-title">Piedmont Trail Finder</h2>
                                  <p className="card-text text-center">
                                    Browse trails found in the Piedmont or login to add trails yourself. Leave reviews
                                    and/or likes to let other users know what you think about the trail.
                                  </p>
                                  <p className="card-text text-center">
                                    I have a more detailed, RESTful API as part of another project that I am in the
                                    process of integrating into this one.
                                  </p>
                                  <p className="card-text text-center">
                                    Technologies Used: Node.js | Express | Passport | EJS | MongoDB (Mongoose) |
                                    Bootstrap
                                  </p>
                                  <a
                                    href="https://piedmont-trail-finder.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-jo-ptf"
                                  >
                                    View Website
                                  </a>
                                  <a
                                    href="https://github.com/jeodell/PiedmontTrailFinder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-jo-ptf"
                                  >
                                    View Code
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <div className="group relative">
                <img src="./img/Piedmont Legacy Trails Cover 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                    onClick={() => handleOpenDialog('plt')}
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="group relative">
                <img src="./img/NC State Projects 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                    onClick={() => handleOpenDialog('ncsu')}
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="group relative">
                <img src="./img/Other Projects 3x2.png" className="w-full rounded-lg shadow-md" alt="" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
                    onClick={() => handleOpenDialog('other')}
                  >
                    More Details
                  </button>
                </div>
              </div> */}
            </div>
          </section>

          <section id="contact" className="bg-jo-light py-10 text-zinc-200">
            <Footer />
          </section>
        </main>
      </body>
    </>
  )
}
