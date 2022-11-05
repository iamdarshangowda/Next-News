import React from "react";
import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";

interface ButtonProps {
  text: string;
  loading: boolean;
  onclick: any;
  sx?: any;
  fullWidth?: boolean;
  variant: any;
  icon?: any;
  textColor?: any;
  subText?: string;
}

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({
  text,
  loading,
  onclick,
  sx,
  fullWidth,
  variant,
  icon,
  textColor,
  subText,
}) => {
  return (
    <LoadingButton
      variant={variant}
      loading={loading}
      size="large"
      onClick={onclick}
      sx={{ ...sx, boxShadow: "none" }}
      fullWidth={fullWidth ? fullWidth : false}
    >
      <Typography
        fontSize={"15px"}
        fontWeight={400}
        variant="body1"
        component={"p"}
        textTransform={"none"}
        pr={1}
        sx={{ color: (theme: Theme) => theme.palette.primary.main }}
      >
        {text}
      </Typography>
      {subText && (
        <Typography
          fontSize={"15px"}
          fontWeight={500}
          variant="body1"
          component={"p"}
          textTransform={"none"}
          pr={1}
          sx={{ color: (theme: Theme) => theme.palette.secondary.light }}
        >
          {subText}
        </Typography>
      )}
      {icon}
    </LoadingButton>
  );
};
