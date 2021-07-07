import { useEffect, useState } from 'react';
import Search from '../search/search';
import DisplayRecipeCards from '../displayrecipecards/displayrecipecards';
import classes from './results.module.scss';

export default function Results() {
  const [recipes, setRecipes] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getRecipes() {
      if (!query) return;
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();

        setRecipes(data.meals);
        // console.log(data.meals);
      } catch (error) {
        console.error(error);
      }
    }

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearchResult(e.target.value);
    // console.log(searchResult);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchResult);
  };

  // Sets search result to data from local storage
  useEffect(() => {
    const data = localStorage.getItem('search-state');
    const parsedData = JSON.parse(data);
    setSearchResult(parsedData);
  }, []);

  // Sets query results to data from local storage to display cards
  useEffect(() => {
    const data = localStorage.getItem('search-state');
    const parsedData = JSON.parse(data);
    setQuery(parsedData);
  }, []);

  // Saves search result to local storage
  useEffect(() => {
    localStorage.setItem('search-state', JSON.stringify(searchResult));
  });

  return (
    <>
      <Search search={searchResult} handler={updateSearch} submit={getSearch} />
      {query && recipes && <DisplayRecipeCards display={recipes} />}
      {!recipes && <h1 className={classes.query_message}>No recipes found</h1>}
    </>
  );
}
