import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [] as string[],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            const ids = state.ids;
            ids.splice(ids.indexOf(action.payload.id))
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite; 
export default favoritesSlice.reducer;