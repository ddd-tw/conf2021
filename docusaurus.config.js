const community = [
  {
    label: "Twitter",
    href: "https://twitter.com/DddTaiwan",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ddd_twig",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/DDDCommunity.tw",
  },
  {
    label: "Facebook Group",
    href: "https://www.facebook.com/groups/dddtaiwan",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCydw7dbEksG3axEMjHy4BxQ",
  },
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DDD TW Conference 2021",
  tagline: "Footprints of the pioneer",
  url: "https://conf2021.ddd-tw.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ddd-tw-community", // Usually your GitHub org/user name.
  projectName: "2021-ddd-conference", // Usually your repo name.
  themeConfig: {
    image: "img/ogImage.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "DDD TW Conference 2021",
      logo: {
        alt: "DDD TW Conference 2021",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/conf2020",
          label: "回顧 2020",
          position: "right",
        },
        // { to: "/speakers", label: "講者介紹", position: "right" },
        // { to: "/agenda", label: "議程", position: "right" },
        // { to: "/workshop", label: "工作坊", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "聯絡資訊",
          items: [
            {
              label: "Email",
              href: "mailto:dddconference@ddd-tw.com",
            },
            {
              label: "Messenger",
              href: "https://m.me/DDDCommunity.tw",
            },
          ],
        },
        {
          title: "關於我們",
          items: community,
        },
      ],
      copyright: `© Copyright 2021 DDD Taiwan`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC:wght@400;700&display=swap",
  ],
  scripts: ["https://www.youtube.com/iframe_api"],
  plugins: ["@docusaurus/plugin-ideal-image"],
};
