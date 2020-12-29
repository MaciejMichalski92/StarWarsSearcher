import { createContext } from 'react';
import Layout from '../components/templates/layout';

export const DataContext = createContext();

const Index = ({ starshipsData }) => {
  const starshipState = starshipsData;

  return (
    <DataContext.Provider value={starshipState}>
      <Layout />
    </DataContext.Provider>
  );
};

export const getStaticProps = async context => {
  const res = await fetch('https://swapi.dev/api/starships/').catch(
    err => new Error('błąd: ', err)
  );
  const starshipsDataFetch = await res.json();

  return {
    props: { starshipsData: starshipsDataFetch.results },
  };
};

export default Index;
