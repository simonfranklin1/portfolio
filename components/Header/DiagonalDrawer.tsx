import React from 'react'
import { usePathname } from 'next/navigation'
import "./DiagonalDrawer.css"

interface Idrawer {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedIndex: number,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

const DiagonalDrawer = ({
  isOpen,
  setIsOpen,
  selectedIndex,
  setSelectedIndex
}: Idrawer) => {
  const pathname = usePathname();

  return (
    <>
      <div className="relative">
        <div
            onClick={() => setIsOpen(false)} 
            className={`z-50 ${(pathname === "/" || pathname.includes("/projects")) ? "top-[0px]" : "top-[100px]"} cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl`}>
          <div
            className="relative w-7 lg:2-10 h-7 lg:h-7 flex justify-center items-center"
          >
            {
              isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-white cursor-pointer  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )
            }
          </div>
        </div>
      </div>

      <header className={`fixed w-full transition-all duration-500 z-40 ${(pathname === "/" || pathname.includes("/projects")) ? "top-0" : "top-[-98px]"}`}>
        <div className="relative">
          <div className="z-20 absolute transform-gpu ease-in-out duration-500 transition-all scale-100 -translate-x-none -translate-y-none opacity-100 bg-[#223740] bg-opacity-95 w-full min-h-screen flex flex-col sm:flex-row lg:flex-col items-center justify-center">
            <nav className="text-white font-recoletaBold text-center text-4xl lg:text-4xl 2xl:text-6xl uppercase">
              <ul className='flex flex-col'>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href={ pathname === "/" ? "#home" : "/"}
                      onClick={() => {
                        setSelectedIndex(0)
                        setIsOpen(false)
                      }}
                    >
                      Início
                    </a>
                    {selectedIndex === 0 ? (
                      <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      null
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#projects"
                      onClick={() => {
                        setSelectedIndex(1)
                        setIsOpen(false)
                      }}
                    >
                      Portfólio
                    </a>
                    {selectedIndex === 1 ? (
                      <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      null
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#about"
                      onClick={() => {
                        setSelectedIndex(2)
                        setIsOpen(false)
                      }}
                    >
                      Sobre mim
                    </a>
                    {selectedIndex === 2 ? (
                      <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      null
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      href="/#contact"
                      onClick={() => {
                        setSelectedIndex(3)
                        setIsOpen(false)
                      }}
                    >
                      Contato
                    </a>
                    {selectedIndex === 3 ? (
                      <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6 opacity-100 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                    ) : (
                      null
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0 opacity-0 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10" />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default DiagonalDrawer