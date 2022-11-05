import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface TabProps {
  tabOption: any;
  handleTabRoute: any;
  defaultIndex: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  tabsRoot: {
    minHeight: "auto !important",
    borderRadius: "8px !important",
  },
  tabIndicator: {
    height: "100% !important",
    zIndex: 0,
    borderRadius: "24px",
    background: `#fff !important`,
  },
  tabRoot: {
    minHeight: "auto !important",
    zIndex: 1,
    height: "30px",
    fontSize: "15px !important",
    fontWeight: `${500} !important`,
    padding: "0px 20px !important",
    color: `${theme.palette.primary.main} !important`,
    textTransform: "none",
    marginRight: "10px",
    border: "0.2px solid #FFFFFF",
    backgroundColor: `#fff !important`,
    borderRadius: "20px",
  },
  selected: {
    border: "none",
    color: `#fff !important`,
    background: `${theme.palette.primary.main} !important`,
  },
}));

const ScrollableTabsButtonAuto: React.FunctionComponent<TabProps> = ({
  tabOption,
  handleTabRoute,
  defaultIndex,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState<number | null>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(defaultIndex);
  }, [defaultIndex]);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ root: classes.tabsRoot, indicator: classes.tabIndicator }}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        {tabOption.map((item: string, index: number) => (
          <Tab
            key={index}
            label={item}
            onClick={() => handleTabRoute(item)}
            classes={{ root: classes.tabRoot, selected: classes.selected }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ScrollableTabsButtonAuto;
