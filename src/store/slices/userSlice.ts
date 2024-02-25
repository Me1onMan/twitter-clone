import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  telephone: string;
};

const initialState: TUserState = {
  id: undefined,
  name: undefined,
  email: undefined,
  birthdate: undefined,
  telephone: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: { payload: TUserState }) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.birthdate = action.payload.birthdate;
      state.telephone = action.payload.telephone;
    },
    removeUser(state) {
      state.id = undefined;
      state.name = undefined;
      state.email = undefined;
      state.birthdate = undefined;
      state.telephone = undefined;
    },
  },
});

export const selectUser = (state: { user: TUserState }): TUserState => state.user;
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
