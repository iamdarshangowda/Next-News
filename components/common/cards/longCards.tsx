import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Theme } from "@mui/material";
import Image from "next/image";

export const LongCards = () => {
  return (
    <Grid
      container
      sx={{
        maxWidth: 750,
        background: (theme: Theme) => theme.custom.white,
        borderRadius: "8px",
      }}
      my={2}
      p={1}
    >
      <Grid item xs={12} sm={9}>
        <Typography gutterBottom variant="h5" component="div" px={1} pt={1}>
          Samsung Galaxy F22 launched in India: Price, features, other details
        </Typography>
        <Typography variant="body2" color="text.secondary" px={1}>
          Samsung Galaxy F22 has been launched in India. The new smartphone has
          been priced in the mid-range segment. The new smartphone is powered by
          a MediaTek chipset and features a high refresh rate AMOLED display.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} p={1}>
        <img
          width={"100%"}
          height={"100%"}
          src="/test/iphone.jpg"
          alt="green iguana"
        />
      </Grid>
      <Grid xs={12}>
        <Button size="small" color="primary">
          Share
        </Button>
      </Grid>
    </Grid>
  );
};
