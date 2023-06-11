import React, { useContext, useState, useEffect } from 'react'
import sun from '../assets/img/sun.png'
import moon from '../assets/img/moon.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ThemeContext } from '../components/ThemeContext'
import Splashscreen from '../components/Splashscreen'
import HomeAbout from '../components/HomeAbout'
import About from '../components/About'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Sertifikat from '../components/Sertifikat'
import LogoMalam from '../assets/img/LogoDark.png'
import LogoPagi from '../assets/img/LogoWhite.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Home() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [toggleState, setToggleState] = useState(1)

  useEffect(() => {
    const storedState = localStorage.getItem('toggleState')
    if (storedState) {
      setToggleState(Number(storedState))
    }
  }, [])

  const buttonToggle = (index) => {
    setToggleState(index)
    localStorage.setItem('toggleState', index)
  }

  const [showHome, setShowHome] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHome(true)
    }, 850)

    return () => clearTimeout(timeout)
  }, [])

  const [menu, setMenu] = useState(false)
  const buttonMenu = () => {
    setMenu(!menu)
  }

  return (
    // Navbar
    <>
      {showHome ? (
        <>
          <div className={`${darkMode ? ' bg-slate-900' : 'bg-white'} transition-all min-h-screen h-screen`}>
            {/* MENU NAVIGASI */}
            <div className=" lg:py-[30px] lg:px-[60px]  xxl:py-[30px] xxl:px-[60px] xl:py-[30px] xl:px-[60px] xs:py-[15px] sm:py-[15px]">
              <div className="flex items-center justify-between xs:px-[1rem] md:px-4 md:pt-3 sm:px-[1rem]">
                {/* <p className={`${darkMode ? ' text-[#FFD369]' : 'text-[#0f172a]'} font-[700] xxl:text-[32px] xl:text-[32px] lg:text-[28px] xs:text-[24px] xs:text-center sm:text-[24px] sm:text-center `}>Ahmad Fauzan</p> */}
                {darkMode ? <LazyLoadImage effect="blur" className="xxl:w-[9vw] xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[18vw] xl:w-[10vw]" src={LogoMalam} /> : <LazyLoadImage effect="blur" className="xxl:w-[9vw] xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[18vw] xl:w-[10vw]" src={LogoPagi} />}
                <div className="xxl:hidden md:hidden lg:hidden xl:hidden">
                  {!menu ? (
                    <span onClick={buttonMenu} className={`${darkMode ? ' text-[#FFD369]' : 'text-[#0f172a]'} material-symbols-outlined cursor-pointer`}>
                      menu
                    </span>
                  ) : (
                    <span onClick={buttonMenu} className={`${darkMode ? ' text-[#FFD369]' : 'text-[#0f172a]'} material-symbols-outlined cursor-pointer`}>
                      close
                    </span>
                  )}
                </div>
                <div className="xl:flex xl:items-center xl:gap-x-10 lg:flex lg:items-center lg:gap-x-10 xxl:flex xxl:items-center xxl:gap-x-10 md:flex md:items-center md:gap-x-10 xxl:visible xs:hidden sm:hidden">
                  <div>
                    <button onClick={() => buttonToggle(1)} className={toggleState === 1 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} cursor-pointer font-[700]` : `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} hover:font-[700] font-[400] cursor-pointer`}>
                      Home
                      <div className={toggleState === 1 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} h-1` : ''}></div>
                    </button>
                  </div>
                  <p onClick={() => buttonToggle(2)} className={toggleState === 2 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} cursor-pointer font-[700]` : `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} hover:font-[700] font-[400] cursor-pointer`}>
                    About
                    <div className={toggleState === 2 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} h-1` : ''}></div>
                  </p>
                  <p onClick={() => buttonToggle(3)} className={toggleState === 3 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} cursor-pointer font-[700]` : `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} hover:font-[700] font-[400] cursor-pointer`}>
                    Experience
                    <div className={toggleState === 3 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} h-1` : ''}></div>
                  </p>
                  <p onClick={() => buttonToggle(4)} className={toggleState === 4 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} cursor-pointer font-[700]` : `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} hover:font-[700] font-[400] cursor-pointer`}>
                    Portofolio
                    <div className={toggleState === 4 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} h-1` : ''}></div>
                  </p>
                  <p onClick={() => buttonToggle(5)} className={toggleState === 5 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} cursor-pointer font-[700]` : `${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a]'} hover:font-[700] font-[400] cursor-pointer`}>
                    Certificate
                    <div className={toggleState === 5 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} h-1` : ''}></div>
                  </p>
                </div>
                <div className="xs:hidden sm:hidden md:hidden">
                  {darkMode ? (
                    <>
                      <button onClick={toggleDarkMode} className="p-2 bg-[#FFD369] rounded-full">
                        <img src={sun} alt="" className="w-[24px]" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={toggleDarkMode} className="p-2 rounded-full bg-[#0f172a]">
                        <img src={moon} alt="" className="w-[24px]" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              {menu && (
                <div className={`${darkMode ? 'bg-white ' : ' bg-slate-900'} py-[0.7rem] px-[1rem] xs:absolute sm:absolute z-[99] w-full xxl:hidden xl:hidden lg:hidden md:hidden`}>
                  <div className="xs:grid xs:gap-y-2">
                    <div>
                      <button onClick={() => buttonToggle(1)} className={toggleState === 1 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#fff]'}  cursor-pointer font-[700] ` : `${darkMode ? 'text-[#FFD369]' : 'text-[#fff] '} hover:font-[700] font-[400] cursor-pointer`}>
                        Home
                        <div className={toggleState === 1 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a] '} h-1 xs:hidden sm:hidden` : ''}></div>
                      </button>
                    </div>
                    <p onClick={() => buttonToggle(2)} className={toggleState === 2 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#fff]'}  cursor-pointer font-[700] ` : `${darkMode ? 'text-[#FFD369]' : 'text-[#fff] '} hover:font-[700] font-[400] cursor-pointer`}>
                      About
                      <div className={toggleState === 2 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a] '} h-1 xs:hidden sm:hidden` : ''}></div>
                    </p>
                    <p onClick={() => buttonToggle(3)} className={toggleState === 3 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#fff]'}  cursor-pointer font-[700] ` : `${darkMode ? 'text-[#FFD369]' : 'text-[#fff] '} hover:font-[700] font-[400] cursor-pointer`}>
                      Experience
                      <div className={toggleState === 3 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a] '} h-1 xs:hidden sm:hidden` : ''}></div>
                    </p>
                    <p onClick={() => buttonToggle(4)} className={toggleState === 4 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#fff]'}  cursor-pointer font-[700] ` : `${darkMode ? 'text-[#FFD369]' : 'text-[#fff] '} hover:font-[700] font-[400] cursor-pointer`}>
                      Portofolio
                      <div className={toggleState === 4 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a] '} h-1 xs:hidden sm:hidden` : ''}></div>
                    </p>
                    <p onClick={() => buttonToggle(5)} className={toggleState === 5 ? `${darkMode ? 'text-[#FFD369]' : 'text-[#fff]'}  cursor-pointer font-[700] ` : `${darkMode ? 'text-[#FFD369]' : 'text-[#fff] '} hover:font-[700] font-[400] cursor-pointer`}>
                      Certificate
                      <div className={toggleState === 5 ? `${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a] '} h-1 xs:hidden sm:hidden` : ''}></div>
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* MENU NAVIGASI */}
            <div className="py-[30px] transition-all w-full">
              {toggleState === 1 && <HomeAbout />}
              {toggleState === 2 && <About />}
              {toggleState === 3 && <Experience />}
              {toggleState === 4 && (
                <div className=" overflow-y-scroll xxl:h-[85vh] xs:h-[80vh] sm:h-[78vh] md:h-[83vh] lg:h-[83vh xl:h-[83vh]">
                  <Portfolio />
                </div>
              )}
              {toggleState === 5 && <Sertifikat />}
            </div>
            {/* BUTTON DAKMODE */}
            <div className={`${toggleState === 3 ? '' : ''} xs:absolute xxl:hidden lg:hidden xl:hidden xs:bottom-3 xs:right-3 sm:absolute sm:bottom-4 sm:right-4 md:absolute md:bottom-4 md:right-4`}>
              {darkMode ? (
                <>
                  <button onClick={toggleDarkMode} className="p-2 bg-[#FFD369] rounded-full">
                    <img src={sun} alt="" className="w-[24px]" />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={toggleDarkMode} className="p-2 rounded-full bg-[#0f172a]">
                    <img src={moon} alt="" className="w-[24px]" />
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <Splashscreen />
      )}
    </>
    // Navbar
  )
}

export default Home
