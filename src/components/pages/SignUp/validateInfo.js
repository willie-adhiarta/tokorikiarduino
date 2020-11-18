export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'A username is required!';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'An email address is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'The current email address is invalid!';
  }
  if (!values.password) {
    errors.password = 'A password is required!';
  } else if (values.password.length < 6) {
    errors.password = 'The password needs to be 6 characters or more!';
  }

  if (!values.password2) {
    errors.password2 = 'A password is required!';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'The password does not match!';
  }
  return errors;
}