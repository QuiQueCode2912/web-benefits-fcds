"use client"
import React from 'react'
import Container from './Container'
import BackToTop from './BackToTop'
import { useTheme } from "next-themes"
import { Sun, Moon, LaptopMinimal } from 'lucide-react';

const Footer = () => {

  const { setTheme } = useTheme();

  return (
    <footer>
      <Container>
        <div className="relative">
          <div className="absolute right-0 -top-20">
            <BackToTop />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            &copy; 2024 {`|`} Beneficios
          </div>
          <div className="flex flex-wrap gap-1 items-center">
            <button
              onClick={() => setTheme("light")}
              aria-label="Light theme"
              className="group size-8 flex items-center justify-center rounded-full"
            >
              <Sun className='group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out' />
            </button>
            <button
              onClick={() => setTheme("dark")}
              aria-label="Dark theme"
              className="group size-8 flex items-center justify-center rounded-full"
            >
              <Moon className='group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out' />
            </button>
            <button
              onClick={() => setTheme("system")}
              aria-label="System theme"
              className="group size-8 flex items-center justify-center rounded-full"
            >
              <LaptopMinimal className='group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out'/>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer