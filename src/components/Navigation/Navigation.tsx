import React, { FC } from 'react';

import css from './Navigation.module.css';

interface NavigationProps {
  prevPage: string;
  nextPage: string;
  onClick: (url: string) => void;
}

const Navigation: FC<NavigationProps> = ({ prevPage, nextPage, onClick }) => {
  return (
    <>
      <div className={css.btns}>
        <button className={css.btn} onClick={() => onClick(prevPage)}>
          Prev
        </button>
        <button className={css.btn} onClick={() => onClick(nextPage)}>
          Next
        </button>
      </div>
    </>
  );
};

Navigation.propTypes = {
  // text: PropTypes.string,
};
export default Navigation;

// import React, {FC} from 'react';

// import css from './Navigation.module.css';

// interface NavigationProps {
//   prevPage:string
//   nextPage:string
// }

// const Navigation:FC<NavigationProps> = ({
//   prevPage,
//   nextPage,
// }) => {
//   return (
//     <>
//       <div className={css.btns}>
//         {/* <button className={css.btn} onClick={()=>onClick(prevPage)}>Prev</button>
//         <button className={css.btn} onClick={()=>onClick(nextPage)}>Next</button> */}
//       </div>
//     </>
//   );
// };

// Navigation.propTypes = {
//   // text: PropTypes.string,
// };

// export default Navigation;
