import TextField from "@mui/material/TextField";
import { InputContainer } from "./styles";

const Input = ({
  label,
  helperText,
  error,
  register,
  bgcolor,
  color,
  name,
  backGround,
  ...rest
}) => {
  return (
    <InputContainer>
      <TextField
        sx={{ input: { color: `${color}` } }}
        style={{
          backgroundColor: `${bgcolor}`,
          borderRadius: "80px",
          fontSize: "80px",
        }}
        variant="outlined"
        label={label}
        helperText={helperText}
        error={error}
        {...rest}
        size="small"
        {...register(name)}
      />
    </InputContainer>
  );
};

export default Input;
