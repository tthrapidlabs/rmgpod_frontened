import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import imageReducer from '../features/image/imageSlice'


const store = configureStore({
  reducer: {
    image: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['image/setImage'],
        ignoredPaths: ['image.image'],
      },
    }),
})

export default store
