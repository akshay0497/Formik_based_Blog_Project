import React from "react";
import img1 from "../../Asset/Images/SignUp/how-blogging-works.jpg";
import SignupSchema from "./SignupSchema";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const SignUp = () => {
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.middleName) {
      errors.middleName = 'Required';
    } else if (values.middleName.length > 15) {
      errors.middleName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.password){
      errors.password = 'Required';
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/i.test(values.password)){
      errors.password = " Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"
    }
  
    if(!values.confirmpassword){
      errors.confirmpassword = 'Required';
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/i.test(values.confirmpassword)){
      errors.confirmpassword = " Min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"
    }

    return errors;
  };

  const formik = useFormik({SignupSchema,
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit:(values)=>{
      console.log(values,"submitting")
      formik.resetForm()
    },
    // onReset:(values)=>{
    //   formik.resetForm()
    // }
  });


  return (
    <div className=" bg-[#c4cbce]">
      <div className="px-24 py-12">
        <p
          style={{
            fontFamily: "Tangerine, serif",
            fontSize: "48px",
            textAlign: "center",
            color:"green"
          }}
        >
          A rollercoaster ride of adventures around the world
        </p>
        <div className="grid grid-cols-2 gap-20 ">
          <div className="w-full mx-5 my-20 ">
            <img src={img1} className="!h-fit " />
          </div>
          <div className="text-black  ">
            <h1 className="text-center my-5 p-2 text-2xl italic">
              Create your Account
            </h1>

            <form className="flex !flex-col " onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? <div className="text-red-500">{formik.errors.firstName}</div> : null}

              <label>Middle Name:</label>
              <input
                id="middleName"
                name="middleName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.middleName}
              />
              {formik.errors.middleName ? <div className="text-red-500">{formik.errors.middleName}</div> : null}


              <label>Last Name: </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? <div className="text-red-500">{formik.errors.lastName}</div> : null}

              <label>Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}

              <label>Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}

              <label>Confirm Password:</label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
              />
              {formik.errors.confirmpassword ? <div className="text-red-500">{formik.errors.confirmpassword}</div> : null}

              <div className="flex justify-between px-20 py-5 ">
              <button type="submit" className="bg-blue-600 w-20 h-9 rounded-lg text-white">Submit</button>
              <button type="reset" className="bg-red-600 w-20 h-9 rounded-lg text-white" onClick={ e => formik.resetForm()}>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
