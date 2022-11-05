import { Box, Divider, Theme, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export const WeatherCard = () => {
  return (
    <Box
      maxWidth={422}
      sx={{
        background: (theme: Theme) => theme.custom.white,
        borderRadius: "8px",
      }}
      p={2}
    >
      <Box display={"flex"} justifyContent={"space-between"} mb={1}>
        <Typography
          fontSize={15}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
        >
          Bangalore, India
        </Typography>
        <LocationCityIcon />
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box display={"flex"} justifyContent={"space-between"} mb={1}>
        <Box>
          <Typography
            fontSize={15}
            fontWeight={400}
            sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          >
            Sunny
          </Typography>
          <Typography
            fontSize={26}
            fontWeight={700}
            sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          >
            32C
          </Typography>
        </Box>
        <WbSunnyIcon />
      </Box>
      <Box display={"flex"} justifyContent={"flex-start"} gap={4}>
        <Typography
          fontSize={12}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
        >
          Celsius
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
        >
          Fahrenheit
        </Typography>
      </Box>
    </Box>
  );
};
