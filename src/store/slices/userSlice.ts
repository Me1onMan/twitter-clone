import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  id: string;
};

const initialState: TUserState = {
  id: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: { payload: TUserState }) {
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.id = undefined;
    },
  },
});

export const selectUser = (state: { user: TUserState }): TUserState => state.user;
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
