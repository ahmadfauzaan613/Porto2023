import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import resume from '../assets/img/Ahmad Fauzan-resume.pdf'
import porto from '../assets/img/Portofolio Front End - PDF.pdf'
import ReactWhatsapp from 'react-whatsapp'
import night from '../assets/img/night.png'
import email from '../assets/img/email.png'
import whatsapp from '../assets/img/whatsapp.png'
import linkedin from '../assets/img/linkedin.png'
import emailYellow from '../assets/img/emailYellow.png'
import whatsappYellow from '../assets/img/whatsappYellow.png'
import mailYellow from '../assets/img/linkedinYellow.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Mailto({ email, subject, body, ...props }) {
  return <a href={`mailto:${email}`}>{props.children}</a>
}

function HomeAbout() {
  const { darkMode } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="xxl:flex xxl:items-center xl:flex xl:items-center lg:flex lg:items-center xs:grid sm:grid md:grid xxl:justify-around xl:justify-around lg:justify-around  xxl:px-[20px] xxl:mt-[7%] xl:px-[20px] xl:mt-[7%] lg:px-[20px] lg:mt-[7%]">
      <div className="xxl:flex-col xs:text-center sm:text-center md:text-center xxl:text-left xl:text-left">
        <p className={`${darkMode ? 'text-white' : 'text-[#0f172a]'}  font-[700] xxl:text-[46px] xl:text-[46px]  lg:text-[32px] xs:text-[24px] sm:text-[24px] md:text-[28px]`}>Hai,</p>
        <p className={`${darkMode ? 'text-white' : 'text-[#0f172a]'} font-[700] xxl:text-[46px] xl:text-[46px]  lg:text-[32px] xs:text-[24px] sm:text-[24px] md:text-[28px]`}>
          I'm <span className="text-[#FFD369] font-[700] xxl:text-[46px] xl:text-[46px]  lg:text-[32px] xs:text-[24px] sm:text-[24px] md:text-[28px]">Ahmad Fauzan</span>
        </p>
        <p className={`${darkMode ? 'text-white' : 'text-[#0f172a]'} font-[700] xxl:text-[46px] xl:text-[46px]  lg:text-[32px] xs:text-[24px] sm:text-[24px] md:text-[28px]`}>Front End Developer</p>

        <div className="xxl:flex xxl:items-center xl:flex xl:items-center lg:flex lg:items-center xs:grid sm:grid md:grid xxl:gap-x-10 xl:gap-x-10 lg:gap-x-10 xs:mt-[10px] sm:mt-[10px] md:mt-[10px] xxl:mt-[10px] xl:mt-[10px] lg:mt-[10px]">
          <div ref={dropdownRef} className="xs:mx-auto sm:mx-auto xs:mt-4 sm:mt-4  md:mx-auto md:mt-4 ">
            <button
              className={`${
                darkMode ? ' text-[#0f172a] border-0 bg-[#FFD369] ' : ' bg-[#0f172a] border-0 text-white'
              } flex items-center justify-between outline-none font-[700] border xxl:w-[9vw] xl:w-[11.5vw] xs:w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[17vw] xxl:px-5 xxl:py-3 xl:px-5 xl:py-2 lg:px-5 lg:py-2 xs:px-3 xs:py-2 sm:px-3 sm:py-2 md:px-3 md:py-2 ${
                !isOpen ? 'rounded-[5px]' : 'rounded-t-[5px]'
              }`}
              onClick={handleDropdownToggle}
            >
              Download {!isOpen ? <span class="material-symbols-outlined">expand_more</span> : <span class="material-symbols-outlined">expand_less</span>}
            </button>
            {isOpen && (
              <div className={`${!darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} xxl:absolute  xl:absolute  xxl:w-[9vw] xl:w-[11.5vw] xs:w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[17vw] lg:absolute rounded-b-[4px]`}>
                <div className={` ${darkMode ? 'border-[#FFD369] bg-white hover:bg-[#FFD369] ' : 'border-[#0f172a] hover:bg-[#0f172a] hover:text-white'} p-2 hover:font-bold border-b cursor-pointer  `}>
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                    Resume <span class="material-symbols-outlined">description</span>
                  </a>
                </div>
                <div className={` ${darkMode ? 'border-[#FFD369] bg-white hover:bg-[#FFD369] ' : 'border-[#0f172a] hover:bg-[#0f172a] hover:text-white'} p-2 hover:font-bold cursor-pointer  `}>
                  <a href={porto} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                    Portfolio <span class="material-symbols-outlined">draft</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {darkMode ? (
            <div className="flex items-center xs:justify-center xs:mt-[10%]  xs:mb-[10%] sm:justify-center sm:mt-[30px] md:justify-center md:mt-[30px] xxl:mt-0 gap-x-10">
              <Mailto email="ahmadfauzaan613@gmail.com">
                <img src={emailYellow} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </Mailto>
              <ReactWhatsapp number="+6288210062747" message="Hello ">
                <img src={whatsappYellow} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </ReactWhatsapp>
              <a href="https://www.linkedin.com/in/ahmadfauzaan613/" target="_blank" rel="noopener noreferrer">
                <img onv src={mailYellow} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </a>
            </div>
          ) : (
            <div className="flex items-center xs:justify-center xs:mt-[20px] sm:justify-center sm:mt-[20px] md:justify-center md:mt-[20px] xxl:mt-0 gap-x-10">
              <Mailto email="ahmadfauzaan613@gmail.com">
                <img src={email} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </Mailto>
              <ReactWhatsapp number="+6288210062747" message="Hello ">
                <img src={whatsapp} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </ReactWhatsapp>
              <a href="https://www.linkedin.com/in/ahmadfauzaan613/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" className="xxl:w-full xs:w-[25px] sm:w-[20px]" />
              </a>
            </div>
          )}
        </div>
      </div>
      <LazyLoadImage effect="blur" className="md:w-[20%] md:mx-auto md:mt-[40px] sm:w-[20%] sm:mx-auto sm:mt-[40px]   xs:w-[30%] xs:mx-auto xs:mt-[20px]  xxl:w-full xxl:mt-0 lg:w-full lg:mt-0" src={night} />
    </div>
  )
}

export default HomeAbout
