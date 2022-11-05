import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, IconButton, Stack, Theme } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Link from "next/link";
import moment from "moment";

interface ShortCardProps {
  data: any;
}

export const ShortCard: React.FunctionComponent<ShortCardProps> = ({
  data,
}) => {
  return (
    <Grid
      container
      sx={{
        maxWidth: 422,
        minHeight: 200,
        background: (theme: Theme) => theme.custom.white,
        borderRadius: "8px",
      }}
      my={1}
      p={1}
    >
      <Grid item xs={12} md={7}>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank">
            <Typography
              fontSize={17}
              fontWeight={500}
              sx={{
                color: (theme: Theme) => theme.palette.primary.main,
                cursor: "pointer",
              }}
              px={1}
              pt={1}
            >
              {data?.title.substring(0, 40)}
            </Typography>
          </a>
        </Link>
        <Typography
          fontSize={14}
          fontWeight={400}
          sx={{ color: (theme: Theme) => theme.custom.description }}
          px={1}
        >
          {data?.description.substring(0, 150)}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} p={1}>
        <img
          width={"100%"}
          height={"100%"}
          src={data?.urlToImage}
          alt="green iguana"
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      </Grid>
      <Stack mt={1} direction={"row"} spacing={{ xs: 1, sm: 2 }}>
        <Box p={"4px"}>
          <Typography
            fontSize={12}
            fontWeight={400}
            sx={{ color: (theme: Theme) => theme.custom.label }}
          >
            {data?.source?.name}
          </Typography>
        </Box>
        <Box p={"4px"}>
          <Typography
            fontSize={12}
            fontWeight={400}
            sx={{ color: (theme: Theme) => theme.custom.label }}
          >
            {moment(data?.publishedAt).startOf("hour").fromNow()}
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
  );
};
