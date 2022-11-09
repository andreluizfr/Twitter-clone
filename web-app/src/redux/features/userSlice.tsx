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
    Logged: Boolean,
    info: null | IUserInfo
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        Logged: false,
        info: null
    } as userState,
    reducers: {
        newUser(state, action) {
            state.Logged = true;
            state.info = action.payload.info;
        },
        removeUser(state){
            state.Logged = false;
            state.info = null;
        },
        fetchFromCache(state){
            const accessToken = localStorage.getItem("x-access-token");
            const info = localStorage.getItem("info");

            if(info && accessToken){
                state.Logged = true;
                state.info = JSON.parse(info);
            }
        }
    }
});

export const { newUser, removeUser, fetchFromCache } = userSlice.actions;
export default userSlice.reducer;