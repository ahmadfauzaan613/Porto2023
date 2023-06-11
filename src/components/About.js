import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import top from '../assets/img/top.png'
import { ThemeContext } from './ThemeContext'

function About() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className="lg:flex lg:items-center lg:justify-between lg:mx-[6%] lg:mt-[7%] xl:flex xl:items-center xl:justify-evenly xl:px-[20px] xl:mt-[7%] xxl:flex xxl:items-center xxl:justify-evenly xxl:px-[20px] xxl:mt-[7%] xs:grid sm:grid md:grid">
      <LazyLoadImage effect="blur" src={top} className="xxl:w-full lg:w-[17vw] xs:w-[40%] xs:mx-auto xs:z-[10] sm:w-[40%] sm:mx-auto sm:z-[10] md:w-[20%] md:pt-[8%] md:mx-auto md:z-[10]" />
      <div>
        <p className={`${darkMode ? 'text-white' : 'text-[#0f172a]'}  font-[700] text-[32px] text-left pl-[20px] xxl:pl-[0px] xl:pl-[0px] lg:pl-[0px] pt-2 pb-5 `}>About Me</p>
        <p className={`${darkMode ? 'text-white' : 'text-[#0f172a]'} font-[400] text-[18px] xs:px-[20px] sm:px-[20px] md:px-[20px] pt-2 pb-5 `}>
          I am a Front End Developer with over 2 years of experience. <br className="xs:hidden sm:hidden md:hidden " /> I am proficient in using ReactJS as the main framework for web development. <br className="xxl:hidden xl:hidden md:hidden xs:hidden" /> Additionally,
          <br className="xs:hidden sm:hidden md:hidden lg:hidden " /> I have expertise in using TailwindCSS and Bootstrap for website <br className="xxl:hidden xl:hidden md:hidden sm:hidden xs:hidden" /> styling and appearance. <br className="xs:hidden sm:hidden md:hidden lg:hidden " /> Apart from
          focusing on frontend development,
          <br className="xxl:hidden xl:hidden md:hidden sm:hidden xs:hidden" /> I also have knowledge in user interface (UI) and <br className="xs:hidden sm:hidden md:hidden lg:hidden" /> user experience (UX) design, <br className="xxl:hidden xl:hidden md:hidden sm:hidden xs:hidden" /> and I
          frequently use software such as Figma or Adobe XD to <br className="xs:hidden sm:hidden md:hidden lg:hidden" /> create appealing
          <br className="xxl:hidden xl:hidden md:hidden sm:hidden xs:hidden" /> and responsive designs.
        </p>
      </div>
    </div>
  )
}

export default About
