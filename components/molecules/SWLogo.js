const SWLogo = () => {
  return (
    <>
      <div className='img-container'>
        <img src='/images/SW-no-bg.png' alt='Star Wars logo' />
      </div>
      <style jsx>{`
        .img-container {
          max-width: 30rem;
          min-width: 10rem;
        }
        .img-container img {
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default SWLogo;
