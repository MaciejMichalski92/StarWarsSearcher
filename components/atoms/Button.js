const Button = ({ text, handler }) => {
  return (
    <button onClick={handler}>
      {text}
      <style jsx>{`
        button {
          display: block;
          background-color: #000;
          color: #fff;
          border: 1px solid #fff;
          padding: 5px 10px;
          margin: 10px 20px 50px 0;
          z-index: 1;
        }

        button:focus {
          outline: none;
        }

        button:hover {
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default Button;
