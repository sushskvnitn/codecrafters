import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <img className="h-8 w-auto" data-aos="fade-up" data-aos-delay="400" src="https://i.postimg.cc/2ynL0yxz/Modern-Coding-Technology-Logo.png" style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '5px',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                marginTop: '50px'
              }} alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li> */}
              <li>
                <Link href="/blog" className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
