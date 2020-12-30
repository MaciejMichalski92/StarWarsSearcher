import { useContext, useEffect, useReducer } from 'react';

import Aside from '../organisms/Aside';
import Main from '../organisms/Main';
import { DataContext } from '../../pages/';

const Section = () => {
  const starshipContextData = useContext(DataContext);
  const initialState = [...starshipContextData];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'all starships':
        return initialState;
      case 'by name':
        return initialState.filter(ship =>
          ship.name.toLowerCase().includes(action.value.toLowerCase())
        );
      case 'by movie':
        return initialState.filter(ship => {
          for (let i = 0; i < ship.films.length; i++) {
            if (ship.films[i] == action.film) {
              return ship;
            }
          }
        });
      default:
        throw new Error('error in reducer');
    }
  };

  const [stateStarships, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <Aside state={stateStarships} dispatch={dispatch} />
      <Main dispatch={dispatch} state={stateStarships} />
      <style jsx>{`
        section {
          width: 95%;
          min-height: 100vh;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 20px;
          background-color: #000;
          border-radius: 10px;
        }

        @media (max-width: 1010px) {
          section {
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Section;
