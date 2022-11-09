import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Banner from './Banner';
import PrimaryColumn from './PrimaryColumn';
import SidebarColumn from './SidebarColumn';
import { useSelector, useDispatch } from 'react-redux';
import { userState, newUser, removeUser } from '../../redux/features/userSlice';
import { StoreState } from '../../redux/store';
import axios from 'axios';
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

function HomePage () {

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
            } else {
                dispatch(removeUser());
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

                if (!data.auth && !data.refresh) {

                    dispatch(removeUser());

                } else if (!data.auth && data.refresh) {

                    refreshToken();

                } else if (data.user) {

                    console.log(data.message);
                    console.log(user);
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
        

    }, [dispatch]);

    
    useEffect (()=>{
        fetchPrivateUserInfo();
    }, []);
    

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });

    if(isSmallScreen)
        return (
            <div className='Home-page Home-page-flex-column'>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                </main>

                <div className="Fixed-bottom">
                    <Banner/>
                </div>

            </div>
        );

    if(isMediumScreen)
        return (
            <div className='Home-page Home-page-flex-row'>

                <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                </main>
                

            </div>
        );
    else
        return (
            <div className='Home-page Home-page-flex-row'>

            <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                    <SidebarColumn/>
                </main>

            </div>
        );
    

}

export default HomePage;