import './css/styles.css';

import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userState, login } from './redux/features/userSlice';
import { StoreState } from './redux/store';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";


function App() {

    const dispatch = useDispatch();
    const user: userState = useSelector( (state: StoreState) => state.user );

    let router;

    useEffect(()=>{
        const accessToken = localStorage.getItem('x-access-token');

        if(!user.logged && accessToken)
            dispatch(login());
    }, [dispatch]);
    
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
            }
            
        ]);
    
    return(
        <RouterProvider router={router}/>
    )   
    

}

export default App;
