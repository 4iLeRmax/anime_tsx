import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { TFavAnime } from '../../types';
import css from './AnimeList.module.css';

interface AnimeListProps {
  animes: TFavAnime[]
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {  
  return (
    <>
      {animes.map((obj) => (
        <li className={css.anime__card} key={obj.id}>
          <Link style={{ textDecoration: 'none' }} to={`/persone/${obj.id}`}>
            <img className={css.card__img} src={obj.img} alt='' />
            <span className={css.anime__name}>{obj.name}</span>
            {/* <span className={css.anime__name}>{obj.name.en ? obj.name.en : obj.name.en_jp}</span> */}
          </Link>
        </li>
      ))}
    </>
  );
};

export default AnimeList;
