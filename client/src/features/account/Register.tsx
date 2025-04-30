import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {  useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import agent from '../../app/api/agent';
import { toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();
    const{register,handleSubmit,setError,formState:{isSubmitting,errors,isValid}}=useForm({
        mode:'onTouched'
    })

    function handleApiErrors(errors: any) {
        console.log(errors);
        if (errors) {
            errors.forEach((error: string) => {
                if (error.includes('Password')) {
                    setError('password', { message: error })
                } else if (error.includes('Email')) {
                    setError('email', { message: error })
                } else if (error.includes('Username')) {
                    setError('username', { message: error })
                }
            });
        }
    }
    

  return (
      <Container component={Paper} maxWidth="sm"
      sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ایجاد حساب کاربری
          </Typography>
          <Box component="form" onSubmit={handleSubmit(data=>agent.Account.register(data)
          .then(() => {
            toast.success('ایجاد حساب کاربری با موفقیت انجام شد - حالا می توانید وارد شوید');
            navigate('/login');
        })
          .catch(error=>handleApiErrors(error)))} 
          noValidate sx={{ mt: 1 }}>
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
              label="ایمیل"
              {...register('email',{required:'لطفا ایمیل را وارد کنید',
              pattern: {
                value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                message: 'ادرس ایمیل معتبر نمی باشد'
            }
            })}
            error={!!errors.email}
            helperText={errors?.email?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="رمز عبور"
              type="password"
              {...register('password',{required:'لطفا رمز عبور را وارد کنید',
              pattern: {
                value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                message: 'رمز انتخابی بسار ساده است'
            }
            })}
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
              ثبت نام
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link to={'/login'}>
                  {"حساب کاربری دارید؟ وارد شوید"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
  );
}