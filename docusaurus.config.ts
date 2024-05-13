import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Algodema",
  tagline: "Information Technology Company",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://algodema.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "algodema", // Usually your GitHub org/user name.
  projectName: "algodemadotcom", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/blog",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/algodema-social-card.png",
    navbar: {
      title: "Algodema",
      logo: {
        alt: "Algodema Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "what-we-do", label: "What we do", position: "left" },
        { to: "about-us", label: "About us", position: "left" },
        { to: "blog", label: "Insights", position: "left" },
        { to: "contact", label: "Contact us", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Algodema",
          items: [
            {
              label: "About us",
              href: "http://www.algodema.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/algodema",
            },
            {
              label: "Github",
              href: "https://github.com/algodema",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Algodema`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
