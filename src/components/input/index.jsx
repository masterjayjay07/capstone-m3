import TextField from "@mui/material/TextField";

const Input = ({
  label,
  helperText,
  error,
  register,
  name,
  backGround,
  color,
  ...rest
}) => {
  return (
    <TextField
      style={{
        backgroundColor: "#CAC4CE",
        borderRadius: "10px",
        margin: "2px",
        backgroundColor: `${backGround}`,
      }}
      sx={{ input: { color: `${color}` } }}
      id="filled-basic"
      variant="filled"
      label={label}
      helperText={helperText}
      error={error}
      {...rest}
      size="small"
      {...register(name)}
    ></TextField>
  );
};

export default Input;
