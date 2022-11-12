import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "./sidebar";
import { useRouter } from "next/router";

export const Layout = (props: any) => {
  const router = useRouter();
  return (
    <Box display="flex">
      <Box>{router.pathname === "/" ? null : <Sidebar />}</Box>
      <Box component="main" width="100%">
        {props.children}
      </Box>
    </Box>
  );
};
