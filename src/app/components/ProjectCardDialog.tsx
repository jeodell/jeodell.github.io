import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface ProjectCardDialogProps {
  img: string
  alt: string
  title: string
  description: string
  technologies: string[]
  website: string
  dialogId: string
  isVideo?: boolean
  isPortrait?: boolean
  isCodeOnly?: boolean
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
      className="mx-auto my-auto w-2/3 rounded-lg bg-white p-8 backdrop:bg-jo-dark/50 backdrop:backdrop-blur-sm dark:bg-jo-dark"
      id={props.dialogId}
      aria-hidden="true"
      ref={dialogRef}
    >
      {props.isPortrait ? (
        <div className="flex flex-col justify-center md:flex-row md:space-x-16">
          <div className="mb-8 flex justify-center">
            {props.isVideo ? (
              <video src={props.img} className="max-h-96" controls autoPlay muted />
            ) : (
              <Image className="w-full" src={props.img} alt={props.alt} width={800} height={400} />
            )}
          </div>
          <div className="flex flex-col items-center justify-center dark:text-zinc-200">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="mb-4 text-center font-light">{props.description}</p>
            <p className="text-center">Technologies Used:</p>
            <p className="mb-6 text-center font-light">{props.technologies.join(' | ')}</p>
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto rounded-full bg-jo-light px-6 py-2 text-center text-zinc-200 hover:bg-jo-light/90 focus:outline-none focus:outline-jo-light focus:ring-2 focus:ring-zinc-200 dark:bg-jo-medium dark:hover:bg-jo-medium/80 dark:focus:ring-zinc-200"
            >
              {props.isCodeOnly ? 'View Code' : 'View Website'}
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="mb-8 flex justify-center">
            {props.isVideo ? (
              <video src={props.img} className="max-h-96" controls autoPlay muted />
            ) : (
              <Image className="w-full" src={props.img} alt={props.alt} width={800} height={400} />
            )}
          </div>
          <div className="flex flex-col items-center justify-center dark:text-zinc-200">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="mb-4 text-center font-light">{props.description}</p>
            <p className="text-center">Technologies Used:</p>
            <p className="mb-6 text-center font-light">{props.technologies.join(' | ')}</p>
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto rounded-full bg-jo-light px-6 py-2 text-center text-zinc-200 hover:bg-jo-light/90 focus:outline-none focus:outline-jo-light focus:ring-2 focus:ring-zinc-200 dark:bg-jo-medium dark:hover:bg-jo-medium/80 dark:focus:ring-zinc-200"
            >
              {props.isCodeOnly ? 'View Code' : 'View Website'}
            </a>
          </div>
        </div>
      )}
    </dialog>
  )
}
