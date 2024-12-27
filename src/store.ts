import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from './slices/canvasConfigSlice';
import shapesReducer from './slices/shapesSlice';
export const store = configureStore({
    reducer: {
        canvasConfig: canvasReducer,
        shapes: shapesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch