export default function InProgressBanner() {
  return (
    <div className="bg-yellow-500">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="ml-3 truncate font-medium text-zinc-50">
              <span className="md:hidden">In progress</span>
              <span className="hidden md:inline">This site is being redesigned so please excuse the ugly parts</span>
            </p>
          </div>
          <div className="order-2 mt-2 sm:order-3 sm:mt-0">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-md border border-transparent bg-zinc-50 px-4 py-2 text-sm font-medium text-yellow-500 shadow-sm hover:bg-yellow-50"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
