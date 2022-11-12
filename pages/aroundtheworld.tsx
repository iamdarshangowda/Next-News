import { Container, Grid, Skeleton, Box, Theme } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LongCard } from "../components/common/cards/longCard";
import { ShortCard } from "../components/common/cards/shortCard";
import { WeatherCard } from "../components/common/cards/weatherCard";
import { HeaderText } from "../components/common/headerText";
import ScrollableTabsButtonAuto from "../components/common/tabs/ScrollableTabs";
import { getRealTimeNews, getWeather } from "../config/axiosClients";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { debounce } from "../utils/dataModifiers";
import { CustomInputFeild } from "../components/common/input-feilds/custom-input-feild";
import { PrimaryButton } from "../components/common/buttons/primaryButton";

const tabOption = ["All", "Russia", "Climate", "Economy", "Science", "Oil"];

interface Props {
  query: any;
}

const AroundTheWorld: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [tabState, setTabState] = useState<string>(query.tab);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<any>();

  const [topNewsData, setTopNewsData] = useState<any>();
  const [longCardData, setLongCardData] = useState<any>();

  const handleTabRoute = (state: string) => {
    setTabState(state);
    router.replace(`/aroundtheworld?tab=${state}`);
  };

  const getNewsData = async (searchQuery: string) => {
    setLoading(true);
    let params = {};
    let endPoint = "";
    if (searchQuery) {
      endPoint = "search";
      params = { query: searchQuery, country: "US", lang: "en" };
    } else {
      endPoint = "top-headlines";
      params = { country: "US", lang: "en" };
    }
    await getRealTimeNews(`${endPoint}`, params).then((res) => {
      const filteredData = res.data.data.filter((item: any) => {
        if (item.photo_url) {
          return item;
        }
      });
      setLongCardData(filteredData[0]);
      setTopNewsData(filteredData.slice(1));

      setLoading(false);
    });
  };

  useEffect(() => {
    getNewsData(tabState);
  }, [tabState]);

  useEffect(() => {
    tabOption.forEach((item: string, index: number) => {
      if (item == router.query.tab) {
        setTabIndex(index);
      }
    });
  }, [router.query]);

  const getWeatherData = async () => {
    setLoading(true);
    await getWeather("weather", {
      location: "delhi",
      format: "json",
      u: "f",
    }).then((res) => {
      setWeatherData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const handleSearchDebounce = debounce((value: any) => getNewsData(value));

  const handleCovidNews = () => {};

  return (
    <Container maxWidth="xl">
      <Box mt={1} mb={2} display={"flex"} justifyContent={"space-between"}>
        <CustomInputFeild
          placeholder="Search for news.."
          sx={{ maxWidth: "495px", height: "48px" }}
          onchange={handleSearchDebounce}
          icon={<SearchIcon />}
        />
        <PrimaryButton
          text="Latest news on"
          subText="Covid 19"
          loading={loading}
          variant={"outlined"}
          onclick={handleCovidNews}
          sx={{
            maxWidth: "256px",
            height: "46px",
            borderRadius: "8px",
            display: { sm: "none", md: "flex" },
            background: (theme: Theme) => theme.palette.background.default,
          }}
          icon={<ArrowForwardIcon />}
          textColor={(theme: Theme) => theme.palette.primary.main}
        />
      </Box>
      <HeaderText text="World Top Stories for you" />
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
          {weatherData && <WeatherCard data={weatherData} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AroundTheWorld;

AroundTheWorld.getInitialProps = async ({ query }) => {
  return { query };
};
