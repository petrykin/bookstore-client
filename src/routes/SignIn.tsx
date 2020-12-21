import React, {useState} from 'react';

import { Grid, TextField, Button, makeStyles, createStyles } from '@material-ui/core';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '8rem',
      maxWidth: '450px',
      display: 'block',
      margin: '0 auto'
    },
    textField: {
      '& > *': {
        width: '100%'
      }
    },
    submitButton: {
      marginTop: '24px'
    },
    title: { textAlign: 'center' },
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' }
  })
);

interface ISignInForm {
  email: string;
  password: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed in successfully.',
    type: 'success'
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error'
  }
};

const SignIn: React.FC = () => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: ''
  });

  const signInRequest = async (data: ISignInForm, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error) {
      setFormStatus(formStatusProps.error);
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <section className={classes.root}>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values: ISignInForm, actions) => {
          signInRequest(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema = { Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Enter valid email please'),
          password: Yup.string()
            .matches(
              /^(?=.*[a-z]).{4,20}\S$/
            )
            .required(
              'Password should contain uppercase and lowercase characters, special symbols and no spaces'
            )
        })}
      >
        {(props: FormikProps<ISignInForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting
          } = props;
          return (
            <Form>
              <h1 className={classes.title}>Sign In</h1>
              <Grid
                container
                justify='space-around'
                direction='row'
              >
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name='email'
                    id='email'
                    label='Email-id'
                    value={values.email}
                    type='email'
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : 'Enter email'
                    }
                    error={
                      !!(errors.email && touched.email)
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name='password'
                    id='password'
                    label='Password'
                    value={values.password}
                    type='password'
                    helperText={
                      errors.password && touched.password
                        ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                        : 'One uppercase, one lowercase, one special character and no spaces'
                    }
                    error={
                      !!(errors.password && touched.password)
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.submitButton}>
                  <Link to='/signup'>Register</Link>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.submitButton}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                  {displayFormStatus && (
                    <div className='formStatus'>
                      {formStatus.type === 'error' ? (
                        <p className={classes.errorMessage}>
                          {formStatus.message}
                        </p>
                      ) : formStatus.type ===
                      'success' ? (
                        <p className={classes.successMessage}>
                          {formStatus.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default SignIn;