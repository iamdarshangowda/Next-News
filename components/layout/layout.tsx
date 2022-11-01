import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "./sidebar";
import { useRouter } from "next/router";

export const Layout = (props: any) => {
  const router = useRouter();
  return (
    <Box>
      <Box component="main">{props.children}</Box>
      {router.pathname === "/" ? null : <Sidebar />}
    </Box>
  );
};