import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/hooks';

import css from './FavouritesPage.module.css';

const FavouritesPage = () => {
  const FavouritesList = useAppSelector(state=> state.toolkit.favouriteAnimeList);
  console.log(FavouritesList);
  // const search = useSelector(selectSearch);
  // console.log(search);


  return (
    <div className={css.wrapper}>
      FavouritesPage
      <ul className={css.anime__cards}>
        {FavouritesList &&
          FavouritesList.map((obj) => (
            <li className={css.anime__card} key={obj.id}>
              <Link style={{ textDecoration: 'none' }} to={`/persone/${obj.id}`}>
                <img className={css.card__img} src={obj.img} alt='' />
                <span className={css.anime__name}>{obj.name}</span>
                {/* <div className={css.rating}>{obj.rating}</div> */}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

FavouritesPage.propTypes = {
  // text: PropTypes.string,
};

export default FavouritesPage;
