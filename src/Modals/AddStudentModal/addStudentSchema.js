import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .test("is-valid-email", "Invalid email address", function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    })
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.number().required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  grade: Yup.string().required("Grade is required"),
  date_of_birth: Yup.string().required("DOB is required"),
});

export default validationSchema;
