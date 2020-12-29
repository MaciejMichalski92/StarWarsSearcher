const Star = ({ top, left, className }) => {
  return (
    <div className={className}>
      <style jsx>{`
        div {
          position: absolute;
          background-color: #fff;
        }
        .star {
          width: 1px;
          height: 1px;
          top: ${top}%;
          left: ${left}%;
        }
        .star1 {
          width: 2px;
          height: 2px;
          top: ${top}%;
          left: ${left}%;
          box-shadow: 0px 0px 5px #fff;
        }
      `}</style>
    </div>
  );
};

export default Star;
