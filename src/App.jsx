import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from '@/components'

function App() {
  return (
    <div className='h-[100vh]'>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />  
        </Routes> 
      </Router>      
    </div>
  )
}

export default App

// import { GiAbstract056 } from 'react-icons/gi'
// <GiAbstract056 className='text-gold text-4xl' />