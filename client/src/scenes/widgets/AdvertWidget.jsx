import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored by
        </Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      { <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/new1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> }
     
      <FlexBetween>
        <Typography color={main}>SEGi College & University Group</Typography>
        <Typography color={medium}>
         <a href="https://www.segi.edu.my" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>
             www.segi.edu.my
         </a>
</Typography>


      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      SEGi College Subang Jaya is thrilled to announced that we will be moving to the new Edumetro @ Subang Jaya development second half this year. The new campus is being built to serve the next generation of learners, and it will be outfitted with cutting-edge educational facilities and teaching and learning methods. The campus, which has a capacity of 4,500 students, will provide a welcoming and modern learning environment for students from a variety of backgrounds.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;