import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { Button } from './ui/button'

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false)

  return (
    <div className='sticky top-0 z-60'>
      <nav className={`navbar-wrapper`}>
        <div className='flex items-center gap-3 md:gap-5'>
          <button className='main-btn transition-btn'>
            <RxHamburgerMenu 
              className='text-light' 
              size={24}
              strokeWidth={1}  
            />
          </button>

          {searchModal && (
            <div className='flex items-start justify-start fixed md:static top-0 z-100 left-0 bg-main md:bg-main-light md:dark:bg-main-dark w-full h-[100vh] md:h-fit p-5 md:p-0'></div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
