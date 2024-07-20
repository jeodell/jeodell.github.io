import ProjectCardDialog from './ProjectCardDialog'

interface ProjectCardProps {
  title: string
  img: string
  description: string
  technologies: string[]
  website: string
  dialogId: string
  coverImg: string
  coverAlt: string
  isVideo?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {
  function handleOpenDialog(id: string) {
    console.log('More Details for ' + id)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    else console.error('Dialog not found')
  }

  return (
    <div className="group relative">
      <img src={props.coverImg} className="w-full rounded-lg shadow-md" alt={props.coverAlt} />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          className="rounded-full bg-blue-500 px-6 py-2 text-zinc-200"
          onClick={() => handleOpenDialog(props.dialogId)}
        >
          More Details
        </button>
        <ProjectCardDialog
          img={props.img}
          title={props.title}
          description={props.description}
          technologies={props.technologies}
          website={props.website}
          dialogId={props.dialogId}
          isVideo={props.isVideo}
        />
      </div>
    </div>
  )
}
