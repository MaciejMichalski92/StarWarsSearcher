import dynamic from 'next/dynamic';
import { useState } from 'react';
import uniqid from 'uniqid';

// import Star from '../atoms/Star';
import { starGenerator } from '../../functions';

const DynamicComponentWithNoSSR = dynamic(() => import('../atoms/Star'), {
  ssr: false,
});
// dynamic component, only on Client side, due to Math.random problem in rehydration

const StarsContainer = () => {
  // starGenerator takes number of Stars objects
  const starsArrayGenerated = starGenerator(300);

  const [starsState] = useState(starsArrayGenerated);

  const stars = starsState.map(star => (
    <DynamicComponentWithNoSSR key={uniqid()} {...star} />
  ));

  return (
    <div className='stars-container'>
      {stars}
      <style jsx>{`
        .stars-container {
          width: 100%;
          min-height: 100%;
          position: absolute;
          top: 0%;
          left: 0%;
        }
      `}</style>
    </div>
  );
};

export default StarsContainer;
