import ShipTitle from '../atoms/ShipTitle';
import ShipSubtitle from '../atoms/ShipSubtitle';
import ShipText from '../atoms/ShipText';

const Ship = ({ name, model, manufacturer }) => {
  return (
    <div className='ship-container'>
      <ShipTitle title={name} />
      <ShipSubtitle title={model} />
      <ShipSubtitle title={manufacturer} />

      <style jsx>{`
        .ship-container {
          width: 250px;
          height: 400px;
          margin: 10px;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          text-align: center;
          border: 1px solid #fff;
        }

        .ship-container * {
          margin-bottom: 15px;
        }

        @media (max-width: 1010px) {
          .ship-container {
            padding: 15px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Ship;
