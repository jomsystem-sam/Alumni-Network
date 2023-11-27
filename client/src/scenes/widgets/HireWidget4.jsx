import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";



const HireWidget4 = ({ userId}) => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const email = "hr@lyl.com"; // 

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
        src="../assets/lyl.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> }
      <Typography color={dark} variant="h5" fontWeight="500">
      LYL Land Sdn Bhd
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
                Liaising with Vendors
Ensuring software & hardwares are maintained and updated on a timely basis
Troubleshoot for Employee's issues on software and hardware
Manage employee's email creation and deletion
Running regular checks on network and data security

      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Description</b> <br></br>
                 Collaborate with systems analysts, development, and functional teams to understand business requirements.
                 Familiar & Lead the design, coding, and testing of technical solutions using C#, JavaScript, Windows Server, SQL Server, Firewall, Anti-Virus, VLAN, Web Applications, Window Server 2019/Win10/Win 11 and Infor Mongoose among other technologies.
                        
                       
      </Typography>
    </WidgetWrapper>
  );
};

export default HireWidget4;