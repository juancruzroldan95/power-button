"use client"
import React from 'react'

export default function HamburgerBtn({ onClick, toggleBtn }: { onClick: () => void; toggleBtn: string; }) {
  return (
    <button id="hamburger-button" onClick={onClick} className={`text-3xl md:hidden cursor-pointer relative w-8 h-8 ${toggleBtn}`}>
      <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-['']
      before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500
      after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"
      ></div>
    </button>
  )
}
