import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentForm({ onSubmit }) {
  const [formData, setFormData] = React.useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    cardName: false,
    cardNumber: false,
    expDate: false,
    cvv: false,
  });

  const handleFormSubmit = () => {
    // Check if all fields are filled
    if (
      formData.cardName &&
      formData.cardNumber &&
      formData.expDate &&
      formData.cvv
    ) {
      // Call the onSubmit function and pass the form data
      onSubmit(formData);
    } else {
      // Set form errors for the empty fields
      const newFormErrors = {
        cardName: !formData.cardName,
        cardNumber: !formData.cardNumber,
        expDate: !formData.expDate,
        cvv: !formData.cvv,
      };
      setFormErrors(newFormErrors);
      alert('Please fill in all required fields.');
    }
  };

  const handleChange = (event) => {
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
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={formData.cardName}
            onChange={handleChange}
            error={formErrors.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formData.cardNumber}
            onChange={handleChange}
            error={formErrors.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={formData.expDate}
            onChange={handleChange}
            error={formErrors.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={formData.cvv}
            onChange={handleChange}
            error={formErrors.cvv}
          />
        </Grid>
      </Grid>
      <Button
        name="submitForm"
        variant="contained"
        onClick={handleFormSubmit}
        sx={{ mt: 3, ml: 1 }}
      >
        Next
      </Button>
    </>
  );
}
