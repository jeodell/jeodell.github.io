'use client'

import { CodeBracketIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  return (
    <main className="text-gray-700 dark:text-zinc-200">
      <section id="intro" className="container mx-auto my-4 p-5">
        <div className="flex items-center justify-center">
          <div className="mx-auto my-5">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center justify-center text-center md:w-2/3">
                <h1 className="mb-2 text-4xl font-bold">Jason O&apos;Dell</h1>
                <hr className="my-4 w-24 border-t-2 border-gray-700 dark:border-zinc-200" />
                <p className="mb-4 text-2xl">Full Stack Developer from North Carolina</p>
                <div className="flex flex-col items-start justify-center">
                  <a
                    className="flex items-center hover:underline"
                    href="https://www.linkedin.com/in/jasoneodell"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserCircleIcon className="mr-2 h-4 w-4" />
                    linkedin.com/in/jasoneodell
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
              <div className="mx-auto mb-0 mt-8 w-1/2 md:my-4 md:w-1/3">
                <img src="./img/jason.jpg" alt="Jason O'Dell" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto my-4 p-5">
        <h2 className="mb-4 text-center text-3xl">About</h2>
        <div className="mx-auto flex max-w-4xl flex-col space-y-4">
          <p>
            I&apos;m a full stack developer with 5 years of programming experience in both web and mobile development.
            I&apos;m currently working for a lung health startup building our web portal and mobile app. I have a
            Computer Programming Certificate from NC State after earning a BS in Human Biology before transitioning my
            career to computer science. The main technologies I&apos;ve used are Python (Django), Javascript (React),
            Dart (Flutter), HTML, and CSS.
          </p>
          <p>
            I believe my strengths are my versatility (from wearing many hats at our startup), my communication skills,
            and my eagerness to learn more about the field. In my spare time, I&apos;ve also completed many personal
            projects. Some of my favorites are a Flutter app for my wedding trip (including Bingo, a quiz, and more), a
            photography and a drone website for friends, a redesign of the website for Piedmont Legacy Trails, an
            interactive trails map, and a Spotify Web App to show you your followed artists&apos; recent releases. You
            can see all of those and more below.
          </p>
          <a
            href="./img/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-jo-medium dark:hover:bg-jo-medium/80 mx-auto rounded-full bg-jo-light px-6 py-3 text-center text-zinc-200 hover:bg-jo-light/90"
          >
            View Resume
          </a>
        </div>
      </section>

      <section id="skills" className="container mx-auto my-8 p-5">
        <h2 className="mb-4 text-center text-3xl">Skills</h2>
        <div className="grid grid-cols-1 gap-4 text-zinc-200 xs:grid-cols-2 lg:grid-cols-3">
          <div className="dark:bg-jo-medium rounded-lg bg-jo-light p-4 shadow-md">
            <h3 className="mb-2 text-center text-lg font-semibold">Front-End</h3>
            <ul>
              <li>HTML | HTMX</li>
              <li>CSS | Tailwind</li>
              <li>JavaScript | React</li>
              <li>Dart | Flutter</li>
            </ul>
          </div>
          <div className="dark:bg-jo-medium rounded-lg bg-jo-light p-4 shadow-md">
            <h3 className="mb-2 text-center text-lg font-semibold">Back-End</h3>
            <ul>
              <li>Python | Django</li>
              <li>Node.js | Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="dark:bg-jo-medium rounded-lg bg-jo-light p-4 shadow-md">
            <h3 className="mb-2 text-center text-lg font-semibold">Other</h3>
            <ul>
              <li>Git</li>
              <li>WordPress</li>
              <li>Webflow</li>
              <li>MapBox</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto mb-24 mt-8 p-5">
        <h2 className="mb-4 text-center text-3xl">Projects</h2>
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
        </div>
      </section>

      <section id="contact" className="dark:bg-jo-medium bg-jo-light py-10 text-zinc-200">
        <Footer />
      </section>
    </main>
  )
}
