import { React, useState } from "react";
import TextField from "@mui/material/TextField";

export default function BasicNumberFields({ id, placeholder, setValue }) {
  const [require, setrequire] = useState();
  const handleChange = e => {
    const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (e.target.value === "") {
      setrequire("Field Can't be empty");
    } else if (!regex.test(e.target.value)) {
      setrequire("Invalid Contact");
    } else if (e.target.value.length > 10 || e.target.value.length < 10) {
      setrequire("Invalid Contact");
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
