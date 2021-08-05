import {configureStore} from '@reduxjs/toolkit';

export type AppStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch


export const store = configureStore({
    reducer: {  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            immutableCheck: false
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

