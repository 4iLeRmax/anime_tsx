import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';

import { getApiResourse } from '../../utils';
import { SetFavouritesAnime, DeleteFavouritesAnime } from '../../index';
import { TFavAnime, initialAnimeState } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import css from './PersonePage.module.css';

const PersonePage = () => {
  const [anime, setAnime] = useState<TFavAnime>(initialAnimeState);
  const [inFav, setInFav] = useState<boolean>(false);
  const { id: personeId } = useParams<{ id: string }>();

  const FavouritesList = useAppSelector((state) => state.toolkit.favouriteAnimeList);
  const dispatch = useAppDispatch();
  // console.log(FavouritesList.personeId ? 'A' : 'B');

  const getResourse = async (url: string) => {
    const res = await getApiResourse(url);

    if (res) {
      // console.log(res.data);
      const animeList = {
        id: res.data.id.toString(),
        name: res.data.attributes.titles.en_jp,
        img: res.data.attributes.posterImage.small,
        headerImg: res.data.attributes.coverImage.large,
        info: res.data.attributes.description,
        rating: res.data.attributes.averageRating,
        ageRating: res.data.attributes.ageRatingGuide,
        youtubeId: res.data.attributes.youtubeVideoId,
      };
      // console.log(animeList);
      setAnime(animeList);
    }
  };
  useEffect(() => {
    (async () => {
      await getResourse(`https://kitsu.io/api/edge/anime/${personeId}`);
    })();
  }, []);

  useEffect(() => {
    FavouritesList &&
      FavouritesList.map((obj) => {
        obj.id === personeId && setInFav(true);
      });
  }, []);

  // console.log(inFav);

  const handleFavAnime = () => {
    if (inFav) {
      dispatch(DeleteFavouritesAnime(anime.id));
      setInFav(false);
    } else {
      dispatch(SetFavouritesAnime(anime));
      setInFav(true);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.headerImg}>
        <img src={anime.headerImg} />
      </div>

      <div className={css.wrapper}>
        <div className={css.main}>
          <div className={css.main__img}>
            <img src={anime.img} />
            <div className={css.rating}>{Math.round(Number(anime.rating * 10)) / 10}</div>
          </div>

          <div className={css.main__description}>
            <div className={css.header__name}>
              <div className={css.name}>{anime.name}</div>
              <div className={css.ageRating}>
                <b>Age rating:</b> {anime.ageRating}
              </div>
            </div>
            <div className={css.description}>{anime.info}</div>
          </div>
        </div>

        <div className={css.favIcon} onClick={handleFavAnime}>
          {inFav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              fill='#000'
              viewBox='0 0 512 512'
            >
              <path d='M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
              <path
                d='M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z'
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                stroke-linejoin='round'
                stroke-width='32'
              />
            </svg>
          )}
        </div>

        <div className={css.video}>
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${anime.youtubeId}`}
            title='YouTube video player'
            // frameborder={'0'}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

PersonePage.propTypes = {
  // text: PropTypes.string,
};

export default PersonePage;

// <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>

{
  /* <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" fill="#fff" viewBox="0 0 512 512"><path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z"/></svg> */
}
