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
    hideableSidebar: true,
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
      appId: 'OJ1F1A18XG',
      apiKey: "e4cdbe86b3ee18467d318358eae13a4b",
      indexName: "git-gosling",

      // Contextual search is useful for versioned Docusaurus sites.
      // We're not using versioning, so this is turned off.
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
          editUrl: "https://github.com/HonkingGoose/git-gosling/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
