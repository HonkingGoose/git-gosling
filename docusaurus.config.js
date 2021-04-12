module.exports = {
  title: "Git Gosling",
  tagline: "Grow from gosling to goose with this Git guide.",
  url: "https://git-gosling.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onDuplicateRoutes: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "HonkingGoose", // Usually your GitHub org/user name.
  projectName: "git-gosling", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      // Space reservation for announcementBar
      // See https://docusaurus.io/docs/api/themes/configuration#announcement-bar

      id: "announcement",
      content:
        "This site is being worked on, but there's a lot of good content already.",
      backgroundColor: "#FEF3C7",
      textColor: "#78350F",
      isCloseable: true,
    },
    navbar: {
      title: "Git Gosling",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/HonkingGoose/git-gosling",
          label: "Git Gosling project on GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",

      // Disable dark mode switch
      disableSwitch: true,

      // Ignore user system preference for color scheme
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: require("prism-react-renderer/themes/palenight"),
    },
    algolia: {
      apiKey: "3df69032480bd9ed420f9c80c2dbfd41",
      indexName: "git-gosling",

      // Contextual search is useful for versioned Docusaurus sites.
      // We're not using versioning, so this is turned of.
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} Git Gosling.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/HonkingGoose/git-gosling/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
