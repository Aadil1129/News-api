const formComponent = [
  {
    id: "1",
    label: "Name",
    required: true,
    placeholder: "Enter your name",
    type: "text",
  },
  {
    id: "2",
    label: "Age",
    required: true,
    placeholder: "Enter your age",
    type: "age",
  },
  {
    id: "3",
    label: "Email",
    required: true,
    placeholder: "Enter your email",
    type: "email",
  },
  {
    id: "4",
    label: "Phone",
    required: false,
    placeholder: "Enter your phone",
    type: "number",
  },
  {
    id: "5",
    label: "Gender",
    required: true,
    placeholder: "",
    type: "radio",
    options: ["Male", "Female", "Other"],
  },
  {
    id: "6",
    label: "Address",
    required: true,
    placeholder: "Enter your Address",
    type: "text",
  },
];
export default formComponent;
