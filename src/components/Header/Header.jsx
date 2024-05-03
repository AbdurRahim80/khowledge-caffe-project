import React from 'react'
import profile from '../../assets/profile/profile.png'
export default function Header() {
    return (
        <div>
            <div className='flex justify-between items-center mx-20 mt-7'>
                <h1 className='text-3xl font-bold'>Khowledge Caffe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    )
}
