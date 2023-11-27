import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import HireWidget from "scenes/widgets/HireWidget";
import HireWidget2 from "scenes/widgets/HireWidget2";
import HireWidget3 from "scenes/widgets/HireWidget3";
import HireWidget4 from "scenes/widgets/HireWidget4";



const WorkPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath} = useSelector((state) => state.user);

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
          <AdvertWidget/>

        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          
        >
         <HireWidget />
         <br></br>
         <HireWidget3 />
         
        </Box>
        
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          
        >
         <HireWidget2 />
        <br/>
         <HireWidget4 />
        </Box>
        {/* {isNonMobileScreens && (
          <Box flexBasis="26%">
            <HireWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )} */}
      </Box>  
    </Box>
  );
};

export default WorkPage;