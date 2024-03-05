import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import sampleReducer from "@store/slice/sample.slice";
const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
