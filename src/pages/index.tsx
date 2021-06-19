import mainBg from "!file-loader!./mainBg.svg";
import wave from "!file-loader!./wave.svg";
import commonBg from "!file-loader!@site/src/bg/common.svg";
import Link from "@docusaurus/Link";
import { css, keyframes } from "@emotion/css";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
} from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import Layout from "@site/src/component/Layout";
import Image from "@theme/IdealImage";
import React, { ReactNode } from "react";

const bannerHeight = "calc(100vh - var(--ifm-navbar-height) - 126px)";

function IntroCard({
  img,
  title,
  content,
}: {
  img: string;
  title?: ReactNode;
  content?: ReactNode;
}) {
  const width = 360;
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      borderRadius={4}
      overflow="hidden"
      gap={2}
      alignItems="stretch"
      textAlign="center"
      maxWidth={width}
      height="auto"
      bgcolor="var(--text-bg)"
    >
      <Box overflow="hidden" sx={{ aspectRatio: "360 / 240" }}>
        <Image img={img} max={width} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        alignItems="stretch"
        textAlign="center"
        gap={2}
        pt={3}
        pb={4}
        pr={2}
        pl={2}
      >
        <Typography variant="h6">{title}</Typography>
        {typeof content === "string" ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
}

const keyFramesBgRotate = keyframes`
  from {
    background-position: 1024px;
  }
  to {
    background-position: 3096px;
  }
`;

const cssBannerContainer = css`
  label: BannerContainer;
  position: relative;
  overflow: hidden;
`;

const cssBannerAurora = css`
  label: BannerAurora;
  background-image: linear-gradient(
    to right,
    #333333,
    #333333,
    #333333,
    #333333,
    #34343a,
    #323642,
    #2c394a,
    #223c52,
    #223c52,
    #223c52,
    #223c52,
    #2c394a,
    #323642,
    #34343a,
    #333333,
    #333333,
    #333333,
    #333333
  );
  background-size: 2048px;
  background-repeat: revert;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${keyFramesBgRotate} 20s linear infinite;
`;

const cssWave = css`
  label: Wave;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left;
`;

const keyFramesHue = keyframes`
  label: Hue;
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const cssHue = css`
  label: cssHue;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${keyFramesHue} 18s linear infinite;
`;

const cssBannerMain = css`
  label: Main;
  width: 100%;
  aspect-ratio: 3900 / 2300;
  max-height: max(300px, ${bannerHeight});
  max-width: calc(${bannerHeight} * 3900 / 2300);
  background: url(${mainBg});
  margin: auto;
  position: relative;
  margin: auto;
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
`;

export default function Home() {
  const theme = useTheme();
  return (
    <Layout>
      <div className={cssBannerContainer}>
        <div className={cssHue}>
          <div className={cssBannerAurora} />
          <div className={cssWave} />
        </div>
        <div className={cssBannerMain} />
      </div>
      <Box
        pt={3}
        pb={10}
        gap={3}
        display="flex"
        flexDirection="column"
        alignItems="flex-center"
        sx={{ background: `url(${commonBg})`, backgroundSize: "cover" }}
      >
        <Container>
          <Box
            width="fit-content"
            bgcolor="var(--text-bg)"
            borderRadius={4}
            margin="auto"
            pt={3}
            pb={3}
            pr={2}
            pl={2}
            gap={4}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" gap={1} alignItems="center">
              <CalendarToday />
              <Typography component="div">{"10/15, 10/16"}</Typography>
            </Box>
            <Button
              variant="contained"
              disabled
              className={css`
                // ssr issue
                &:disabled {
                  color: rgba(255, 255, 255, 0.3);
                  background-color: rgba(255, 255, 255, 0.12);
                }
              `}
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="inherit">{"即刻加入"}</Typography>
                <Typography
                  className={css`
                    font-size: 0.5em;
                  `}
                >
                  {"敬請期待"}
                </Typography>
              </Box>
            </Button>
          </Box>
        </Container>
        <Container>
          <Box
            gap={3}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
            sx={{
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              },
              "&>*": {
                flex: 1,
                height: "100%",
                minWidth: "min(360px, 100%)",
              },
            }}
          >
            <IntroCard
              img={require("./aboutUs.png")}
              title="關於我們"
              content="Domain Driven Design Taiwan(DDD Taiwan) 是一個鼓勵所有熱愛解決問題的大家一起群體共創的地方，在這裡我們將試著進行更多的交流活動，一起探索從 Problem Domain 去催生出 Solution Domain。"
            />
            <IntroCard
              img={require("./pastYear.png")}
              title="2020 年會"
              content={
                <>
                  <Typography>
                    {
                      "第一屆的年會，我們的主軸會希望能讓更多人知道何謂領域驅動設計(DDD)，以及讓更多人意識到其實 DDD 真的不是只是一票技術人員寫寫程式，關注程式碼本身結構性的問題而已，所以以演講與工作坊並進的方式來進行。去年我們邀請到來自 DDD_Eu 、中國等地的講者，並且同時結合台灣對於領域驅動設計長年有研究並且有意願與大家分享的老朋友們，一起與大家共同探討這個已經出生了 10 多年的老方法能給大家帶來的新體驗與感受。"
                    }
                  </Typography>
                  <Button variant="contained" component={Link} to="/conf2020">
                    回顧 2020
                  </Button>
                </>
              }
            />
            <IntroCard
              img={require("./thisYear.png")}
              title="今年年會"
              content="Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
