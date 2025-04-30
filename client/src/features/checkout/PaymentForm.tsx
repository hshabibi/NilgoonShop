import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import {  useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";

export default function PaymentForm() {
  const {control}=useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        پرداخت
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
         <AppTextInput name='nameOnCard' label='نام روی کارت' control={control}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="cardNumber"
            label="شماره کارت"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="expDate"
            label="تاریخ انقضا"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="اطلاعات کارت را برای بعد ذخیره کن"
          />
        </Grid>
      </Grid>
    </>
  );
}