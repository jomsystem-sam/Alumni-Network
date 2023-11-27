import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Navbar from "scenes/navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const registerSchema = yup.object().shape({
  eventName: yup.string().required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});

const initialValuesRegister = {
  eventName: "",
  firstName: "",
  lastName: "",
  email: "",
  eventpostId: "", // Include eventpostId in the initial values
};

const EventForm = () => {
  const theme = useTheme();
  const {eventpostId} = useParams();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

  const registerEventUser = async (values, onSubmitProps) => {
    try {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }

      const savedEventUserResponse = await fetch(
        "http://localhost:5001/auth/eventregistered",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await savedEventUserResponse.json();
      console.log("User registered successfully:", responseData);

      // Reset the form after successful registration
      onSubmitProps.resetForm();

      // Optionally, you can navigate to another page or perform additional actions
      navigate('/EventPage');
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleFormSubmit = (values, onSubmitProps) => {
    values.eventpostId = eventpostId;

    registerEventUser(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Navbar />
          <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <Typography
              fontWeight="bold"
              fontSize="32px"
              color="black"
              align="center"
            >
              Register Your Event With Us
            </Typography>
            <Box
              flexBasis={isNonMobileScreens ? "42%" : undefined}
              mt={isNonMobileScreens ? undefined : "2rem"}
            ></Box>
            <TextField
              label="Event Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.eventName}
              name="eventName"
              error={Boolean(touched.eventName) && Boolean(errors.eventName)}
              helperText={touched.eventName && errors.eventName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              margin="normal"
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.alt,
                "&:hover": { color: theme.palette.primary.main },
              }}
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default EventForm;
