import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "NeoHacks | Virtual";
  const description =
    "NeoHacks is a beginner friendly virtual hackathon taking place on July 30 - August 1, 2021.";
  const keywords = "hackathon, code, stem, hack, beginner";
  const author = "NeoHacks";
  const twitter = "@neohacks";
  const image = "/og-image.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="neohacks.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card"  content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {children}
    </Head>
  );
}
