import uniqid from 'uniqid';

import StarsContainer from './StarsContainer';
import Ship from '../molecules/Ship';
import Button from '../atoms/Button';

const Main = ({ dispatch, state }) => {
  const ships = state.map((ship, id) => <Ship key={uniqid()} {...ship} />);

  return (
    <main>
      <StarsContainer />
      {ships}
      {state.length > 0 ? null : (
        <Button
          text={'Back'}
          handler={() => dispatch({ type: 'all starships' })}
        />
      )}
      <style jsx>
        {`
          main {
            position: relative;
            min-height: 100vh;
            min-width: 50%;
            flex-grow: 1;
            padding: 10px;
            margin: 50px 20px;
            background-color: #111;
            border-radius: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
          }

          @media (max-width: 1010px) {
            main {
              padding: 15px 10px;
              margin-bottom: 80px auto;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Main;
