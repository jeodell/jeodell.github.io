import { EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="mb-10 text-center">
        <p className="mb-4 text-xl font-bold">Contact</p>
        <hr className="mx-auto my-4 w-24 border-t-2 border-zinc-200" />
        <p className="flex items-center justify-center">
          <HomeIcon className="mr-2 h-4 w-4" />
          North Carolina
        </p>
        <p className="flex items-center justify-center">
          <EnvelopeIcon className="mr-2 h-4 w-4" />
          jasoneodell@gmail.com
        </p>
        <p className="flex items-center justify-center">
          <PhoneIcon className="mr-2 h-4 w-4" />
          (336) 403-7837
        </p>
      </div>
      <div className="mb-10 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/jason-o-dell-43b6a564/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700"
        >
          <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a href="https://www.github.com/jeodell" target="_blank" rel="noopener noreferrer" className="text-gray-700">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
      <div className="text-center">
        <p>© {new Date().getFullYear()} Copyright: Jason O&apos;Dell</p>
      </div>
    </footer>
  )
}
