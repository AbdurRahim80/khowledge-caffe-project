import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmark/Bookmarks'

function App() {
const [bookmarks, setBookmarks] =useState([]);
const [markTime, setMarkTime] = useState(0)
const handleAddBookmarks = blog=>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

const handleMarkTime = (time) =>{
  const newMartTime = markTime + time;
  setMarkTime(newMartTime);
}
console.log(markTime);
  return (
    <>
    
      <Header></Header>
      <div className='flex mx-20 mt-2 gap-10'>
      <Blogs handleAddBookmarks ={handleAddBookmarks}  handleMarkTime={handleMarkTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} markTime={markTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
