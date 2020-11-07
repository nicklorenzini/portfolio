import React from 'react';
import {Formik, Form, Field} from 'formik';
import Button from "../../components/CustomButtons/Button.jsx";
import {
  FormControlLabel,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';
import basicsStyle from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {top100Films} from './data';

interface Values {
  email: string;
  name: string;
}

const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: {setFieldValue},
    field: {name},
  } = props;
  const onChange = React.useCallback(
    (event) => {
      const {value} = event.target;
      setFieldValue(name, value ? value : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}

const ContactCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
return (
  <Formik
    initialValues={{
      email: '',
      name: '',
      newsletter: false,
      autocomplete: [],
      freeSoloMultiple: [],
    }}
    validate={(values) => {
      const errors: Partial<Values> = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.name) {
        errors.name = 'Required'}
      return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
    
  >
    {({submitForm, isSubmitting, touched, errors}) => (
        <Form name='Contact' 
        data-netlify="true"
        data-netlify-honeypot="bot-field">
            <div>
            <Field component={UpperCasingTextField} 
            type="text" 
            label="Name" 
            name="name"
 
            />
          </div>
          <div >
            <Field
              component={UpperCasingTextField}
              name="email"
              type="email"
              label="Email"
            />
          </div>
          <div >
            <FormControlLabel
              control={
                <Field component={Switch} type="checkbox" color="primary" name="newsletter" />
              }
              label="Sign up for Newsletter"
            />
          </div>
          <div >
            <Button
              color="primary"
              disabled={isSubmitting}
              onClick={handleClick}
            >
              Submit
            </Button>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Nice! We'll be in touch, thank you!
              </Alert>
            </Snackbar>
        </Form>
    )}
  </Formik>
)};

export default withStyles(basicsStyle)(ContactCard)