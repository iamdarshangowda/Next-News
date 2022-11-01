import React, { useState } from "react";
import { Box, Typography, Theme } from "@mui/material";
import { PrimaryButton } from "./common/buttons/primaryButton";
import { useRouter } from "next/router";

export const IntroPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleContinue = () => {
    setLoading(true);
    router.push("/topstories");
    setLoading(false);
  };

  return (
    <Box
      display={"grid"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      height="100vh"
    >
      <Box>
        <Box
          display={"flex"}
          gap={3}
          alignItems={{ xs: "center", sm: "flex-end" }}
        >
          <img src={"/news.png"} width="100px" height="115px" />
          <Box>
            <Typography
              fontSize={{ xs: "4rem", sm: "6rem" }}
              fontWeight={700}
              color={(theme: Theme) => theme.palette.secondary.main}
              lineHeight={1}
            >
              Next News
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={700}
              color={(theme: Theme) => theme.palette.secondary.light}
              pl={"4px"}
            >
              Now the power of knowledge on your screens.
            </Typography>
          </Box>
        </Box>

        <Box mt={5}>
          <PrimaryButton
            text="Continue"
            loading={loading}
            variant={"contained"}
            onclick={handleContinue}
            sx={{
              width: "200px",
              height: "48px",
              borderRadius: "24px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
