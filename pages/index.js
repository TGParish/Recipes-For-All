import Head from 'next/head';

import Results from '../components/results/results';

export default function Home() {
  return (
    <>
      <Head>
        <title>No Bloat Recipes</title>
        <meta
          name="description"
          content="A no bloat website without all the fluff and ads"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Results />
    </>
  );
}