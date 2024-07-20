import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../globals.css'
import ThemeToggle from '../theme'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

export default function header() {
  return (
    <>
      <Disclosure as="nav" className="bg-jo-light dark:bg-jo-dark">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:bg-gray-700 dark:hover:text-zinc-50">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className="text-md rounded-md bg-zinc-50 px-3 py-2 font-medium hover:underline dark:bg-jo-dark dark:hover:text-zinc-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className="text-gray-70 block rounded-md bg-zinc-50 px-3 py-2 text-base font-medium hover:underline dark:bg-jo-dark"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div className="bg-yellow-500">
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <p className="ml-3 truncate font-medium text-zinc-50">
                <span className="md:hidden">In progress</span>
                <span className="hidden md:inline">
                  This site is being redesigned so please excuse the ugly parts for now.
                </span>
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
    </>
  )
}
