import React from "react";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";

interface ButtonProps {
  text: string;
  loading: boolean;
  onclick: any;
  sx?: any;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({
  text,
  loading,
  onclick,
  sx,
  fullWidth,
}) => {
  return (
    <LoadingButton
      variant="contained"
      loading={loading}
      size="large"
      onClick={onclick}
      sx={{ ...sx, borderRadius: "24px", boxShadow: "none" }}
      fullWidth={fullWidth ? fullWidth : false}
    >
      <Typography
        fontSize={"16px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};
