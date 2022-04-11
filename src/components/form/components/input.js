import { React, useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ id, placeholder, setValue }) {
  const [require, setrequire] = useState();
  const handleChange = e => {
    const ejex = /^[A-Za-z ]+$/;
    if (e.target.value === "") {
      setrequire("Field Can't be empty");
    } else if (!ejex.test(e.target.value)) {
      setrequire("Invalid Field");
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
