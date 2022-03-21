import React from 'react'
import './Tweetbox.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


const Tweetbox = () => {

  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox-input'>
                <Avatar src='https://avatars.githubusercontent.com/u/81556052?v=4'/>
                <input             
            placeholder="What's happening?"
            type="text"/>
            </div>
            <input           
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"/>
            <Button           
           className='tweet-button'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox