import PersonePage from '../container/PersonePage/PersonePage';
import AnimePage from '../container/AnimePage/AnimePage';
import HomePage from '../container/HomePage/HomePage';
import FavouritesPage from '../container/FavouritesPage/FavouritesPage';

const routesConfig = [
  {
    path: '/',
    element: HomePage
  },
  {
    path: 'persones/',
    element: AnimePage
  },
  {
    path: 'persone/:id',
    element: PersonePage
  },
  {
    path: 'favourites',
    element: FavouritesPage
  }
]
export default routesConfig;