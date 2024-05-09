import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

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
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
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
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Algodema",
      logo: {
        alt: "Algodema Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/blog", label: "Insights", position: "left" },
        { to: "/contact", label: "Contact", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Algodema",
          items: [
            {
              label: "Legal Notice",
              to: "/legal-notice",
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
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
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
