import React, { useState } from 'react';
import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import DonationPageWidget from "scenes/widgets/DonationPageWidget";

const DonationPage = () => {
  const steps = ['Donor Information', 'Payment details', 'Review donation details'];

  const [activeStep, setActiveStep] = useState(0);
  const [donorInfo, setDonorInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleDonorInfoSubmit = (info) => {
    setDonorInfo(info);
    handleNext();
  };

  const handlePaymentInfoSubmit = (info) => {
    setPaymentInfo(info);
    handleNext();
  };

  

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm onSubmit={handleDonorInfoSubmit} />;
      case 1:
        return <PaymentForm onSubmit={handlePaymentInfoSubmit} />;
      case 2:
        return <Review donorInfo={donorInfo} paymentInfo={paymentInfo} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Navbar />
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 5 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h1" align="center">
            Donation
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h3" gutterBottom>
                Thank you for the donation.
              </Typography>
              <Typography variant="subtitle1">
                Your donation number is #2001539. We have confirmed your donation
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep === 2 ? (
                  <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                    Next
                  </Button>
                ) : null}
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <Box width="flex" padding="2rem 6%">
        <DonationPageWidget />
      </Box>
    </>
    
  );
};

export default DonationPage;
