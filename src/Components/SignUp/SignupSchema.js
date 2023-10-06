import * as Yup from "yup";

const SignupSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    middleName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Password is required").min(8, 'Your password is too short.'),
    confirmpassword: Yup.string().required('Please Confirm your password.').oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

export default SignupSchema;
