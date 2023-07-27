import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

import css from './Header.module.css';

const Header = () => {
  const FavouritesList = useAppSelector(state=> state.toolkit.favouriteAnimeList);

  return (
    <div className={css.container}>
      <ul className={css.nav}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/persones'>Animes</NavLink>
        </li>
        <li>
          <NavLink to='/favourites' className={css.favourites}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              fill='#000'
              viewBox='0 0 512 512'
            >
              <path d='M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z' />
            </svg>
            {FavouritesList.length > 0 && (
              <div className={css.favourites__count}>
                {FavouritesList.length > 99 ? '99+' : FavouritesList.length}
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
  // text: PropTypes.string,
};

export default Header;
