import { faPhone } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.number().required("Phone Number is required"),
  email: Yup.string()
    .test("is-valid-email", "Invalid email address", function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    })
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});

export default validationSchema;
