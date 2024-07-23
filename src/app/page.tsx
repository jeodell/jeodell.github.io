'use client'

import { CodeBracketIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - 2019

  return (
    <main className="text-gray-700 dark:text-zinc-200">
      <section id="intro" className="container mx-auto my-8 p-4">
        <div className="flex items-center justify-center">
          <div className="mx-auto my-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center justify-center text-center lg:w-3/4">
                <h1 className="my-2 text-4xl font-bold">Jason O&apos;Dell</h1>
                <hr className="my-4 w-24 border-t-2 border-gray-700 dark:border-zinc-200" />
                <p className="my-2 text-2xl">Full Stack Developer from North Carolina</p>
                <div className="mb-6 mt-2 flex flex-col items-start justify-center md:flex-row md:space-x-8">
                  <a
                    className="dark:focus-zinc-200 flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-jo-dark dark:focus:ring-zinc-200"
                    href="https://www.linkedin.com/in/jasoneodell"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserCircleIcon className="mr-2 h-4 w-4" />
                    linkedin.com/in/jasoneodell
                  </a>
                  <a
                    className="dark:focus-zinc-200 flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-jo-dark dark:focus:ring-zinc-200"
                    href="https://www.github.com/jeodell"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeBracketIcon className="mr-2 h-4 w-4" />
                    github.com/jeodell
                  </a>
                </div>
                <div className="flex flex-wrap space-y-2 lg:px-16">
                  <p className="text-left">
                    I&apos;m a full stack developer with {yearsOfExperience} years of programming experience in both web
                    and mobile development. I&apos;m currently working on the clinician portal and mobile app at our
                    respiratory health startup. I have a Computer Programming Certificate from NC State after earning a
                    BS in Human Biology before transitioning my career to computer science. The main technologies
                    I&apos;ve used are Python (Django), Javascript (React), Dart (Flutter), HTML, and CSS.
                  </p>
                  <p className="text-left">
                    I believe my strengths are my versatility (from wearing many hats at our startup), communication
                    skills, and eagerness to learn more about the field. In my spare time, I&apos;ve also completed many
                    personal projects. Some of my favorites are a Flutter app for my wedding trip (including Bingo, a
                    quiz, and more), photography and drone websites for friends, a redesign of the website for Piedmont
                    Legacy Trails, an interactive trails map, and a Spotify Web App to show you your followed
                    artists&apos; recent releases. You can see all of those and more below.
                  </p>
                </div>
                <div className="mt-4 flex max-w-4xl self-start lg:px-16">
                  <a
                    href="./img/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto rounded-full bg-jo-light px-6 py-3 text-center text-zinc-200 hover:bg-jo-light/90 focus:outline-none focus:outline-jo-light focus:ring-2 focus:ring-zinc-200 dark:bg-jo-medium dark:hover:bg-jo-medium/80 dark:focus:ring-zinc-200"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div className="mx-auto mb-0 mt-8 flex w-3/4 items-center sm:w-1/2 lg:my-4 lg:w-1/4">
                <img src="./img/jason.jpg" alt="Jason O'Dell" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="container mx-auto mb-24 mt-12 p-4">
        <h2 className="mb-8 text-center text-4xl">Skills</h2>
        <div className="grid grid-cols-1 gap-4 text-zinc-200 xs:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Frontend"
            skills={['HTML | HTMX', 'CSS | Tailwind', 'Javascript | React', 'Dart | Flutter']}
          />
          <SkillCard title="Backend" skills={['Python | Django', 'Node.js | Express', 'PostgreSQL']} />
          <SkillCard title="Other" skills={['Git | GitHub', 'WordPress', 'Webflow', 'MapBox']} />
        </div>
      </section>

      <section id="projects" className="container mx-auto my-24 p-4">
        <h2 className="mb-8 text-center text-4xl">Projects</h2>
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
            title="Boone UAS"
            img="./img/booneuas_website.png"
            description="Website for Drone imaging business."
            technologies={['React.js', 'Next.js']}
            website="https://www.booneuasdrones.com"
            dialogId="booneuas-dialog"
            coverImg="./img/booneuas_card.png"
            coverAlt="Boone UAS"
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
            title="Wedding App"
            img="./img/wedding_app.mp4"
            description="Flutter app for my wedding trip with Bingo, Quiz, and more."
            technologies={['Dart', 'Flutter']}
            website=""
            dialogId="wedding-dialog"
            coverImg="./img/wedding_app_card.png"
            coverAlt="Wedding App"
            isVideo={true}
            isPortrait={true}
          />
          <ProjectCard
            title="Piedmont Legacy Trails Map"
            img="./img/plt_map.png"
            description="Interactive map of trails in the Piedmont region of North Carolina."
            technologies={['Javascript', 'MapBox']}
            website="https://jeodell.github.io/PiedmontLegacyTrailsMap/"
            dialogId="plt-map-dialog"
            coverImg="./img/plt_map_card.png"
            coverAlt="Piedmont Legacy Trails Map"
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
        </div>
      </section>

      <section id="contact" className="bg-jo-light py-10 text-zinc-200 dark:bg-jo-medium">
        <Footer />
      </section>
    </main>
  )
}
