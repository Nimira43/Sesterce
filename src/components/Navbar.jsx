import { useState, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false) 
  return (
    <div className='stickey top-0 z-60'>
      <nav className={`flex items-center justify-between border-b border-gray-100 dark:border-gray-800 dark:shadow-lg mb-4 bg-white dark:bg-gray-900 p-3 md:py-2 w-full`}>
        
      </nav>      
    </div>
  )
}

export default Navbar
