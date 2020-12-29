import SWLogo from '../molecules/SWLogo';
import Title from '../atoms/Title';

const Navbar = () => {
  return (
    <div className='container'>
      <SWLogo />
      <Title text={'Spaceship finder'} />
      <style jsx>{`
        .container {
          overflow: hidden;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 90%;
          margin: 0 auto;
          padding: 10px 0;
          justify-content: space-between;
        }

        @media (max-width: 700px) {
          .container {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
