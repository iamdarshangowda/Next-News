import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, IconButton, Stack, Theme } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Link from "next/link";
import moment from "moment";

interface LongCardProps {
  newsData: any;
}

export const LongCard: React.FunctionComponent<LongCardProps> = ({
  newsData,
}) => {
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
          {newsData?.title}
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.custom.description }}
          px={1}
        >
          {newsData?.description}
        </Typography>
        <Stack mt={1} direction={"row"} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box p={"4px"}>
            <Typography
              fontSize={12}
              fontWeight={400}
              sx={{ color: (theme: Theme) => theme.custom.label }}
            >
              {newsData?.source?.name}
            </Typography>
          </Box>
          <Box p={"4px"}>
            <Typography
              fontSize={12}
              fontWeight={400}
              sx={{ color: (theme: Theme) => theme.custom.label }}
            >
              {moment(newsData?.publishedAt).startOf("hour").fromNow()}
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
          src={newsData?.urlToImage}
          alt="green iguana"
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};
