import { createSlice } from "@reduxjs/toolkit";

export const longitudeSlice = createSlice({
    name: "longitude",
    initialState: {
        longitude: ""
    },
    reducers: {
        setLongitude: (state, action) => {
            state.longitude = action.payload
        }
    }
})

export const { setLongitude} = longitudeSlice.actions

export const longitude= state => state.longitude.longitude

export default longitudeSlice.reducer