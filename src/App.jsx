import React from 'react'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Jobs from './Components/Jobs'
import Value from './Components/Value'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App