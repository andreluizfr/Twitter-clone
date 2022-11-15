import { createSlice } from '@reduxjs/toolkit';

export interface IUserInfo {
    name: string;
    username: string;
    email: string;
    birthDate: string;
    password: string;
    photoURL?: string;
    bio?: string;
}
export interface userState{
    logged: Boolean,
    info: null | IUserInfo
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        logged: false,
        info: null
    } as userState,
    reducers: {
        newUser(state, action) {
            state.logged = true;
            state.info = action.payload.info;
        },
        removeUser(state){
            state.logged = false;
            state.info = null;
            localStorage.clear();
        }
    }
});

export const { newUser, removeUser } = userSlice.actions;
export default userSlice.reducer;