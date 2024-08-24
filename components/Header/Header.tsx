"use client"

import React, { useEffect, useState } from 'react'
import Drawer from "./DiagonalDrawer"

const Header = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const openDrawer = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
                <Drawer
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            </div>
            <header className={`${isScrolled ? "headerShow" : ""} w-full fixed top-0 z-50 transition-all duration-500 `}
                style={{
                    backgroundColor: isScrolled ? "#fff" : "transparent",
                    boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : ""
                }}
            >
                <div className="relative">
                    <div
                        onClick={openDrawer}
                        className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl"
                    >
                        <div className="relative w-7 lg:2-10 h-7 lg:h-7 flex justify-center items-center">
                            <img src="/drawer.png" alt="drawer item" className='scale-125' />
                        </div>
                    </div>
                </div>

                <nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto '>
                    <ul className='flex font-recoletaBlack flex-row items-center h-24'>
                        <li className='group text-2xl relative font-bold mr-20 '>
                            {selectedIndex === 0 ? (
                                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            ) : (
                                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            )}
                            <a
                                href="/#home"
                                className={`menu-item ${selectedIndex === 0 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                                onClick={() => setSelectedIndex(0)}
                            >
                                Início
                            </a>
                        </li>
                        <li className='group text-2xl relative font-bold mr-20 '>
                            {selectedIndex === 1 ? (
                                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            ) : (
                                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            )}
                            <a
                                href="/#projects"
                                className={`menu-item ${selectedIndex === 1 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                                onClick={() => setSelectedIndex(1)}
                            >
                                Portfólio
                            </a>
                        </li>
                        <li className='group text-2xl relative font-bold mr-20 '>
                            {selectedIndex === 2 ? (
                                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            ) : (
                                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            )}
                            <a
                                href="/#about"
                                className={`menu-item ${selectedIndex === 2 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                                onClick={() => setSelectedIndex(2)}
                            >
                                Sobre mim
                            </a>
                        </li>
                        <li className='group text-2xl relative font-bold mr-20 '>
                            {selectedIndex === 3 ? (
                                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            ) : (
                                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100" />
                            )}
                            <a
                                href="/#contact"
                                className={`menu-item ${selectedIndex === 3 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                                onClick={() => setSelectedIndex(3)}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header