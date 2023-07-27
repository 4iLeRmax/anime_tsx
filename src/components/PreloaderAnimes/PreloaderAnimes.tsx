import {FC} from 'react';

import Skeleton from '../Skeleton/Skeleton';

import css from './PreloaderAnimes.module.css';

const PreloaderAnimes:FC = ()=>{
  return(
    <>
      {[...Array(10)].map((_, index) => <Skeleton key={index} />)}
    </>
  );
}

PreloaderAnimes.propTypes = {
  // text: PropTypes.string,
}

export default PreloaderAnimes;