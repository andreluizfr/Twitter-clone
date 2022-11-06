import { useEffect } from 'react';

import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';

import { useSelector, useDispatch } from 'react-redux';
import { userState, fetchFromCache } from './redux/features/userSlice';
import { StoreState } from './redux/store';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";


function App() {

    const dispatch = useDispatch();
    const user:userState = useSelector( (state: StoreState) => state.user );

    //pegando conteudo do localStorage
    useEffect(()=>{
        dispatch(fetchFromCache());
    }, [dispatch])

    let router;
    
    if(user.isLoggedIn)
        router = createBrowserRouter([
            {
                path: "/",
                element: <HomePage/>,
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
