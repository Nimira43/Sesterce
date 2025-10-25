import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false)

  return (
    <div className='sticky top-0 z-60'>
      <nav className={`navbar-wrapper`}>
        <div className='flex items-center gap-3 md:gap-5'>
          <button className='group main-btn transition-btn'>
            <RxHamburgerMenu className='text-light' />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
