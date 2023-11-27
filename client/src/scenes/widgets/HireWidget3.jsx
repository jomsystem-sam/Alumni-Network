import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";



const HireWidget3 = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const email = "hr@decathlon.com"; // 

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
        src="../assets/deca.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> }
      <Typography color={dark} variant="h5" fontWeight="500">
      DECATHLON MALAYSIA SDN. BHD.
        </Typography>
    
      <Typography color={medium} onClick={handleMailToClick} style={{ cursor: "pointer" }}>
         <b>Send your resume to us</b>
      </Typography>
      <Typography color={medium} m="0.5rem 0">
      Penang
        MYR 2,300 - MYR 3,600 
         
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Highlights</b> <br></br>
                Career Progression,Sportive Environment,Rewards and Benefits<br/>
                This role encompasses the responsibilities of a Senior Software Developer, including code review, setting technical policies, programming, and database administration. <br/>
                Familiar & Lead the design, coding, and testing of technical solutions
      </Typography>
      <Typography color={medium} m="0.5rem 0">
                <b>Job Description</b> <br></br>
                Decathlon Malaysia is seeking an IT Support Specialist to join our IT team. As an IT Support Specialist, you will handle day to day operations at HQ and our stores to provide technical IT support and installation. You will diagnose, repair, and maintain hardware and software components to ensure the smooth running of our computer systems. This will include installing and configuring computer hardware and being the primary point for cooperation with the internal IT Helpdesk and the users in the company.
                        
                       
      </Typography>
    </WidgetWrapper>
  );
};

export default HireWidget3;