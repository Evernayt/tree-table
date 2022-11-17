import { configureStore } from '@reduxjs/toolkit';
import OutlaySlice from './reducers/OutlaySlice';

const store = configureStore({
  reducer: {
    outlay: OutlaySlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;