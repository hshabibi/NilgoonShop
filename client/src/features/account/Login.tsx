import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const{register,handleSubmit,formState:{isSubmitting,errors,isValid}}=useForm({
        mode:'onTouched'
    })
    
    async function submitForm(data: FieldValues) {
        
        try {
            await dispatch(signInUser(data));
            navigate(location.state?.from || '/catalog');
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <Container component={Paper} maxWidth="sm"
      sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود به حساب کاربری
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="نام کاربری"
              autoFocus
              {...register('username',{required:'لطفا نام کاربری را وارد کنید'})}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="رمز عبور"
              type="password"
              {...register('password',{required:'لطفا رمز عبور را وارد کنید'})}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
              />
            <LoadingButton
              loading={isSubmitting}
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ورود
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link to={'/register'}>
                  {"حساب کاربری ندارید؟ عضویت در نیلگون"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
  );
}