import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface UserState {
  id: string;
  uid: string;
  display_name: string;
  picture_url: string;
}

const initialState: UserState = {
  id: "",
  uid: "",
  display_name: "",
  picture_url: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        uid: string;
        display_name: string;
        picture_url: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.uid = action.payload.uid;
      state.display_name = action.payload.display_name;
      state.picture_url = action.payload.picture_url;
    }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
