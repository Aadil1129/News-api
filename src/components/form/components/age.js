import { React, useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicAgeFields({ id, placeholder, setValue }) {
  const [require, setrequire] = useState();
  const handleChange = e => {
    const regex = /^\S[0-9]{0,2}$/;
    if (e.target.value === "") {
      setrequire("Field Can't be empty");
    } else if (!regex.test(e.target.value)) {
      setrequire("Invalid Age");
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
