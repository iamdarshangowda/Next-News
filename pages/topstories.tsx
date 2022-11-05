import { Box, Container, Grid, Stack, Theme, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LongCard } from "../components/common/cards/longCard";
import { ShortCard } from "../components/common/cards/shortCard";
import { WeatherCard } from "../components/common/cards/weatherCard";
import { HeaderText } from "../components/common/headerText";
import ScrollableTabsButtonAuto from "../components/common/tabs/ScrollableTabs";
import { get } from "../config/axiosClients";

const tabOption = [
  "All",
  "Android",
  "Cricket",
  "iPhone",
  "Tech",
  "Mental Health",
];

interface Props {
  query: any;
}

const TopStories: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [tabState, setTabState] = useState<string>(query.tab);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabRoute = (state: string) => {
    setTabState(state);
    router.replace(`/topstories?tab=${state}`);
  };

  const getNewsData = async () => {
    await get(`top-headlines?country=in`).then((res) =>
      console.log(res.data.body)
    );
  };

  useEffect(() => {
    getNewsData();
  }, []);

  useEffect(() => {
    tabOption.forEach((item: string, index: number) => {
      if (item == router.query.tab) {
        setTabIndex(index);
      }
    });
  }, [router.query]);

  return (
    <Container maxWidth="xl">
      <HeaderText text="Top Stories for you" />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <ScrollableTabsButtonAuto
            tabOption={tabOption}
            handleTabRoute={handleTabRoute}
            defaultIndex={tabIndex}
          />
          <Grid container columnSpacing={1}>
            <Grid item xs={12}>
              <LongCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ShortCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ShortCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <WeatherCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopStories;

TopStories.getInitialProps = async ({ query }) => {
  return { query };
};
