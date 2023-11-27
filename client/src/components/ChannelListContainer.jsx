import { ChannelList, useChatContext } from 'stream-chat-react'
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const SideBar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  }

  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="centered-content">
          <HomeIcon fontSize='32px' alt="Home" onClick={handleHome}/>
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon2__inner">
          <img src="/assets/logout.png" alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
}

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chat</p>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
      </div>
    </>
  );
}

export default ChannelListContainer;
