import { createSlice } from "@reduxjs/toolkit";

export const coordinatesSlice = createSlice({
    name: "coordinates",
    initialState: {
        latitude: "",
        longitude: ""
    },
    reducers: {
        setLatitude: (state, action) => {
            state.latitude = action.payload
        },
        setLongitude: (state, action) => {
            state.longitude = action.payload
        }
    }
})

export const { setLatitude, setLongitude} = coordinatesSlice.actions

export const latitude= state => state.coordinates.latitude

export const longitude = state => state.coordinates.longitude

export default coordinatesSlice.reducer