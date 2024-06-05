import React, {useState,useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';

function App() {

  const [theme, setTheme] = useState('')

const toggleTheme = ()=>{
  theme === '' ? setTheme('light-theme') : setTheme('')
}
  useEffect(()=>{
   document.body.className = theme  
  },[theme])

  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    </>
  )
}

export default App;
