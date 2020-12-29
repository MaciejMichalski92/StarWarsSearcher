const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <style jsx>{`
        h1 {
          text-align: center;
          min-width: 30rem;
          font-size: 3rem;
        }
        @media (min-width: 320px) {
          h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Title;
