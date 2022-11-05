import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, IconButton, Stack, Theme } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Image from "next/image";

export const LongCard = () => {
  return (
    <Grid
      container
      sx={{
        maxWidth: 850,
        background: (theme: Theme) => theme.custom.white,
        borderRadius: "8px",
      }}
      my={1}
      p={1}
    >
      <Grid item xs={12} sm={9}>
        <Typography
          fontSize={17}
          fontWeight={500}
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          px={1}
          pt={1}
        >
          Samsung Galaxy F22 launched in India: Price, features, other details
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.custom.description }}
          px={1}
        >
          Samsung Galaxy F22 has been launched in India. The new smartphone has
          been priced in the mid-range segment. The new smartphone is powered by
          a MediaTek chipset and features a high refresh rate AMOLED display.
        </Typography>
        <Stack mt={1} direction={"row"} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box p={"4px"}>
            <Typography
              fontSize={12}
              fontWeight={400}
              sx={{ color: (theme: Theme) => theme.custom.label }}
            >
              The Mint
            </Typography>
          </Box>
          <Box p={"4px"}>
            <Typography
              fontSize={12}
              fontWeight={400}
              sx={{ color: (theme: Theme) => theme.custom.label }}
            >
              15 mins ago
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ padding: "0 !important" }}>
              <BeenhereIcon
                sx={{
                  fontSize: "16px",
                  color: (theme: Theme) => theme.palette.primary.main,
                }}
              />
              <Typography
                fontSize={15}
                fontWeight={400}
                ml={1}
                sx={{ color: (theme: Theme) => theme.palette.primary.main }}
              >
                Read Later
              </Typography>
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={{ padding: "0 !important" }}>
              <IosShareIcon
                sx={{
                  fontSize: "16px",
                  color: (theme: Theme) => theme.palette.primary.main,
                }}
              />
              <Typography
                fontSize={15}
                fontWeight={400}
                ml={1}
                sx={{
                  color: (theme: Theme) => theme.palette.primary.main,
                }}
              >
                Share
              </Typography>
            </IconButton>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={3} p={1}>
        <img
          width={"100%"}
          height={"100%"}
          src="/test/iphone.jpg"
          alt="green iguana"
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};
