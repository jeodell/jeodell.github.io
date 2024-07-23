import {
  faCss3,
  faDeskpro,
  faFlutter,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faWebflow,
  faWordpress,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SkillCardProps {
  title: string
  skills: string[]
}

export default function SkillCard(props: SkillCardProps) {
  const iconMap: { [key: string]: IconDefinition } = {
    'HTML | HTMX': faHtml5,
    'CSS | Tailwind': faCss3,
    'Javascript | React': faJs,
    'Dart | Flutter': faFlutter,
    'Python | Django': faPython,
    'Node.js | Express': faNodeJs,
    PostgreSQL: faDeskpro,
    'Git | GitHub': faGithub,
    WordPress: faWordpress,
    Webflow: faWebflow,
    MapBox: faMap,
  }

  return (
    <div className="rounded-lg bg-jo-light p-4 shadow-md dark:bg-jo-medium">
      <h3 className="mb-4 mt-2 text-center text-xl font-semibold">{props.title}</h3>
      <ul className="mb-6 space-y-1 px-6">
        {props.skills.map((skill) => (
          <li key={skill}>
            <span className="flex items-center">
              <FontAwesomeIcon icon={iconMap[skill]} className="mr-2" />
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
