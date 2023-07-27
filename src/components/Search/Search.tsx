import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useAppDispatch,useAppSelector } from '../../hooks/hooks';

import { SetSearchValue } from '../..';

import css from './Search.module.css';


const Search = ()=>{
  const searchValue = useAppSelector(state=> state.toolkit.searchValue)
  const [searchV, setSearchV] = useState('');
  const dispatch = useAppDispatch();

  // useEffect(()=>{
  //   // dispatch(SetSearchValue(searchV));
  //   console.log(searchValue)
  // }, []);

  // useEffect(()=>{
  //   // dispatch(SetSearchValue(searchValue));
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    // setSearchV(e.target.value);
    dispatch(SetSearchValue(e.target.value));
  }

  return(
    <>
      <input 
        placeholder='Search...'
        type="text" 
        className={css.input}
        value={searchValue}
        onChange={handleChange}
      />
    </>
  );
}

Search.propTypes = {
  // text: PropTypes.string,
}

export default Search;