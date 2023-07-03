import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  room_number: Yup.number("Room number should be in number format").required(
    "Room Number is required"
  ),
});

export default validationSchema;
