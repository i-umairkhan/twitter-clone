import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <TwitterIcon className='twitter--icon'/>
        <SidebarOption active={true} Muiicon={HomeIcon} text="Home" />
      <SidebarOption Muiicon={SearchIcon} text="Explore" />
      <SidebarOption Muiicon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Muiicon={MailOutlineIcon} text="Messages" />
      <SidebarOption Muiicon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Muiicon={ListAltIcon} text="Lists" />
      <SidebarOption Muiicon={PermIdentityIcon} text="Profile" />
      <SidebarOption Muiicon={MoreHorizIcon} text="More" />
      <Button variant="Outlined" className='sidebar--tweet'>Tweet</Button>
    </div>
  )
}

export default Sidebar     