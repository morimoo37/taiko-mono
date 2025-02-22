import Footer from "./components/Footer";
import ThemedImage from "./components/ThemedImage";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

export default {
  banner: {
    key: "banner",
    text: (
      <a href="/docs/guides" target="_blank">
        📌 Alpha-3 is here! Get started →
      </a>
    ),
  },
  chat: {
    link: "https://discord.gg/taikoxyz",
  },
  darkMode: false,
  docsRepositoryBase:
    "https://github.com/taikoxyz/taiko-mono/blob/main/packages/website",
  editLink: {
    text: "Edit this page ↗",
  },
  // TODO: we should add the feedback link, check if nextra fixed it: https://github.com/shuding/nextra/issues/2067
  feedback: {
    content: null,
  },
  footer: {
    component: Footer,
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://taiko.xyz${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "Taiko"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "A decentralized, Ethereum-equivalent ZK-Rollup."
          }
        />
        <meta
          property="og:image"
          content={"/images/Taiko_social_media_preview.png"}
        />
        <link rel="icon" href="/images/favicon.svg" />
      </>
    );
  },
  logo: <ThemedImage />,
  navbar: {
    extraContent: (
      <>
        <ThemeToggle />
      </>
    ),
  },
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: 323,
  project: {
    link: "https://github.com/taikoxyz",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Taiko",
    };
  },
  sidebar: {
    autoCollapse: true,
  },
};
