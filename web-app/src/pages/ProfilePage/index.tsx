import Banner from '../../components/Banner';
import MainColumn from './MainColumn';
import SidebarColumn from '../../components/SidebarColumn';

import { useEffect, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { userState, newUser, removeUser } from '../../redux/features/userSlice';
import { StoreState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import axios from 'axios';


interface PublicUser {
    name: string
    username: string
    bio: string
    photoURL: string
}

interface IgetPublicUserInfoResponse {
    message: string
    user: PublicUser | null
}

function ProfilePage () {

    //const dispatch = useDispatch();
    //const user: userState = useSelector( (state: StoreState) => state.user );

    const [requestedUser, setRequestedUser] = useState <PublicUser| null> (null);

    let { username } = useParams();

    const fetchRequestedUserInfo = useCallback(() => {

        if(username){
            axios.post('http://localhost:5353/user/getPublicInfo', {username: username}).then((response)=>{

                const data = response.data as IgetPublicUserInfoResponse;
                console.log(data.message);
                
                if (data.user) {

                    console.log(data.user);
                    setRequestedUser(data.user);

                } 

            }).catch(error => {
                console.error(error);
            });
        }
        
    
    }, [username]);

    
    useEffect (()=>{
        fetchRequestedUserInfo();
    }, [fetchRequestedUserInfo]);
    

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });

    if(isSmallScreen)
        return (
            <div className='Home-page Home-page-flex-column'>

                <main className='Home-page-main-content'>
                    <MainColumn requestedUser={requestedUser}/>
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
                    <MainColumn requestedUser={requestedUser}/>
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
                    <MainColumn requestedUser={requestedUser}/>
                    <SidebarColumn/>
                </main>

            </div>
        );
    

}

export default ProfilePage;