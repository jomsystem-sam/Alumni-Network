import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFormik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function EditProfile() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const token = useSelector((state) => state.token);
  const { userId } = useParams();
  const { id } = useSelector((state) => state.user);
  const [picturePath, setPicturePath] = useState(null);
  const navigate = useNavigate();
  


  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      location: '',
      occupation: '',
      email: '',
      // picturePath: '',
      // currentpassword: '',
      // password: '',
    },
    validationSchema: Yup.object({
      // picturePath: Yup.mixed().required('Profile image is required'),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      location: Yup.string().required('Location is required'),
      occupation: Yup.string().required('Occupation is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // currentpassword: Yup.string().required('Current Password is required'),
      // password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Create a plain object to hold the data
        const userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          location: values.location,
          occupation: values.occupation,
          email: values.email,
          // currentpassword: values.currentpassword,
          // password: values.password,
        };
  
        // Send the updated data to the backend using JSON
        const response = await fetch(`http://localhost:5001/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json', // Specify that you're sending JSON
            Authorization: `Bearer ${token}`, // Replace with actual token
          },
          body: JSON.stringify(userData), // Convert the data to a JSON string
        });
  
        if (!response.ok) {
          console.log('Failed to update profile');
        }
  
        console.log('Profile updated successfully');
        navigate('/home'); // Redirect to the home page
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    // Fetch user data for the currently authenticated user
    fetchUserData(userId);
  }, [userId]);

  const fetchUserData = async () => {
    try {
      // Fetch user data from the backend
      const response = await fetch(`http://localhost:5001/users/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Replace with actual token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();

      // Update formik state with the fetched user data
      formik.setValues({
        // picturePath: userData.picturePath,
        firstName: userData.firstName,
        lastName: userData.lastName,
        location: userData.location,
        occupation: userData.occupation,
        email: userData.email,
        // currentpassword: '',
        // password: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Dropzone configuration
  // const onDrop = (acceptedFiles) => {
  //   // Assuming you want to handle only one file
  //   const file = acceptedFiles[0];
  //   setImage(file);
  // };

  return (
    <Box userId={userId}>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Edit Profile
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Edit your profile information
        </Typography>

        {/* Edit Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Dropzone */}
          {/* <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => {
              setPicturePath(acceptedFiles[0]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                border={`2px dashed ${theme.palette.primary.main}`}
                p="1rem"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <input {...getInputProps()} />
                {!image ? (
                  <Typography>Add Picture Here</Typography>
                ) : (
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{image.name}</Typography>
                    <Button type="submit" variant="outlined" color="primary">
                      Save Image
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Dropzone> */}

          {/* Form Fields */}
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('firstName')}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('lastName')}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('email')}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('location')}
          />
          <TextField
            label="Occupation"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('occupation')}
          />
          {/* <TextField
            label="Current Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('currentpassword')}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('password')}
          /> */}
          {/* <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('confirmpassword')}
          /> */}

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default EditProfile;
