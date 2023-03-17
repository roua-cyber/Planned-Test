import React, { FC } from "react";
type InputFieldProps = {
  type: string;
  placeholder: string;
  value?: number;
  onChange: any;
};
const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
