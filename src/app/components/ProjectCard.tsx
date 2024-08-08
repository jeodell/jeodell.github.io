import Image from 'next/image'
import ProjectCardDialog from './ProjectCardDialog'

interface ProjectCardProps {
  title: string
  img: string
  imgAlt: string
  description: string
  technologies: string[]
  website: string
  dialogId: string
  coverImg: string
  coverAlt: string
  isVideo?: boolean
  isPortrait?: boolean
  isCodeOnly?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {
  function handleOpenDialog(id: string) {
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) {
      dialog.showModal()
      dialog.focus()
    } else console.error('Dialog not found')
  }

  return (
    <div className="group relative">
      <Image
        src={props.coverImg}
        className="w-full rounded-lg shadow-md"
        alt={props.coverAlt}
        width={500}
        height={350}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
        <button
          className="rounded-full bg-jo-light px-6 py-2 text-zinc-200 focus:outline-none focus:outline-jo-light focus:ring-2 focus:ring-zinc-200"
          onClick={() => handleOpenDialog(props.dialogId)}
        >
          More Details
        </button>
        <ProjectCardDialog
          img={props.img}
          alt={props.imgAlt}
          title={props.title}
          description={props.description}
          technologies={props.technologies}
          website={props.website}
          dialogId={props.dialogId}
          isVideo={props.isVideo}
          isPortrait={props.isPortrait}
          isCodeOnly={props.isCodeOnly}
        />
      </div>
    </div>
  )
}
