import TextField from "@mui/material/TextField";

const Input = ({
  label,
  helperText,
  error,
  register,
  registerMsg,
  name,
  ...rest
}) => {
  return (
    <TextField
      style={{ backgroundColor: "#CAC4CE", borderRadius: "10px" }}
      id="filled-basic"
      variant="filled"
      label={label}
      helperText={helperText}
      error={error}
      {...rest}
      size="small"
      // {...register(name)}
    ></TextField>
  );
};

export default Input;
