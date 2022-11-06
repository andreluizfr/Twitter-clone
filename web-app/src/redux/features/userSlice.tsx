import { createSlice } from '@reduxjs/toolkit';

export interface IUserInfo {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    photoURL?: string;
    bio?: string;
}
export interface userState{
    isLoggedIn: Boolean,
    info: null | IUserInfo
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        info: null
    } as userState,
    reducers: {
        newUser(state, action) {
            state.isLoggedIn = true;
            state.info = action.payload.info;
        },
        removeUser(state){
            state.isLoggedIn = false;
            state.info = null;
        },
        fetchFromCache(state){
            const accessToken = localStorage.getItem("x-access-token");
            const info = localStorage.getItem("info");

            if(info && accessToken){
                state.isLoggedIn = true;
                state.info = JSON.parse(info);
            }
        }
    }
});

export const { newUser, removeUser, fetchFromCache } = userSlice.actions;
export default userSlice.reducer;