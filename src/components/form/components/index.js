import React from "react";
import BasicTextFields from "./input";
import BasicEmailFields from "./email";
import BasicNumberFields from "./number";
import BasicAgeFields from "./age";
import RadioComp from "./radio";
import CheckboxComp from "./checkbox";

function Component({ data, setValue }) {
  switch (data.type) {
    case "text":
      return (
        <BasicTextFields
          id={data.id}
          placeholder={data.placeholder}
          setValue={setValue}
          requiredField={data.required}
        />
      );
    case "email":
      return (
        <BasicEmailFields
          id={data.id}
          placeholder={data.placeholder}
          setValue={setValue}
          requiredField={data.required}
        />
      );

    case "number":
      return (
        <BasicNumberFields
          id={data.id}
          placeholder={data.placeholder}
          setValue={setValue}
          requiredField={data.required}
        />
      );

    case "age":
      return (
        <BasicAgeFields
          id={data.id}
          placeholder={data.placeholder}
          setValue={setValue}
          requiredField={data.required}
        />
      );

    case "checkbox":
      return (
        <CheckboxComp id={data.id} setValue={setValue} options={data.options} />
      );

    case "radio":
      return (
        <RadioComp options={data.options} id={data.id} setValue={setValue} />
      );

    default:
      return <BasicTextFields />;
  }
}

export default Component;
