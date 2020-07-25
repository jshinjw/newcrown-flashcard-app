import React, { useState } from 'react';
import Flashcard from './Flashcard';
import Buttons from './Buttons';
import nc1 from '../nc1';
import nc2 from '../nc2';
import nc3 from '../nc3';

const defaultNc1 = nc1[0];
const randomNc1 = nc1[Math.floor(Math.random() * nc1.length)];
const defaultNc2 = nc2[0];
const randomNc2 = nc2[Math.floor(Math.random() * nc2.length)];
const defaultNc3 = nc3[0];
const randomNc3 = nc3[Math.floor(Math.random() * nc3.length)];

const FlashcardDisplay = () => {
  const [cardNc1, setCardNc1] = useState(defaultNc1);
  const [cardNc2, setCardNc2] = useState(defaultNc2);
  const [cardNc3, setCardNc3] = useState(defaultNc3);

  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(1);

  const [rand1, setRand1] = useState(randomNc1);
  const [rand2, setRand2] = useState(randomNc2);
  const [rand3, setRand3] = useState(randomNc3);

  const [randIndex1, setRandIndex1] = useState(
    Math.floor(Math.random() * nc1.length)
  );
  const [randIndex2, setRandIndex2] = useState(
    Math.floor(Math.random() * nc2.length)
  );
  const [randIndex3, setRandIndex3] = useState(
    Math.floor(Math.random() * nc3.length)
  );

  const randCard1 = () => {
    setRand1(nc1[randIndex1]);
    setRandIndex1(Math.floor(Math.random() * nc1.length));
  };

  const randCard2 = () => {
    setRand2(nc2[randIndex2]);
    setRandIndex2(Math.floor(Math.random() * nc2.length));
  };

  const randCard3 = () => {
    setRand3(nc2[randIndex3]);
    setRandIndex3(Math.floor(Math.random() * nc3.length));
  };

  const nextCard1 = () => {
    if (index1 === nc1.length) {
      setIndex1(0);
    } else {
      setIndex1(index1 + 1);
      setCardNc1(nc1[index1]);
    }
  };

  const nextCard2 = () => {
    if (index2 === nc2.length) {
      setIndex2(0);
    } else {
      setIndex2(index2 + 1);
      setCardNc2(nc2[index2]);
    }
  };

  const nextCard3 = () => {
    if (index3 === nc3.length) {
      setIndex3(0);
    } else {
      setIndex3(index3 + 1);
      setCardNc3(nc3[index3]);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='nc'>
          <div className='nc1 hide'>
            <h3>New Crown 1</h3>
            <Flashcard flashcard={rand1} />
            <Flashcard flashcard={cardNc1} />
            <Buttons setCard={nextCard1} setRand={randCard1} />
          </div>
          <div className='nc2 hide'>
            <h3>New Crown 2</h3>
            <Flashcard flashcard={rand2} />
            <Flashcard flashcard={cardNc2} />
            <Buttons setCard={nextCard2} setRand={randCard2} />
          </div>
          <div className='nc3 hide'>
            <h3>New Crown 3</h3>
            <Flashcard flashcard={rand3} />
            <Flashcard flashcard={cardNc3} />
            <Buttons setCard={nextCard3} setRand={randCard3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDisplay;
