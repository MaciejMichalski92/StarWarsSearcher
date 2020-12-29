import Button from '../atoms/Button';
import SearchByName from '../molecules/SearchByName';
import SearchByMovie from '../molecules/SearchByMovie';

const Aside = ({ dispatch }) => {
  return (
    <aside>
      <SearchByName dispatch={dispatch} />
      <SearchByMovie dispatch={dispatch} />
      <Button
        text={'All Starships'}
        handler={() => dispatch({ type: 'all starships' })}
      />
      <style jsx>{`
        aside {
          min-width: 300px;
          height: 100%;
          padding: 30px 10px;
          margin: 50px 20px 50px 0;
          background-color: #111;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        aside * {
          padding: 2px;
        }

        aside input:focus,
        button:focus {
          outline: none;
        }

        aside input,
        aside select {
          margin: 10px 0;
        }

        @media (max-width: 1010px) {
          aside {
            min-width: 270px;
            padding: 10px 10px;
            margin: 10px auto;
            align-items: flex-start;
          }
      `}</style>
    </aside>
  );
};

export default Aside;
