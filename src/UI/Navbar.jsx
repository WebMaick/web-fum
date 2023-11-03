import { useState } from "react"
import logo from "../assets/images/logoFum.png"
import { Link } from "react-router-dom"
import { BtnToggle } from "../components/ui/BtnToggle"

export const Navbar = () => {
  const [isActive, setIsActive] = useState("cursos")
  const [btnToggleMenu, setBtnToggleMenu] = useState(false)

  // Cambia el estado de toggle
  const handleBtnMenu = () => {
    setBtnToggleMenu((btn) => !btn)
  }

  const handlelist = (menu) => {
    setIsActive(menu)
  }

  return (
    <nav className="bg-zinc-100 h-[65px] w-full font-playfair fixed z-50">
      <div className="flex items-center justify-between px-2 md:px-10">
        <Link to={"/"} className="flex items-center h-[65px]">
          <img src={logo} alt="fum-logo" className="w-[40px] h-[50px]" />
          <div className="ml-2">
            <h2 className="text-xl font-extrabold ">F.U.M</h2>
            <small className="text-sm font-semibold">
              Frente de Unidad del Magisterio
            </small>
          </div>
        </Link>

        {/* flex-row items-center hidden md:inline-flex gap-x-2 */}
        <ul
          className={`-translate-x-full absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-xl text-white bg-zinc-700 opacity-90 gap-y-5 md:translate-x-0 md:relative md:flex-row md:h-[65px] md:gap-x-2 md:gap-y-0 md:bg-transparent md:text-zinc-900 md:w-fit ${
            btnToggleMenu
              ? "-translate-x-0 transition-[transform] ease-in-out duration-300"
              : "transition-[transform] ease-in-out duration-300"
          }`}
        >
          <li
            className={`w-full text-center md:w-fit ${
              isActive === "cursos" ? "text-red-600" : ""
            }`}
            onClick={() => {
              handlelist("cursos"), handleBtnMenu
            }}
          >
            <a href="#cursos" className="font-bold">
              Cursos
            </a>
          </li>
          <li
            className={`w-full text-center md:w-fit ${
              isActive === "nosotros" ? "text-red-600" : ""
            }`}
            onClick={() => {
              handlelist("nosotros"), handleBtnMenu
            }}
          >
            <a href="#nosotros" className="font-bold">
              Nosotros
            </a>
          </li>
          <li
            className={`w-full text-center md:w-fit ${
              isActive === "contactos" ? "text-red-600" : ""
            }`}
            onClick={() => {
              handlelist("contactos"), handleBtnMenu
            }}
          >
            <a href="#contactos" className="font-bold">
              Contactos
            </a>
          </li>
          <li
            className={`w-full text-center md:w-fit ${
              isActive === "ministerio" ? "text-red-600" : ""
            }`}
            onClick={() => {
              handlelist("ministerio"), handleBtnMenu
            }}
          >
            <a href="#ministerio" className="font-bold">
              Min. Educación
            </a>
          </li>
        </ul>

        <div className="block md:hidden">
          <BtnToggle
            btnToggleMenu={btnToggleMenu}
            handleBtnMenu={handleBtnMenu}
          />
        </div>
      </div>
    </nav>
  )
}
