import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
      custom: {
        description:string;
        label: string;
        placeHolder:string;
      };
    }
    interface ThemeOptions {
      custom?: {
        description?:string;
        label?: string;
        placeHolder?:string;
      };
    }
  }


const theme = createTheme({
    typography: {
fontFamily:["Roboto", "sans-serif"].join(",")
    } ,
custom: {
description: "rgba(7,45,75,0.6)",
label: "rgba(7,45,75,0.4)",
placeHolder: "rgba(7,45,75,0.3)"
},
    palette: {
        primary: {
          main: "#072D4B",
        },
        secondary: {
          light: "#2F9FF8",
          main: "#0768B5",
        },
        error: {
          main: "#E14D2A",
        },
        warning: {
          light: "#FF8383",
          main: "#FF3030",
        },
        background: {
          default: "#f4f9f8;",
        },
      },
})

export default theme