module.exports = {
  title: "Git Gosling",
  tagline: "Grow from gosling to goose with this Git guide.",
  url: "https://git-gosling.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "RoostingGeese", // Usually your GitHub org/user name.
  projectName: "git-gosling", // Usually your repo name.
  themeConfig: {
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
          href: "https://github.com/RoostingGeese/git-gosling",
          label: "Git Gosling project on GitHub",
          position: "right",
        },
      ],
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
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Git Gosling. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/RoostingGeese/git-gosling/edit/main/",
        },
        // Stop loading custom CSS.
        // theme: {
        //   customCss: require.resolve("./src/css/custom.css"),
        // },
      },
    ],
  ],
};
