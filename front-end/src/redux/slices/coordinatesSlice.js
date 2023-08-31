import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
  position: {},
  status: "idle",
  erorror: ""
}

const getPosition = (options) => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
};

export const getCoordinates = createAsyncThunk(
  "coordinates/getCoordinates",
  async () => {
    let options = {
      enableHighAccuracy: true,
    };

    const position = await getPosition(options);
    return position
  }
);

export const coordinatesSlice= createSlice({
  name: "position",
  initialState,
  reducers:{

  },
  extraReducers(builder) {
    builder
      .addCase(getCoordinates.pending, (state, action) =>{
        state.status = "loadind"
      })
      .addCase(getCoordinates.fulfilled, (state, action) => {
        state.status ="succeeded"
        state.position = {...state.position, ...action.payload}
      })
      .addCase(getPosition.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
    // [getCoordinates.pending]: (state, action) => {
    //   state.loading = true
    // },
    // [getCoordinates.fulfilled]: (state, action) => {
    //   state.loading = false
    //   console.log("payload: ",action.payload)
    //   state.latitude = action.payload.lat
    //   state.longitude = action.payload.long
    // },
    // [getCoordinates.rejected]: (state, action) => {
    //   state.loading = false
    // }
  },
});



export const position = (state) => state.position.position;


export default coordinatesSlice.reducer;
