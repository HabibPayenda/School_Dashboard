import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Name must not contain numbers or symbols")
    .required("Name is required"),
  email: Yup.string()
    .test("is-valid-email", "Invalid email address", function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    })
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
  subject: Yup.string().required("Subject is required"),
  phone: Yup.number().required("Mobile number is required"),
});

export default validationSchema;
