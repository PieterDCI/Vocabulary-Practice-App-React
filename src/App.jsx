import { useEffect, useState } from 'react'

import StorageContext from "./components/contexts/StorageContext"
import UserModeContext from "./components/contexts/UserModeContext"

import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Main from './components/Main'
import SelectionMenu from './components/SelectionMenu'
import Dictionary from './components/Dictionary'

import { getData, saveData } from './localStorageDE'
import './App.css'


function App() {
  const [mode, setMode] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {getData(); return saveData();}, []);
  // get data on start and always save when unmounted

  return (
     <div className='App'>
      <StorageContext.Provider value={{saveData}}> 
        <UserModeContext.Provider value={{user, mode, setUser, setMode}}>
          <Header />
          <SelectionMenu />
          <Main />
          <Aside />
          <Dictionary />
          <Footer />
        </UserModeContext.Provider>
      </StorageContext.Provider>
     </div>
  )
}

export default App

