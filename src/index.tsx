import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App/App';

import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { TFavAnime } from './types';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type InitialState = {
  searchValue: string;
  favouriteAnimeList: TFavAnime[];
};

const initialState: InitialState = {
  searchValue: '',
  favouriteAnimeList: [],
};

const toolkitReducer = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    SetSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    SetFavouritesAnime(state, action: PayloadAction<TFavAnime>) {
      state.favouriteAnimeList.push(action.payload);
    },
    DeleteFavouritesAnime(state, action: PayloadAction<string>) {
      state.favouriteAnimeList = state.favouriteAnimeList.filter(
        <T extends { id: string }>(obj: T): boolean => obj.id !== action.payload,
      );
    },
  },
});

export const { SetSearchValue, SetFavouritesAnime, DeleteFavouritesAnime } = toolkitReducer.actions;

const store = configureStore({
  reducer: {
    toolkit: toolkitReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
  </QueryClientProvider>,
);
