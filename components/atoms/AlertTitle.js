const AlertTitle = ({ text }) => {
  return (
    <h1>
      {text}
      <style jsx>{`
        h1 {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100%;
          font-size: 2rem;
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </h1>
  );
};

export default AlertTitle;
