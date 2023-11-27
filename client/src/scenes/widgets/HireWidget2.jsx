import {  Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";



const HireWidget2 = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const email = "hr@inari.com"; // 

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
        src="../assets/inari.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> }
      <Typography color={dark} variant="h5" fontWeight="500">
      Inari Corporation Bhd
        </Typography>
    
      <Typography color={medium} onClick={handleMailToClick} style={{ cursor: "pointer" }}>
         <b>Send your resume to us</b>
      </Typography>
      <Typography color={medium} m="0.5rem 0">
      Penang
        MYR 4,300 - MYR 8,600 
         
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Highlights</b> <br></br>
                The Senior Software Developer cum IT Team Supervisor will lead application development, technical oversight, and supervise the IT team in Malaysia. This role encompasses the responsibilities of a Senior Software Developer, including code review, setting technical policies, programming, and database administration.  Familiar & Lead the design, coding, and testing of technical solutions
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Description</b> <br></br>
                 Collaborate with systems analysts, development, and functional teams to understand business requirements.
                 Familiar & Lead the design, coding, and testing of technical solutions using C#, JavaScript, Windows Server, SQL Server, Firewall, Anti-Virus, VLAN, Web Applications, Window Server 2019/Win10/Win 11 and Infor Mongoose among other technologies.
                        
                       
      </Typography>
    </WidgetWrapper>
  );
};

export default HireWidget2;