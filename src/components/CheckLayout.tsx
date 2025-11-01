import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const CheckTemplate = () => {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '900',
        border: '2px solid #aaa',
        p: 3,
        backgroundColor: '#f7f9f9',
        fontFamily: 'monospace',
        mx: 'auto',
   
      }}
    >
      {/* Top Row: Name and Check Number */}
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item size={{ xs: 6 }}>
          <Typography variant="body1" fontWeight="bold">
            JOHN CLAW
          </Typography>
          <Typography variant="body2">A.B. BOX 123</Typography>
          <Typography variant="body2">LOREM SPRING, 123456</Typography>
        </Grid>
        <Grid item size={{ xs: 6 }} textAlign="right">
          <Typography variant="body2">
            No. <b>8741</b>
          </Typography>
          <TextField
            variant="standard"
            placeholder="Date"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  20__
                </InputAdornment>
              ),
              sx: { fontSize: '0.9rem' },
            }}
          />
        </Grid>
      </Grid>

      {/* Payee */}
      <Box mt={3}>
        <Typography variant="body2" gutterBottom>
          PAY TO THE ORDER OF
        </Typography>
        <Grid container spacing={2}>
          <Grid  size={{ xs: 9 }}>
            <TextField fullWidth variant="standard" placeholder="Payee Name" />
          </Grid>
          <Grid  size={{ xs: 3 }}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Amount in Words */}
      <Box mt={2}>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Amount in Words"
          InputProps={{
                endAdornment: (
                  <InputAdornment position="start">Dollars</InputAdornment>
                ),
              }}
        />
      </Box>

      {/* Dollars and Security Icon */}
      

      

      {/* Bank Info */}
      <Grid container alignItems="center" spacing={2}>
        <Grid >
         <AccountBalanceIcon fontSize="large" color="primary" />
        </Grid>
        <Grid >
          <Typography variant="h6">BANK OF THE WORLD</Typography>
          <Typography variant="body2" fontStyle="italic">
            Third Planet From the Sun, Earth
          </Typography>
        </Grid>
      </Grid>

      {/* Memo and Signature */}
      <Grid container justifyContent="space-between" alignItems="flex-end" mt={3}>
        <Grid item size={{ xs: 5 }}>
          <Typography variant="body2">MEMO</Typography>
          <TextField fullWidth variant="standard" placeholder="Memo Line" />
        </Grid>
        <Grid item size={{ xs: 5 }}>
          <Typography variant="body2" align="right">
            Signature
          </Typography>
          <Divider sx={{ borderBottomWidth: 1, mt: 1 }} />
        </Grid>
      </Grid>

      {/* MICR Line */}
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        fontFamily="monospace"
      >
        <Typography variant="h6">|:123456|:</Typography>
        <Typography variant="h6">|:678901|:</Typography>
        <Typography variant="h6">8741</Typography>
      </Box>
    </Box>
  );
};

export default CheckTemplate;
