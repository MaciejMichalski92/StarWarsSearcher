import StarsContainer from '../components/organisms/StarsContainer';
import LinkA from '../components/molecules/LinkA';
import Title from '../components/atoms/Title';

export default function FourOhFour() {
  return (
    <>
      <StarsContainer />
      <div>
        <Title text='Far away from your solar system, Mandalorian.' />
        <LinkA path='/' text='Go Back' />
        <style jsx>{`
          div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </div>
    </>
  );
}
