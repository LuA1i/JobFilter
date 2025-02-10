import React from 'react'
import HeaderImg from '../images/bg-header-desktop.svg'

const Header = () => {
  return (
    <div className="w-screen bg-[hsl(180,29%,50%)] h-40 overflow-hidden z-[-1]">
      <img className="h-full w-full object-cover" src={HeaderImg} alt="" />
    </div>
  )
}

export default Header
