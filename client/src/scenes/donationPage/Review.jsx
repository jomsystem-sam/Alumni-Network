import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Dear Donor',
    desc: 'Your donation is making a real difference.',
    price: '100 MYR',
  },
];

function getCardType(cardNumber) {
  // Define regular expressions for each card type
  const cardPatterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    Mastercard: /^5[1-5][0-9]{14}$/,
    Amex: /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
  };

  // Check the card number against each pattern
  for (const cardType in cardPatterns) {
    if (cardPatterns[cardType].test(cardNumber)) {
      return cardType;
    }
  }
  // If no match is found, return "Unknown"
  return "Unknown";
}



export default function Review({ donorInfo, paymentInfo }) {
const cardType = getCardType(paymentInfo.cardNumber);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Confirmation | Donation
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography>{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Your selfless act of giving is not only a financial contribution but also a vote of confidence in what we do. Your belief in our work is truly inspiring, and it motivates us to do even more.
          </Typography>
          <br/><br/>
          <Typography gutterBottom>{donorInfo.firstName} {donorInfo.lastName}</Typography>
          <Typography gutterBottom>{donorInfo.address1}</Typography>
          <Typography gutterBottom>{donorInfo.address2}</Typography>
          <Typography gutterBottom>{donorInfo.city}, {donorInfo.state}, {donorInfo.zip}</Typography>
          <Typography gutterBottom>{donorInfo.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardType}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{paymentInfo.cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{paymentInfo.cardNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{paymentInfo.expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </>
  );
}
