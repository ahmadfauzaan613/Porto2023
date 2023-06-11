import React, { useContext } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Logo from '../assets/img/night.png'
import { ThemeContext } from './ThemeContext'
function Splashscreen() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={darkMode ? 'bg-slate-900 h-screen' : 'bg-white h-screen'}>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <img src={Logo} alt="Gambar" className="mx-auto " />
          <div className="ml-[5rem]">
            <ThreeDots height="80" width="80" radius="9" color="#FFD369" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splashscreen
