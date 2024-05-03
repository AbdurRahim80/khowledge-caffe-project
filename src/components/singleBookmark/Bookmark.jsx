import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title, } = bookmark;
    return (
        <div>
            
            <div className=' p-2 rounded-lg'>
                <div className='bg-gray-100 p-2 rounded-md'>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

Bookmark.propTypes = {

};

export default Bookmark;