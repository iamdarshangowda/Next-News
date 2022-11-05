import { Theme, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  text: string;
}

export const HeaderText: React.FunctionComponent<HeaderProps> = ({ text }) => {
  return (
    <Typography
      fontSize={20}
      fontWeight={700}
      sx={{ color: (theme: Theme) => theme.palette.primary.main }}
      mb={2}
    >
      {text}
    </Typography>
  );
};
