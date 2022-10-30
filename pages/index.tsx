import { Container } from "@mui/material";
import Head from "next/head";
import { IntroPage } from "../components/introPage";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next News</title>
        <meta name="description" content="News around the world" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <IntroPage />
    </Container>
  );
}
