import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";



const HireWidget = ({ userId}) => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const email = "hr@vitrox.com"; // replace with the desired email address

  const handleMailToClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <WidgetWrapper>
      <FlexBetween>
        
      </FlexBetween>
      { <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/vitrox.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> }
      <Typography color={dark} variant="h5" fontWeight="500">
      ViTrox Corporation Bhd
        </Typography>
    
      <Typography color={medium} onClick={handleMailToClick} style={{ cursor: "pointer" }}>
         <b>Send your resume to us</b>
      </Typography>
      <Typography color={medium} m="0.5rem 0">
      Penang
        MYR 3,300 - MYR 6,600 
         
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Highlights</b> <br></br>
          Join the Homegrown High-Tech Company in Machine Vision
          Key contributor in Industrial IoT (Machine Automation)
          Sharpen your creativity & think out of the box 
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Description</b> <br></br>
                As a Firmware Development Engineer, you will be involved in embedded system firmware design & development for industrial products. You are the one who usually studies and understands NPI projects or service request requirements from customers. Besides, firmware design verification and validation test will be part of your job scope too. Firmware Development Engineer is also responsible in modifying the existing electronics design for customization requests. At the same time, you will have the chance to support product development activities which include design implementation, design change, integration & testing of hardware for Industrial automation product development. 
      </Typography>
    </WidgetWrapper>
  );
};

export default HireWidget;