import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSliceReducer";

export const store = configureStore({
    reducer: {
        themeKey : themeSliceReducer,
    },
});