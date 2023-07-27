import { useEffect, useState, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getApiResourse } from '../../utils/index';
import { TFavAnime } from '../../types';

import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import Skeleton from '../../components/Skeleton/Skeleton';
import PreloaderAnimes from '../../components/PreloaderAnimes/PreloaderAnimes';
import AnimeList from '../../components/AnimeList/AnimeList';

import css from './AnimePage.module.css';

const AnimePage: FC = () => {
  const [animes, setAnimes] = useState<TFavAnime[]>([]);
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const searchValue = useAppSelector((state) => state.toolkit.searchValue);

  const getResourse = async (url: string) => {
    setIsLoading(true);
    const res = await getApiResourse(url);

    if (res) {
      const animeList = res.data.map((obj: any) => {
        //any это плохо <------------------
        return {
          id: obj.id,
          name: obj.attributes.titles.en, //=================================
          img: obj.attributes.posterImage.small,
          info: obj.attributes.description,
          rating: obj.attributes.averageRating,
          ageRating: obj.attributes.ageRatingGuide,
        };
      });

      setAnimes(animeList);
      setPrevPage(res.links.prev);
      setNextPage(res.links.next);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getResourse(
        `https://kitsu.io/api/edge/${
          searchValue !== '' ? `/anime?filter[text]=${searchValue}` : `/anime`
        }`,
      );
    })();
  }, [searchValue]);

  useEffect(() => {
    (async () => {
      await getResourse(`https://kitsu.io/api/edge/anime`);
    })();
  }, []);

  return (
    <div className={css.wrapper}>
      <Search />
      <Navigation nextPage={nextPage} prevPage={prevPage} onClick={getResourse} />
      <ul className={css.anime__cards}>
        {isLoading ? <PreloaderAnimes /> : <AnimeList animes={animes} />}
      </ul>
    </div>
  );
};
export default AnimePage;

// import { useEffect, useState, FC } from 'react';

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { getApiResourse, useGetAPI } from '../../utils/';
// import { TFavAnime } from '../../types';

// import Navigation from '../../components/Navigation/Navigation';
// import Search from '../../components/Search/Search';
// import PreloaderAnimes from '../../components/PreloaderAnimes/PreloaderAnimes';
// import AnimeList from '../../components/AnimeList/AnimeList';

// import css from './AnimePage.module.css';


// const AnimePage: FC = () => {
//   const [animes, setAnimes] = useState<TFavAnime[]>([]);
//   const [prevPage, setPrevPage] = useState('');
//   const [nextPage, setNextPage] = useState('');
//   // const [isLoading, setIsLoading] = useState(true);
//   const searchValue = useAppSelector((state) => state.toolkit.searchValue);

//   const { data, error, status } = useGetAPI('animes', 'https://kitsu.io/api/edge/anime');
//   // console.log(res?.data[0]);
//   // console.log(res?.links);


//   return (
//     <div className={css.wrapper}>
//       <Search />
//       <Navigation nextPage={nextPage} prevPage={prevPage} />
//       <ul className={css.anime__cards}>
//         {/* {isLoading ? <PreloaderAnimes /> : animes && <AnimeList animes={animes} />} */}
//         <AnimeList animes={data?.data[0]} />
//       </ul>
//     </div>
//   );
// };
// export default AnimePage;
