import { Typography, Grid } from "@mui/material";
import {  useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import AppCheckbox from "../../app/components/AppCheckBox";

export default function AddressForm() {
    const { control} = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        آدرس
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <AppTextInput control={control} name='fullName' label='نام کامل'/>
        </Grid>
        <Grid item xs={12}>
        <AppTextInput control={control} name='address1' label='آدرس اول'/>
        </Grid>
        <Grid item xs={12}>
        <AppTextInput control={control} name='address2' label='آدرس دوم'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control} name='city' label='شهر'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control} name='state' label='استان'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control} name='zip' label='کدپستی'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control} name='country' label='کشور'/>
        </Grid>
        <Grid item xs={12}>
          <AppCheckbox 
          name='saveAddress' 
          label='ذخیره آدرس به عنوان پیش فرض' 
          control={control}/>
        </Grid>
      </Grid>
    </>
  );
}
