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
        login(state){
            state.logged = true;
        },
        newUser(state, action) {
            state.info = action.payload.info;
        },
        removeUser(state){
            state.logged = false;
            state.info = null;
            localStorage.clear();
        }
    }
});

export const {login,  newUser, removeUser } = userSlice.actions;
export default userSlice.reducer;