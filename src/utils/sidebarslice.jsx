import { createSlice } from "@reduxjs/toolkit";

const sidebar = createSlice({
  name: "sidebar",
  initialState: {
    showsidebar: true,
    Video:null,
    Videodetail:null
  },
  reducers: {
    menu: (state) => {
      state.showsidebar = !state.showsidebar;
    },
    addvideo:(state,action)=>{
      state.Video=action.payload;
    },
    addvideodetail:(state,action)=>{
      state.Videodetail=action.payload;
    },
  },
});

export const { menu,addvideo ,addvideodetail} = sidebar.actions;
export default sidebar.reducer;
