import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Experience() {
  const { darkMode } = useContext(ThemeContext)
  const Data = [
    {
      company: 'Bumi Amartha Teknologi Mandiri',
      posision: 'Front End Developer',
      deskripsi: 'I work as a Frontend Developer at AMARTEK, a client company located in CIMB NIAGA. I am working on their internal project using React Typescript',
      location: 'Jakarta',
      Time: 'May 2023 - Present',
    },
    { company: 'RudexTech', posision: 'Front End Developer', deskripsi: 'Working on a website using the ReactJS framework and Tailwind css', location: 'Jakarta', Time: 'Des 2021 - April 2023' },
    { company: 'PT. Creative Visions Indonesia', posision: 'Front End Developer', deskripsi: 'contract based on project working on company profile website using ReactJS', location: 'Jakarta', Time: 'Agust 2021 - Nov 2021' },
    { company: 'Assist.id', posision: 'Front End Developer', deskripsi: 'project-based contracts working on websites using ReactJS', location: 'Jakarta', Time: 'Apr 2021 - July 2021' },
    {
      company: 'DLI Edu Venture',
      posision: 'Back End Developer',
      deskripsi: 'Intern project doing CRUD and admin pages using codeIginter3',
      location: 'Malang',
      Time: 'Jun 2020 - Sept 2020',
    },
  ]
  return (
    <div className="xxl:mt-[5rem] xs:overflow-y-scroll xs:h-[80vh] sm:overflow-y-scroll sm:h-[80vh]">
      <div className="grid xxl:grid-cols-3 xxl:gap-[2rem] xxl:mx-[10%] xs:mx-[3%] xs:gap-y-3 xs:py-3 sm:mx-[3%] sm:gap-y-3 sm:py-3 md:grid-cols-2 md:mx-[3%] md:gap-3 md:mt-[2rem] lg:grid-cols-2 lg:mx-[3%] lg:gap-3 lg:mt-[2rem] xl:grid-cols-3 xl:mx-[5%] xl:gap-[1rem] xl:mt-[2rem]">
        {Data.map((item) => (
          <div className={`${darkMode ? 'bg-[#FFD369]' : 'bg-[#0f172a]'} p-3 rounded-[8px] w-full xxl:h-[21vh]`} style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <p className={`${darkMode ? 'text-[#0f172a] ' : 'text-white'} font-[700] text-[20px]`}>{item.company}</p>
            <p className={`${darkMode ? 'text-[#0f172a] ' : 'text-white'} font-[400] text-[18px]`}>{item.posision}</p>
            <p className={`${darkMode ? 'text-[#0f172a] ' : 'text-white'} font-[400] text-[16px] py-2`}>{item.deskripsi}</p>
            <div className={`${darkMode ? 'text-[#0f172a]' : 'text-white'}  flex items-center  justify-between`}>
              <p className={`${darkMode ? 'text-[#0f172a] ' : 'text-white'} font-[700] text-[16px]`}>{item.location}</p>
              <p className={`${darkMode ? 'text-[#0f172a] ' : 'text-white'} font-[700]  text-[16px]`}>{item.Time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
