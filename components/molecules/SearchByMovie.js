import { useState } from 'react';

import Button from '../atoms/Button';
import Label from '../atoms/Label';

const SearchByMovie = ({ dispatch }) => {
  const [selected, setInput] = useState('http://swapi.dev/api/films/1/');

  const handleSelect = e => {
    setInput(prev => {
      prev.selected = `${e.target.value}`;
    });
  };

  return (
    <>
      <Label title='In Movies:' htmlFor='movies' />
      <select id='movies' value={selected} onChange={handleSelect}>
        <option value='http://swapi.dev/api/films/4/'>
          Episode I: The Phantom Menace
        </option>
        <option value='http://swapi.dev/api/films/5/'>
          Episode II: Attack of the Clones
        </option>
        <option value='http://swapi.dev/api/films/6/'>
          Episode III: Revenge of the Sith
        </option>
        <option value='http://swapi.dev/api/films/1/'>
          Episode IV: A New Hope
        </option>
        <option value='http://swapi.dev/api/films/2/'>
          Episode V: The Empire Strikes Back
        </option>
        <option value='http://swapi.dev/api/films/3/'>
          Episode VI: Return of the Jedi
        </option>
      </select>
      <Button
        text='Find My Starship'
        handler={() => dispatch({ type: 'by movie', film: selected })}
      />
      <style jsx>{`
        select {
          padding: 3px;
          margin: 10px 0;
        }
      `}</style>
    </>
  );
};

export default SearchByMovie;
