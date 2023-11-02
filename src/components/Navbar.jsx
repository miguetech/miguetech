import { Fragment, useState } from 'react'
import logo from '../assets/logo.png'
import { motion } from "framer-motion"



function Navbar() {

  const [stateMenu, setStateMenu] = useState(false)

  const openMenu = () => {
    setStateMenu(!stateMenu)
    console.log(stateMenu)
  }

  return (
    <Fragment>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6  md:space-x-10">

            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt=""></img>
              </a>
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <button onClick={openMenu} type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-50" aria-expanded="false">
                <span className="sr-only">Open menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <nav className='hidden space-x-10  md:flex'    >
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Conoceme</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Habilidades</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Proyectos</a>
              <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                  <span>Contacto</span>
                </button>

              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Menu movil */}
      <motion.nav animate={stateMenu ? {opacity: 1} : {opacity: 0}} transition={{ ease: "easeOut", duration: 0.3 }} className={` ${stateMenu ? "" : "hidden"}   grid absolute  flex-col  gap-4 py-10 w-full bg-white left-0  z-50 `}>
        <a onClick={openMenu} href="#" className=" z-50 text-center text-base font-medium text-gray-500 hover:text-gray-900">Conoceme</a>
        <a onClick={openMenu} href="#" className=" z-50 text-center text-base font-medium text-gray-500 hover:text-gray-900">Habilidades</a>
        <a onClick={openMenu} href="#" className=" z-50 text-center text-base font-medium text-gray-500 hover:text-gray-900">Proyectos</a>
        <a onClick={openMenu} href="#" className=" z-50 text-center text-base font-medium text-gray-500 hover:text-gray-900">Contacto</a>
      </motion.nav>
      {/* Closed exteranl clic */}
      <button onClick={openMenu} className={`${stateMenu ? "" : "hidden"} w-full h-full fixed z-40 ease-in-out duration-500`} ></button>
    </Fragment>
  )
}

export default Navbar;
