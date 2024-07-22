import { useEffect, useRef } from 'react'

interface ProjectCardDialogProps {
  img: string
  title: string
  description: string
  technologies: string[]
  website: string
  dialogId: string
  isVideo?: boolean
  isPortrait?: boolean
}

export default function ProjectCardDialog(props: ProjectCardDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleCloseDialog() {
    const dialogs = document.querySelectorAll('dialog')
    dialogs.forEach((dialog) => dialog.close())
  }

  useEffect(() => {
    function checkIfClickedOutside(e: MouseEvent) {
      const dialog = dialogRef.current
      if (dialog && e.target === dialog) {
        handleCloseDialog()
      }
    }

    const dialog = dialogRef.current
    if (dialog) {
      window.addEventListener('click', (e) => {
        checkIfClickedOutside(e)
      })
    }
    return () => {
      if (dialog) {
        window.removeEventListener('click', (e) => {
          checkIfClickedOutside(e)
        })
      }
    }
  }, [])

  return (
    <dialog
      className="mx-auto my-auto w-2/3 bg-white backdrop-blur-lg"
      id={props.dialogId}
      aria-hidden="true"
      ref={dialogRef}
    >
      {props.isPortrait ? (
        <div className="flex flex-row">
          <div className="flex justify-center pb-4">
            {props.isVideo ? (
              <video src={props.img} className="max-h-96" controls autoPlay muted />
            ) : (
              <img src={props.img} width="100%" height="100%" />
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-center">{props.description}</p>
            <p className="text-center">Technologies Used: {props.technologies.join(' | ')}</p>
            <a href={props.website} target="_blank" rel="noopener noreferrer" className="">
              View Website
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-center pb-4">
            {props.isVideo ? (
              <video src={props.img} className="max-h-96" controls autoPlay muted />
            ) : (
              <img src={props.img} width="100%" height="100%" />
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-center">{props.description}</p>
            <p className="text-center">Technologies Used: {props.technologies.join(' | ')}</p>
            <a href={props.website} target="_blank" rel="noopener noreferrer" className="">
              View Website
            </a>
          </div>
        </div>
      )}
    </dialog>
  )
}
