import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Navbar() {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  const handleLink = event => {
    event.preventDefault()
    setShowMenu(false)
    router.push(event.currentTarget.href)
  }

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-white border-b shadow-lg">
      <div className="items-center flex-shrink-0 hidden mr-6 rounded-full lg:flex">
        <Image src="/img/logo.jpeg" alt="logo" width={70} height={70} />
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-burntUmber border-burntUmber focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? 'flex' : 'hidden'
        } flex-grow w-full lg:flex lg:items-center lg:w-auto lg:flex-row flex-col font-semi text-lg`}
      >
        <a
          href="/"
          onClick={handleLink}
          className={`block navbar__button mt-2${(router.pathname === '/' && ' selected') || ''}`}
        >
          Home
        </a>
        <a
          href="/pilots"
          onClick={handleLink}
          className={`block navbar__button mt-2${(router.pathname === '/pilots' && ' selected') || ''}`}
        >
          Pilots
        </a>
        <a
          href="/about"
          onClick={handleLink}
          className={`block navbar__button mt-2${(router.pathname === '/about' && ' selected') || ''}`}
        >
          About
        </a>
      </div>
    </nav>
  )
}

export default Navbar
