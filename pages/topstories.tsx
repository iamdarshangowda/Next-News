import { Box, Container, Theme, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LongCards } from "../components/common/cards/longCards";
import { HeaderText } from "../components/common/headerText";
import ScrollableTabsButtonAuto from "../components/common/tabs/ScrollableTabs";

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

  useEffect(() => {
    tabOption.forEach((item: string, index: number) => {
      if (item == router.query.tab) {
        setTabIndex(index);
      }
    });
  }, [router.query]);

  return (
    <Container maxWidth="xl">
      <Box>
        <HeaderText text="Top Stories for you" />
        <ScrollableTabsButtonAuto
          tabOption={tabOption}
          handleTabRoute={handleTabRoute}
          defaultIndex={tabIndex}
        />
        <LongCards />
      </Box>
    </Container>
  );
};

export default TopStories;

TopStories.getInitialProps = async ({ query }) => {
  return { query };
};
