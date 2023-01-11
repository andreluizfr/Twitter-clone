import FirstPage from './pages/FirstPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoadingPage from './pages/LoadingPage';

import { useDispatch } from 'react-redux';
import { removeUser, newUser } from './redux/features/userSlice';

import axios from '../src/utils/axios';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import { useQuery } from 'react-query';

interface IFetchUserResponse {
    auth: boolean
    refresh?: boolean
    message: string
    user?: object | null
}

interface IrefreshTokenResponse {
    accessToken: string | null
    message: string
}


function App() {

    const dispatch = useDispatch();

    const { data, isFetching, isError, error } = useQuery('fetchUser', async () => {

        const accessToken = localStorage.getItem("x-access-token");

        if(accessToken){
            const response = await axios.get('/user/getPrivateInfo', {headers: { Authorization: `Bearer ${accessToken}` }});

            const data = response.data as IFetchUserResponse;
            console.log(data);
            
            if (data.refresh){
                try{ 
                    await refreshToken();
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                }
            }
            return data.user;
        }

        return null;
    
    }, {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 10 //10 segundos
    });

    async function refreshToken () {

        try{

            const response = await axios.get('/user/refreshToken');

            const data = response.data as IrefreshTokenResponse;
            console.log(data);

            if(data.accessToken) localStorage.setItem("x-access-token", data.accessToken);
            else dispatch(removeUser());

        } catch (error) {
            console.error(error);
        }

    }

    let router;
    
    if(isFetching)
        router = createBrowserRouter([
            {
                path: "*",
                element: <LoadingPage/>, 
            }
        ]);
    
    else if(isError)
        router = createBrowserRouter([
            {
                path: "*",
                element: <>{JSON.stringify(error)}</>,
            }
        ]);

    else if(data){
        dispatch(newUser({ info: data }));

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
    }   

    else if (data === null) {
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
    }
    else{
        router = createBrowserRouter([
            {
                path: "*",
                element: <LoadingPage/>,
            }
        ]);
    }

    
        
    
    return(
        <RouterProvider router={router}/>
    )   
    

}

export default App;
