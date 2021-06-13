import Head from 'next/head';

import Search from '../components/search/search';
import Results from '../components/results/results';

const apiEndPoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;

export async function getServerSideProps() {
  const res = await fetch(apiEndPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { meals = [] } = data;

  console.log(data.meals);
  return (
    <>
      <Head>
        <title>Recipes For All</title>
        <meta name="description" content="A simple recipe website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Results />
    </>
  );
}
