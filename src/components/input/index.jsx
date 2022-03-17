import TextField from "@mui/material/TextField";

const Input = ({
  label,
  helperText,
  error,
  register,
  bgcolor,
  color,
  name,
  backGround,
  color,
  ...rest
}) => {
  return (
    <TextField
      sx={{ input: { color: `${color}` } }}
      style={{ backgroundColor: `${bgcolor}`, borderRadius: "10px", fontSize: '80px' }}
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
