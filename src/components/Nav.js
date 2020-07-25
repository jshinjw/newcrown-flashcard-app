import React from 'react';

const Nav = () => {
  const showNc = event => {
    event.preventDefault();

    if (event.target.parentElement.classList.contains('nav-item1')) {
      document.querySelector('.nc1').classList.remove('hide');
      document.querySelector('.nc2').classList.add('hide');
      document.querySelector('.nc3').classList.add('hide');
    } else if (event.target.parentElement.classList.contains('nav-item2')) {
      document.querySelector('.nc2').classList.remove('hide');
      document.querySelector('.nc1').classList.add('hide');
      document.querySelector('.nc3').classList.add('hide');
    } else if (event.target.parentElement.classList.contains('nav-item3')) {
      document.querySelector('.nc3').classList.remove('hide');
      document.querySelector('.nc1').classList.add('hide');
      document.querySelector('.nc2').classList.add('hide');
    }
  };

  return (
    <div className='nav'>
      <ul className='nav-items'>
        <li className='nav-item nav-item1'>
          <a href='/' onClick={showNc}>
            New Crown 1
          </a>
        </li>
        <li className='nav-item nav-item2'>
          <a href='/' onClick={showNc}>
            New Crown 2
          </a>
        </li>
        <li className='nav-item nav-item3'>
          <a href='/' onClick={showNc}>
            New Crown 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
