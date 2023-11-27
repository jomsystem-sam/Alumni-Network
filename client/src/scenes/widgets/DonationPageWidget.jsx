import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const DonationPageWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
       <Typography style={{ color: dark }}  
       variant="h5" fontWeight="500">
        Give a Hand｜Your kindness is a great source of support and comfort
       </Typography>

        <Typography color={medium}></Typography>
      </FlexBetween>
      {/* { <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/talk.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> } */}
     
     <FlexBetween>
  <div style={{ marginBottom: '20px',  }}>
    <Typography color={medium}>
      Alumni donations fund these scholarships to make the cost of college easier for current and future students. This ensures that more people have access to the same quality of education you had. Also, alumni donations go toward funding new programs, classes, and on-campus renovations.
    <br/><br/>
    </Typography>
     <Typography color={"black"}>
    Donation to the <b>SEGI COLLEGE FUND</b> is eligible for tax deduction. An applicant is required to provide donor details (personal or company), including English name/company name, IC number/passport number/company registration number, and address, for issuance of an official receipt to be submitted to LHDN for tax-deduction application.
    
    </Typography>
    <Typography color={"black"}>
    
Ways to donate：
</Typography>
  </div>

  
</FlexBetween>



      

      
    </WidgetWrapper>
  );
};

export default DonationPageWidget;