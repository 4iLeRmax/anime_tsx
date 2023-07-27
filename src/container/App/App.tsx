import Header from '../../components/Header/Header';
import PersonePage from '../PersonePage/PersonePage';

import routesConfig from '../../routes/routesConfig';

import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

import css from './App.module.css';
import { FC } from 'react';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              // exact={route.exact}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Router>
      {/* <Header /> */}
    </div>
  );
}

export default App;
