import React from 'react';

const Buttons = ({ setCard, setRand }) => {
  const handleOnClickNext = () => {
    setCard();
  };

  const handleOnClickRand = () => {
    setRand();
  };

  return (
    <div className='button-wrapper'>
      <button className='button' onClick={() => handleOnClickRand()}>
        Random
      </button>
      <button className='button' onClick={() => handleOnClickNext()}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
