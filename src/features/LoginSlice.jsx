import { createSlice } from "@reduxjs/toolkit";

export const loginslice=createSlice({
    name:'login',

    initialState:{
        user:null,
        loading:false,
        error:null,
        usertoken:null,
        success:false, 
        isLoggedIn:false,    
    },

    reducers: {
        auth: (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload;
          state.error = null;
          state.success = true;
          console.log(state.user);
        },
        logout: (state) => {
          state.isLoggedIn = false;
          state.success=false, 
          state.user = null;
          state.error = null;
        },
        setError: (state, action) => {
          state.error = action.payload;
          state.success=false
        },
      },
}
)
export const { auth, logout, setError } = loginslice.actions;
export default loginslice.reducer;