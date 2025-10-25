import { useState } from 'react'


const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false)

  return (
    <div className='sticky top-0 z-60'>
      <nav className={`navbar-wrapper`}>
        <div className='flex items-center gap-3 md:gap-5'></div>
      </nav>
    </div>
  )
}

export default Navbar
