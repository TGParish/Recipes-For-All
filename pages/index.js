import Head from 'next/head';

import Search from '../components/search/search';
import Results from '../components/results/results';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes For All</title>
        <meta name="description" content="A simple recipe website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <Results />
    </>
  );
}
