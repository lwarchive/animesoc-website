import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <meta
          name="title"
          content="Home - Anime and Manga Society of Royal Holloway, University of London"
        />
        <meta
          name="description"
          content="CS Student, programmer, and keen Dr.Pepper drinker"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="block-all-mixed-content"
        />
        <meta
          name="og:title"
          content="Anime and Manga Society of Royal Holloway, University of London"
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://rhulani.me/" />
        <meta name="og:image" content="https://rhulani.me/images/logo.png" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:width" content="370" />
        <meta name="og:image:height" content="370" />
        <meta
          name="og:description"
          content="Welcome to the RHUL Anime and Manga Society website"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Anime and Manga Society of Royal Holloway, University of London"
        />
        <meta
          name="twitter:description"
          content="Welcome to the RHUL Anime and Manga Society website"
        />
        <meta
          name="twitter:image"
          content="https://rhulani.me/images/logo.png"
        />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta
          name="apple-mobile-web-app-title"
          content="Anime and Manga Society of Royal Holloway, University of London"
        />
        <meta
          name="application-name"
          content="Anime and Manga Society of Royal Holloway, University of London"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e45" />
        <meta name="msapplication-TileColor" content="#f59e45" />
        <meta name="theme-color" content="#f59e45" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
