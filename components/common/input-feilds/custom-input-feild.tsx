import { InputAdornment, TextField, Theme } from "@mui/material";
import React from "react";

interface InputProps {
  placeholder: string;
  sx: any;
  icon?: any;
}

export const CustomInputFeild: React.FunctionComponent<InputProps> = ({
  placeholder,
  sx,
  icon,
}) => {
  return (
    <TextField
      InputProps={{
        disableUnderline: true,
        endAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        style: {
          height: "46px",
          borderRadius: "8px",
          fontSize: "15px",
          boxShadow: "none",
          paddingLeft: "10px",
          fontWeight: 400,
          color: `${(theme: Theme) => theme.custom.placeHolder}`,
          backgroundColor: "rgba(47, 159, 248, 0.04)",
        },
      }}
      placeholder={placeholder}
      variant="standard"
      sx={sx}
      fullWidth
    />
  );
};
