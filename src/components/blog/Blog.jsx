import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { IoBookmarkOutline } from 'react-icons/io5';

export default function Blog({ blog, handleAddBookmarks, handleMarkTime }) {
    const { author, author_img
        , title, cover_img, posted_date,post_reading_time,hash_tag,mark_read,
    } = blog;
    console.log(blog);
    return (
        <div >
            <div className='border my-3 rounded-lg'>
                <div className='space-y-6 p-3'>
                    <img src={cover_img} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex gap-2 justify-center'>
                            <img src={author_img} alt="" className='w-14 h-14' />
                            <div>
                                <h3>{author}</h3>
                                <p>{posted_date}</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <h5>{post_reading_time}</h5>
                            <button onClick={()=>handleAddBookmarks(blog)}><IoBookmarkOutline /></button>
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p>{hash_tag}</p>
                    <a onClick={()=> handleMarkTime(post_reading_time)} className='text-blue-600 underline' href="#">{mark_read}</a>
                </div>
            </div>

        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.array.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired
}

