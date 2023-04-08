import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/reducer';

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      count: Number
    }
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;