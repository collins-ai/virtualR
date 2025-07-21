import { Link } from "react-scroll"
import { useRef, useState } from "react"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import { logo, links } from "../constants/headerConstant"

const Header = () => {
  const navbar = useRef()
  const [menuButton, setMenuButton] = useState(true)

  const toggleNavbar = () => {
    window.innerWidth < 768 && navbar.current.classList.toggle(`translate-y-[77vh]`)
    setMenuButton(!menuButton)
  }

  return (
    <header className="bg-transparent backdrop-blur-lg border border-b-white/25 flex justify-between items-center px-6 py-2 sticky top-0 w-full z-10 md:px-12 lg:px-24">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <span className="text-white text-2xl">VirtualR</span>
      </div>
      <nav className="-z-10">
        <ul ref={navbar} className="flex flex-col items-center gap-10 absolute -top-[70vh] left-0 w-screen py-16 duration-1000 bg-neutral-900 md:flex-row md:static md:w-fit md:py-0 md:bg-transparent md:gap-6 lg:gap-12">
          {links.map((link, index) => (
            <li key={index} className="text-white font-bold w-fit cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700">
              <Link to={link.path} offset={-50} onClick={toggleNavbar} smooth>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        { menuButton ? <IoIosMenu onClick={toggleNavbar} className="text-white text-4xl" /> : <IoMdClose onClick={toggleNavbar} className="text-white text-4xl" /> }
      </div>
    </header>
  )
}

export default Header
