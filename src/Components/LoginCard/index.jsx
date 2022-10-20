import React from 'react';
import { Button, Box, Container, Link, Paper } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextInput from '../FormTextField/text.input.form';
import GridContainer from '../GridContainer/grid.container';
import './style.scss';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email address')
    .email('Enter a valid Email address')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password must have a minimum of 8 characters')
    .required('Password is required'),
});

function LoginCard() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <Container component="main" maxWidth="xs" color="red" className="LCard">
      <Paper className="form-wrap">

        <Box component="form" onSubmit={formik.handleSubmit} className="form-card">
          {Object.keys(formik.values).map((value) => (<TextInput key={value} id={value} formik={formik} />))}
          <Button
            className="button"
            variant="contained"
            type="submit"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            Sign In
          </Button>
          <GridContainer className="links">
            <Link href="/forgotpass" variant="body2" className="llink">
              {'Forgot password ?'}
            </Link>
            <Link href="/register" variant="body2" className="llink">
              {'Sign Up'}
            </Link>
          </GridContainer>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginCard;
