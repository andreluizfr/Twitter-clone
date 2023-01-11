import './styles.css';

import Banner from '../../components/Banner';
import MainColumn from '../../components/ProfileMainColumn';
import SidebarColumn from '../../components/SidebarColumn';

import { useEffect, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//import { useSelector, useDispatch } from 'react-redux';
//import { userState, newUser, removeUser } from '../../redux/features/userSlice';
//import { StoreState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import axios from 'axios';


interface IProfileData {
    name: string
    username: string
    bio: string
    photoURL: string
}

interface IfetchProfileResponse {
    message: string
    user: IProfileData | null
}

function ProfilePage () {

    //const dispatch = useDispatch();
    //const user: userState = useSelector( (state: StoreState) => state.user );

    const [profile, setProfile] = useState <IProfileData| null> (null);

    let { username } = useParams();

    const fetchProfile = useCallback(() => {

        if(username){
            axios.post('http://localhost:5353/user/getPublicInfo', {username: username}).then((response)=>{

                const data = response.data as IfetchProfileResponse;
                console.log(data.message);
                
                if (data.user) {

                    console.log(data.user);
                    setProfile(data.user);

                } 

            }).catch(error => {
                console.error(error);
            });
        }
        
    
    }, [username]);

    
    useEffect (()=>{
        fetchProfile();
    }, [fetchProfile]);
    

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });

    if(isSmallScreen)
        return (
            <div className='Profile-page Profile-page-flex-column'>

                <main className='Profile-page-main-content'>
                    <MainColumn profile={profile}/>
                </main>

                <div className="Fixed-bottom">
                    <Banner/>
                </div>

            </div>
        );

    if(isMediumScreen)
        return (
            <div className='Profile-page Profile-page-flex-row'>

                <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Profile-page-main-content'>
                    <MainColumn profile={profile}/>
                </main>
                

            </div>
        );
    else
        return (
            <div className='Profile-page Profile-page-flex-row'>

            <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Profile-page-main-content'>
                    <MainColumn profile={profile}/>
                    <SidebarColumn/>
                </main>

            </div>
        );
    

}

export default ProfilePage;