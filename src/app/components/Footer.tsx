import { EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="mb-10 text-center">
        <p className="mb-4 text-xl font-semibold">Contact</p>
        <hr className="mx-auto my-4 w-24 border-t-2 border-zinc-200" />
        <p className="flex items-center justify-center">
          <HomeIcon className="mr-2 h-4 w-4" />
          North Carolina
        </p>
        <div className="flex items-center justify-center">
          <a
            className="flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-200"
            href="mailto:jasoneodell@gmail.com"
          >
            <EnvelopeIcon className="mr-2 h-4 w-4" />
            jasoneodell@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-200"
            href="tel:+13364037837"
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            (336) 403-7837
          </a>
        </div>
      </div>
      <div className="text-center">
        <p>© {new Date().getFullYear()} Copyright Jason O&apos;Dell</p>
      </div>
    </footer>
  )
}
