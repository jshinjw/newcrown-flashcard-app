import React from 'react';
import Flashcard from './components/Flashcard';
import nc3 from './nc3';
import './app.css';

// const sample = {
//   id: 1,
//   eng: 'able',
//   jp: '『be able to』で～することができる',
// };

const flashcard = nc3[0];
const randomFlashcard = nc3[Math.floor(Math.random() * nc3.length)];

function App() {
  console.log(randomFlashcard);
  return (
    <div className='container'>
      <Flashcard flashcard={randomFlashcard} />
    </div>
  );
}

export default App;
