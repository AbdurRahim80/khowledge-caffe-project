import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'

function App() {

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
