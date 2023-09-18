import { createSlice } from "@reduxjs/toolkit";

export const latitudeSlice = createSlice({
    name: "latitude",
    initialState: {
        latitude: ""
    },
    reducers: {
        setLatitude: (state, action) => {
            state.latitude = action.payload
        }
    }
})

export const { setLatitude} = latitudeSlice.actions

export const latitude= state => state.latitude.latitude

export default latitudeSlice.reducer