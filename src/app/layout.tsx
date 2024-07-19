import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'
import './globals.css'
import ThemeToggle from './theme'

const cormorant = Cormorant({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jason O'Dell",
  description: "Jason O'Dell, a North Carolina based web developer.",
  openGraph: {
    type: 'website',
    url: 'https://jeodell.github.io',
    title: "Jason O'Dell",
    description: "Jason O'Dell, a North Carolina based web developer.",
    siteName: "Jason O'Dell GitHub",
    images: [{ url: './img/jason.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jeodell',
    creator: '@jeodell',
    images: [{ url: './img/jason.jpg' }],
  },
}

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(cormorant.className, 'text-gray-700 dark:text-zinc-200')}>
        <Disclosure as="nav" className="bg-gray-50 dark:bg-gray-700">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 rounded-md group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:bg-gray-700 dark:hover:text-zinc-50">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className="px-3 py-2 font-medium rounded-md text-md bg-gray-50 hover:underline dark:bg-gray-700 dark:hover:text-zinc-50"
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="block px-3 py-2 text-base font-medium rounded-md text-gray-70 bg-gray-50 hover:underline dark:bg-gray-700"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
        <div className="bg-yellow-500">
          <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <p className="ml-3 font-medium truncate text-zinc-50">
                  <span className="md:hidden">In progress</span>
                  <span className="hidden md:inline">
                    This site is being redesigned so please excuse the ugly parts for now.
                  </span>
                </p>
              </div>
              <div className="order-2 mt-2 sm:order-3 sm:mt-0">
                <a
                  href="#contact"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-yellow-500 border border-transparent rounded-md shadow-sm bg-gray-50 hover:bg-yellow-50"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
