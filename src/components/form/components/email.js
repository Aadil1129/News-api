import { React, useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicEmailFields({ id, placeholder, setValue }) {
  const [require, setrequire] = useState();
  const handleChange = e => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.value === "") {
      setrequire("Field Can't be empty");
    } else if (!regex.test(e.target.value)) {
      setrequire("Enter Valid Email");
    } else {
      setrequire(false);
      setValue(id, e.target.value);
    }
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        size="small"
        label={placeholder}
        onChange={handleChange}
        variant="outlined"
      />
      <div className="required-field">{require}</div>
    </>
  );
}
