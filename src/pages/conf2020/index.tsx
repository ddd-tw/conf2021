// eslint-disable-next-line import/no-webpack-loader-syntax
import bg from "!file-loader!./bg.svg";
// eslint-disable-next-line import/no-webpack-loader-syntax
import commonBg from "!file-loader!@site/src/bg/common.svg";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  TabsProps,
  Typography,
} from "@material-ui/core";
import A from "@site/src/component/A";
import Dark from "@site/src/component/Dark";
import FootPrintsVertical from "@site/src/component/FootPrintVertical/FootPrintsVertical";
import Layout from "@site/src/component/Layout";
import Rocket from "@site/src/icon/Rocket";
import throttle from "lodash/throttle";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";

const title = "回顧 2020";
const description =
  "第一屆的年會，我們的主軸會希望能讓更多人知道何謂領域驅動設計(DDD)，以及讓更多人意識到其實 DDD 真的不是只是一票技術人員寫寫程式，關注程式碼本身結構性的問題而已，所以預計會有演講與工作坊並進的方式來進行。今年我們預計有機會邀請到來自 DDD_Eu 、中國等地的講者，並且同時結合台灣對於領域驅動設計長年有研究並且有意願與大家分享的老朋友們，一起與大家共同探討這個已經出生了10多年的老方法能給大家帶來的新體驗與感受。";

const breakingWidth = 640;
const isServer = !ExecutionEnvironment.canUseDOM;
const initWidth = isServer ? breakingWidth + 1 : window.innerWidth;

const cssSplash = css`
  label: Splash;
  background: url(${bg});
  background-position: center;
  background-size: cover;
`;

const cssTabLabel = css`
  label: TabLabel;
  text-align: left;
`;

const cssContainerNoPadding = css`
  label: ShowBox;
  margin-left: 0;
  margin-right: 0;
  padding-right: 0;
  padding-left: 0;
`;

const cssIframe = css`
  label: Iframe;
  aspect-ratio: 560 / 315;
  flex: 1;
  @media (max-width: ${breakingWidth}px) {
    width: 100%;
  }
`;

const cssArticle = css`
  label: Article;
  background: url(${commonBg});
  background-size: cover;
`;

const cssBackLink = css`
  label: BackLink;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    transform: scale(1.2);
  }
`;

const videoIds = ["ezEALMvRxJY", "WZzdLfewgfw"];

export default memo(() => {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(initWidth);
  const wide = width > breakingWidth;
  const refYT = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isServer) return;
    if (!refYT.current) return;
    const player = new YT.Player(refYT.current, {
      height: "100%",
      width: "100%",
      videoId: videoIds[value],
      playerVars: {
        autoplay: 1,
      },
      events: {
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            setValue((value) => (value + 1) % videoIds.length);
          }
        },
      },
    });
    return () => {
      player.destroy();
    };
  }, [value]);
  useEffect(() => {
    if (isServer) return;
    let cancel = false;
    const handleResize = () => {
      if (cancel || isServer) return;
      setWidth(window.innerWidth);
    };
    handleResize();
    const throttleResize = throttle(handleResize, 300);
    window.addEventListener("resize", throttleResize);
    return () => {
      cancel = true;
      window.removeEventListener("resize", throttleResize);
    };
  }, []);
  const handleChange: TabsProps["onChange"] = useCallback(
    (e: any, value: number) => {
      setValue(value);
    },
    []
  );
  return (
    <Layout title={title} description={description}>
      <Dark>
        <div className={cssSplash}>
          <Box pt={3} pb={18}>
            <Container
              maxWidth="md"
              className={wide ? undefined : cssContainerNoPadding}
            >
              <Box
                display="flex"
                flexWrap="nowrap"
                flexDirection={wide ? "row" : "column"}
              >
                <Tabs
                  orientation={wide ? "vertical" : "horizontal"}
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Conf 2020 Recap Videos"
                >
                  <Tab
                    label={
                      <div className={cssTabLabel}>
                        {"Day 1"}
                        <br />
                        {"演講"}
                      </div>
                    }
                  />
                  <Tab
                    label={
                      <div className={cssTabLabel}>
                        {"Day 2"}
                        <br />
                        {"工作坊"}
                      </div>
                    }
                  />
                </Tabs>
                <div className={cssIframe} ref={refYT} />
              </Box>
            </Container>
          </Box>
        </div>
        <div className={cssArticle}>
          <Box mt={-12}>
            <FootPrintsVertical size={3} />
          </Box>
          <Container>
            <Box
              pt={3}
              pb={3}
              display="flex"
              flexWrap="nowrap"
              flexDirection="column"
              gap={3}
            >
              <Typography variant="h1">{title}</Typography>
              <Typography>{description}</Typography>
            </Box>
          </Container>
          <FootPrintsVertical size={4} />
          <Box
            width="fit-content"
            pt={6}
            pb={24}
            m="auto"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <A href="https://conf2020.ddd-tw.com">
              <Button variant="contained" size="large" className={cssBackLink}>
                <Typography variant="h4" component="span">
                  回到 2020
                </Typography>
              </Button>
            </A>
            <FootPrintsVertical size={4} />
            <Link to="/">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={cssBackLink}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  fontSize="6em"
                  alignItems="center"
                  gap={1}
                >
                  <Rocket fontSize="inherit" />
                  <Typography variant="h3" component="span">
                    前進 2021
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Box>
        </div>
      </Dark>
    </Layout>
  );
});
