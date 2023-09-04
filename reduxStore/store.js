import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import thunk from 'redux-thunk'; // Import redux-thunk

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk], // Use redux-thunk as middleware
});

export const persistor = persistStore(store);

// You can still dispatch actions as before
// store.dispatch(userAction({ username: 'Adebola', previlege: 'Admin' }));
// store.dispatch(todoAction('do this'));
// store.dispatch(todoAction('do that'));

// export default store;
