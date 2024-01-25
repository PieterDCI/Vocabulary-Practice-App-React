import { useEffect, useState } from 'react'

import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Main from './components/Main'
import SelectionMenu from './components/SelectionMenu'

import { getData, saveData } from './localStorageDE'

import './App.css'

function App() {
  const [mode, setMode] = useState('')

  useEffect(() => {
    getData();
    return saveData();
  }, []);

  useEffect(() => {
    saveData()
  }, [mode]);


  return (
     <div className='App'>
      <Header />
      <SelectionMenu setMode={setMode} />
      <Main mode={mode} />
      <Aside />
      <Footer />
     </div>
  )
}

export default App

