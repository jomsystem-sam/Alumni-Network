import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const EventWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
       <Typography style={{ color: dark }}  
       variant="h5" fontWeight="500">
        Up Comming Event
       </Typography>

        <Typography color={medium}></Typography>
      </FlexBetween>
                <a href="/EventPage">
            <img
              width="100%"
              height="auto"
              alt="advert"
              src="../assets/talk.jpg"
              style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
          </a>

     
      <FlexBetween>
        <Typography color={main}>SEGi College & University Group</Typography>
        <Typography color={medium}>
        <a href="https://www.segi.edu.my" target="_blank" rel="event register link"style={{ fontWeight: 'bold' }}>
    www.segi.edu.my
        </a>
</Typography>

      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      SEGi College Subang Jaya orchestrated an enlightening virtual event that transcended boundaries. Titled ‘Psychologists: Read Minds? Treat ‘Crazy’ People? Make No Money?’, this thought-provoking webinar seamlessly blended the realms of perception and reality. The platform, a synergy of Facebook Live and Zoom meetings, attracted an enthusiastic audience. 

Wan Mun Chian, SEGi’s psychology lecturer, elevated the discourse with his robust insights. Beyond his academic role, Wan’s credentials as a certified HRDCorp trainer and licensed counsellor added a practical dimension to his perspectives. 
      </Typography>
    </WidgetWrapper>
  );
};

export default EventWidget;