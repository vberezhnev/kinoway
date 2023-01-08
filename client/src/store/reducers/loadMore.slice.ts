import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmsLimit: 20,
    seriesLimit: 20,
    imagesLimit: 10,
};

export const loadSlice = createSlice({
    name: "load",
    initialState,
    reducers: {
        loadMoreFilms: (state) => {
            state.filmsLimit += 10;
        },
        loadMoreSeries: (state) => {
            state.seriesLimit += 10;
        },
        loadMoreImages: (state) => {
            state.imagesLimit += 10;
        },
    },
});

export const { loadMoreFilms, loadMoreSeries, loadMoreImages } =
    loadSlice.actions;

export const loadReducer = loadSlice.reducer;
