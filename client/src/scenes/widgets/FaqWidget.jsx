import { CenterFocusStrong } from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Box, useMediaQuery} from "@mui/material";

const FaqWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography component="h1" variant="h1" align="center">
         Frequently Asked Question 
        </Typography>  
      </FlexBetween><br/><br/>


      
   
        <Typography color={main}  component="h4" variant="h4">
          What are the documents required for me to apply for the Diploma programme?  <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
          Your NRIC, SPM (or equivalent) and other higher academic certificates and transcripts are the basic documents.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          I travel frequently to other countries for business. Is the PACE programme suitable for me?  <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
          The content materials can be accessed anytime anywhere as long as there is internet connection, from either desktop or on mobile devices. You can also print out the materials for offline references.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          I’m not sure how to study online. Can you guide me? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
           Student Orientation is conducted at the beginning of every semester. New students are strongly encouraged to attend the Orientation to learn how to use the Learning Management System, e-Library, and other important information about your programme. The information is also available on the Learning Management System for your later reference. If you need further information, do not hesitate to contact our support staff.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          I’m not able to attend the scheduled workshops as I work on weekends. How can I work around it so I won’t miss out on the workshops? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
          All workshops are recorded and posted on the Learning Management System for students to re-view at a later time. Lecturers will also schedule web conferences for further engagement and discussion. You may also contact our lecturers personally should you need further guidance.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          I’m not able to participate in the scheduled web conference. Can the lecturer reschedule the session? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
          The session will be recorded and posted on the Learning Management System for later review. If you have further queries for the lecturer or need him/her to conduct another session for you, please contact him/her.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          I’m a working professional with a young family to take care of. I may not be able to dedicate my time fully at certain time of the year. Can I enroll for less or no courses at all in any particular semester? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
         The flexibility of the PACE programme enables our student to take less courses per semester.  Students only need to apply the deferment through the PACE Office and can defer up to four subsequent semesters.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
          Can I get credit exemptions for similar subjects that I have taken from other academic institutions in the past? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
          Credit exemptions can be applied for courses taken of the same level and within the last five years. You need to provide the syllabus of the course from the previous institution and fill up the application form during your first semester of studies.<br/><br/>
        </Typography>

        
        <Typography color={main}  component="h4" variant="h4">
          I’ve paid and enrolled for 3 courses this semester. However, I have an urgent task at work and don’t think I’m able to commit for all the courses. I would like to just concentrate on 2 courses, can I? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
        You can opt to drop a course before the due date. You can take the course when it is offered again in future semesters and don’t need to pay for the course again.<br/><br/>
        </Typography>


        <Typography color={main}  component="h4" variant="h4">
        How can I obtain my exam docket and exam results as I’m not able to collect by hand? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
        Exam dockets and results are downloadable from the student portal or Blackboard.<br/><br/>
        </Typography>

        <Typography color={main}  component="h4" variant="h4">
        My company has suddenly informed of a meeting which I cannot avoid during the exam weekend. It’s too late for me to drop the course. I’m also not in favour of prolonging my study duration. Can the University arrange another exam schedule for me? <br/>
        </Typography>
        <Typography color={main}  component="h7" variant="h7">
        You can apply to defer your examinations. The exams will be held roughly 2 weeks after the results is released. You will need to submit your assignment as usual before the due date..<br/><br/>
        </Typography>






         
   
        

      <Typography color={medium} m="0.5rem 0">
      
      </Typography>
    </WidgetWrapper>
  );
};

export default FaqWidget;