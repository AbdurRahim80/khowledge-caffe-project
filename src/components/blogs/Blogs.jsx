import React, { useEffect, useState } from 'react'
import Blog from '../blog/Blog';
import PropTypes from 'prop-types';
export default function Blogs({handleAddBookmarks, handleMarkTime}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch("blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className='md:w-2/3'>
      <h1>Blogs length: {blogs.length}</h1>
      {
        blogs.map((blog,index) => <Blog key={index} blog = {blog} 
        handleMarkTime ={handleMarkTime}
        handleAddBookmarks ={handleAddBookmarks}></Blog>)
      }
    </div>
  )
}
Blogs.propTypes = {
  handleAddBookmarks: PropTypes.func.isRequired,
  handleMarkTime: PropTypes.func.isRequired
}
