import { Container, Grid, Skeleton } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LongCard } from "../components/common/cards/longCard";
import { ShortCard } from "../components/common/cards/shortCard";
import { WeatherCard } from "../components/common/cards/weatherCard";
import { HeaderText } from "../components/common/headerText";
import ScrollableTabsButtonAuto from "../components/common/tabs/ScrollableTabs";
import { get } from "../config/axiosClients";

const tabOption = ["All", "Android", "Cricket", "Apple", "Tech", "Tesla"];

interface Props {
  query: any;
}

const TopStories: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [tabState, setTabState] = useState<string>(query.tab);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [topNewsData, setTopNewsData] = useState<any>();
  const [longCardData, setLongCardData] = useState<any>();

  const handleTabRoute = (state: string) => {
    setTabState(state);
    router.replace(`/topstories?tab=${state}`);
  };

  const getNewsData = async () => {
    setLoading(true);
    await get(`top-headlines?country=in&q=${tabState}`).then((res) => {
      const filteredData = res.data.articles.filter((item: any) => {
        if (item.description && item.urlToImage && item.url) {
          return item;
        }
      });
      setLongCardData(filteredData[0]);
      setTopNewsData(filteredData.slice(1));
      setLoading(false);
    });
  };

  useEffect(() => {
    getNewsData();
  }, [tabState]);

  useEffect(() => {
    tabOption.forEach((item: string, index: number) => {
      if (item == router.query.tab) {
        setTabIndex(index);
      }
    });
  }, [router.query]);

  return (
    <Container maxWidth="xl">
      <HeaderText text="India Top Stories for you" />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <ScrollableTabsButtonAuto
            tabOption={tabOption}
            handleTabRoute={handleTabRoute}
            defaultIndex={tabIndex}
          />
          {loading ? (
            <Skeleton height={300} />
          ) : (
            <Grid container columnSpacing={1}>
              <Grid item xs={12}>
                <LongCard newsData={longCardData} />
              </Grid>
              {topNewsData?.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ShortCard data={item} />
                </Grid>
              ))}
            </Grid>
          )}
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
