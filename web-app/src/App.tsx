import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userState, removeUser, newUser } from './redux/features/userSlice';
import { StoreState } from './redux/store';
import axios from 'axios';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

interface IgetPrivateUserInfoResponse {
    auth: boolean
    authMessage: string
    username?: string
    message?: string
    user?: object | null
    refresh?: boolean
}

interface IrefreshTokenResponse {
    accessToken: string | null
    message: string
}


function App() {

    const dispatch = useDispatch();
    const user: userState = useSelector( (state: StoreState) => state.user );

    function refreshToken () {

        axios.get('http://localhost:5353/user/refreshToken').then((response)=>{

            const data = response.data as IrefreshTokenResponse;
            console.log(data.message);

            if(data.accessToken){
                console.log("old accessToken", localStorage.getItem("x-access-token"));
                console.log("new accessToken", data.accessToken);
                localStorage.setItem("x-access-token", data.accessToken);
            }

        }).catch(error=>{
            console.error(error);
        });

    }

    const fetchPrivateUserInfo = useCallback(() => {

        const accessToken = localStorage.getItem("x-access-token");

        axios.get('http://localhost:5353/user/getPrivateInfo', {headers: { Authorization: `Bearer ${accessToken}` }}).then((response)=>{

                const data = response.data as IgetPrivateUserInfoResponse;
                console.log(data.authMessage);

                if (!data.auth && data.refresh) {

                    refreshToken();

                } else if (data.user) {

                    console.log(data.message);
                    console.log(data.user);
                    dispatch(newUser({
                        info: data.user
                    }));

                } else {

                    console.log(data.message);
                    dispatch(removeUser());

                }

        }).catch(error => {
            console.error(error);
        });
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    
    useEffect (()=>{
        fetchPrivateUserInfo();
    }, [fetchPrivateUserInfo]);

    let router;
    
    if(user.logged)
        router = createBrowserRouter([
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
            {
                path: "/:username",
                element: <ProfilePage/>,
            }
        ]);
    else
        router = createBrowserRouter([

            {
                path: "/",
                element: <FirstPage/>
            },
            {
                path: "/:username",
                element: <>you can't access this area</>,
            }
            
        ]);
    
    return(
        <RouterProvider router={router}/>
    )   
    

}

export default App;
