import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddressForm({ onSubmit }) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  //Declar FormError State to false
  const [formErrors, setFormErrors] = React.useState({
    firstName: false,
    lastName: false,
    address1: false,
    city: false,
    zip: false,
    country: false,
  });

  const handleFormSubmit = () => {
    // Check if required fields are filled
    if (
      formData.firstName &&
      formData.lastName &&
      formData.address1 &&
      formData.city &&
      formData.zip &&
      formData.country
    ) {
      // Call the onSubmit function and pass the form data
      onSubmit(formData);
    } else {
      // Set form errors for the empty fields
      const newFormErrors = {
        firstName: !formData.firstName,
        lastName: !formData.lastName,
        address1: !formData.address1,
        city: !formData.city,
        zip: !formData.zip,
        country: !formData.country,
      };
      setFormErrors(newFormErrors);
      alert('Please fill in all required fields.');
    }
  };

  

  const handleChange = (event) => {
    //Target the name and value of the event
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field when the user starts typing
    const newFormErrors = {
      ...formErrors,
      [name]: false,
    };
    setFormErrors(newFormErrors);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Donation Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formData.firstName}
            onChange={handleChange}
            error={formErrors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formData.lastName}
            onChange={handleChange}
            error={formErrors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formData.address1}
            onChange={handleChange}
            error={formErrors.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={formData.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={formData.city}
            onChange={handleChange}
            error={formErrors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={formData.zip}
            onChange={handleChange}
            error={formErrors.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={formData.country}
            onChange={handleChange}
            error={formErrors.country}
          />
        </Grid>
      </Grid>
      <Button 
        name="submitForm" 
        variant="contained" 
        onClick={handleFormSubmit} 
        sx={{ mt: 3, ml: 1 }}
        hidden={true}
      >
        Next
      </Button>
    </>
  );
}
