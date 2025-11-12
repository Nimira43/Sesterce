import { useState, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu, RxWidth } from "react-icons/rx"

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false) 
  return (
    <div className='sticky top-0 z-50'>
      <nav className={`flex items-center justify-between border-b border-gray-100 dark:border-gray-800 dark:shadow-lg mb-4 bg-white dark:bg-gray-900 p-3 md:py-2 w-full`}>

        <div class='flex items-center gap-3 md:gap-5'>
          <button className='group h-fit cursor-pointer rounded-full p-2 bg-none hover:bg-orange-100 dark:hover:bg-gray-800 opacity-100'>
            <RxHamburgerMenu
              size={24}
              strokeWidth={1}
              className='group-hover:text-orange-500 dark:text-gray-100 dark:group:hover:text-orange-500 text-black'
            />
          </button>
        </div>
        {searchModal && (
          <div className='flex items-start justify-start fixed md:static top-0 z-100 left-0 bg-[#000000a2] md:bg-white md:dark:bg-gray-900 w-full h-[100vh] md:'></div>
        )}
      </nav>      
    </div>
  )
}

export default Navbar
