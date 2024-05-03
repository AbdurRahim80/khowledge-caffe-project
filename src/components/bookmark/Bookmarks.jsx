import React from 'react';
import PropTypes from 'prop-types';
import bookmark from '../singleBookmark/Bookmark';
import Bookmark from '../singleBookmark/Bookmark';

const Bookmarks = ({ bookmarks, markTime }) => {
  return (
    <div>
      <div>
        <h1>Mark Read time: {markTime}</h1>
      </div>
      <h1>Bookmarks:{bookmarks.length}</h1>
      <div className=''>
        {
          bookmarks.map(bookmark =>
            <Bookmark
              key={bookmark.id} bookmark={bookmark}
              markTime={markTime}
            >
            </Bookmark>)
        }
      </div>

    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  markTime: PropTypes.number.isRequired
};

export default Bookmarks;