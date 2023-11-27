import React from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyEventPostWidget from "scenes/widgets/MyEventPostWidget";
import EventPostsWidget from "scenes/widgets/EventPostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import EventWidget from "scenes/widgets/EventWidget";

const EventForm = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath, videoPath, attachmentPath } = useSelector((state) => state.user);
    return (
        <Box>
           <Navbar />
          <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between"
          >
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
              <UserWidget userId={_id} picturePath={picturePath} />
              <Box m="2rem 0" />
              <EventWidget/>
    
            </Box>
            <Box
              flexBasis={isNonMobileScreens ? "42%" : undefined}
              mt={isNonMobileScreens ? undefined : "2rem"}>
              <MyEventPostWidget picturePath={picturePath} videoPath={videoPath} attachmentPath={attachmentPath} />
              <EventPostsWidget userId={_id} />
            </Box>
            
            {isNonMobileScreens && (
              <Box flexBasis="26%">
                <AdvertWidget />
                <Box m="2rem 0" />
                <FriendListWidget userId={_id} />
              </Box>
            )}
          </Box>  
        </Box>
      );
}

export default EventForm;