import './styles.css';
import Tweet from '../../../components/Tweet';
import ThemedButton from '../../../components/ThemedButton';
import Text from '../../../components/Text';
import {FaArrowLeft} from 'react-icons/fa';
import {useRef, useEffect, useState} from 'react';

interface PublicUser {
    name: string
    username: string
    bio: string
    photoURL: string
}

interface PrimaryColumnProps {
    requestedUser: PublicUser | null
}


function MainColumn({requestedUser}: PrimaryColumnProps) {

    const tweetsButton = useRef <HTMLDivElement | null>(null);
    const tweetsAndRepliesButton = useRef <HTMLDivElement| null>(null);
    const mediaButton = useRef <HTMLDivElement| null>(null);
    const likesButton = useRef <HTMLDivElement| null>(null);

    const [tweetsSection, setTweetsSection] = useState(1);

    useEffect(()=>{

        tweetsButton.current?.setAttribute('active', 'true');

        tweetsButton.current?.setAttribute('section', '1');
        tweetsAndRepliesButton.current?.setAttribute('section', '2');
        mediaButton.current?.setAttribute('section', '3');
        likesButton.current?.setAttribute('section', '4');

    }, []);

    function navigateToRequestedUser () {
        window.location.href = "http://localhost:3000/"+requestedUser?.username;
    }

    function activeButton (event: React.MouseEvent<HTMLDivElement>) {

        tweetsButton.current?.setAttribute('active', 'false');
        tweetsAndRepliesButton.current?.setAttribute('active', 'false');
        mediaButton.current?.setAttribute('active', 'false');
        likesButton.current?.setAttribute('active', 'false');

        const el = (event.target as HTMLDivElement);
        el.setAttribute('active', 'true');

        const section = Number(el.getAttribute('section'));
        setTweetsSection(section);

    }
    
    return(
        <div className='MainColumn'>
            
            <div className='MainColumn-header Sticky-top'>

                <ThemedButton className='MainColumn-header-back-arrow' primaryColor='white' secondaryColor='black'>
                    <FaArrowLeft className='Icon-normal'/>
                </ThemedButton>

                <div className='MainColumn-header-infos' onClick={navigateToRequestedUser}>
                    <Text 
                        fontWeigth='medium'
                        fontSize='medium'
                        fontColor='black'
                    > 
                        {requestedUser?.name}
                    </Text>
                    <Text 
                        fontWeigth='normal'
                        fontSize='smaller'
                        fontColor='gray'
                    > 
                        {'4 Tweets'}
                    </Text>
                </div>
                
            </div>

            <div className='MainColumn-user-container'>

                <div className='MainColumn-user-container-banner'>
                    <img className='MainColumn-user-container-banner-icon Icon-xxxl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"/> 
                </div>

                <div className='MainColumn-user-container-infos'>
                    <div className='MainColumn-user-container-infos-left-side'>
                        
                        <div className='Name-username'>
                            <Text
                                fontWeigth='bold'
                                fontSize='normal'
                                fontColor='black'
                            > 
                                {requestedUser?.name}
                            </Text>
                            <Text 
                                fontWeigth='normal'
                                fontSize='small'
                                fontColor='gray'
                            > 
                                {'@'+requestedUser?.username}
                            </Text>
                        </div>
                        <Text
                            className='Joined-in'
                            fontWeigth='normal'
                            fontSize='small'
                            fontColor='gray'
                        > 
                            {'Ingressou em março de 2022'}
                        </Text>
                        <div className='Following-followers-wrapper'>
                            <div className='Following'> 
                                <Text
                                    fontWeigth='medium'
                                    fontSize='smaller'
                                    fontColor='black'
                                > 
                                    {'143'}
                                </Text>
                                <Text
                                    className='Following-label'
                                    fontWeigth='normal'
                                    fontSize='smaller'
                                    fontColor='gray'
                                > 
                                    {'Seguindo'}
                                </Text>
                            </div>
                            <div className='Followers'> 
                                <Text
                                    fontWeigth='medium'
                                    fontSize='smaller'
                                    fontColor='black'
                                > 
                                    {'0'}
                                </Text>
                                <Text 
                                    className='Followers-label'
                                    fontWeigth='normal'
                                    fontSize='smaller'
                                    fontColor='gray'
                                > 
                                    {'Seguidores'}
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className='MainColumn-user-container-infos-right-side'>
                        <ThemedButton className='Edit-profile' primaryColor='white' secondaryColor='black'>
                            <Text
                                fontWeigth='medium'
                                fontSize='small'
                                fontColor='black'
                            > 
                                Editar Perfil
                            </Text>
                        </ThemedButton>
                    </div>
                    
                </div>

                <div className='MainColumn-user-container-tweets-menu'>

                    <ThemedButton
                        className='MainColumn-user-container-tweets-menu-button' 
                        primaryColor='white' 
                        secondaryColor='black'
                    >
                        <div className='MainColumn-user-container-tweets-menu-button-text' ref={tweetsButton} onClick={activeButton}>
                            Tweets
                        </div>
                    </ThemedButton>

                    <ThemedButton
                        className='MainColumn-user-container-tweets-menu-button' 
                        primaryColor='white' 
                        secondaryColor='black'
                    >
                        <div className='MainColumn-user-container-tweets-menu-button-text' ref={tweetsAndRepliesButton} onClick={activeButton}>
                            Tweets e respostas
                        </div>
                    </ThemedButton>

                    <ThemedButton
                        className='MainColumn-user-container-tweets-menu-button' 
                        primaryColor='white' 
                        secondaryColor='black'
                    >
                        <div className='MainColumn-user-container-tweets-menu-button-text' ref={mediaButton} onClick={activeButton}>
                            Mídia
                        </div>
                    </ThemedButton>

                    <ThemedButton
                        className='MainColumn-user-container-tweets-menu-button' 
                        primaryColor='white' 
                        secondaryColor='black'
                    >
                        <div className='MainColumn-user-container-tweets-menu-button-text' ref={likesButton} onClick={activeButton}>
                            Curtidas
                        </div>
                    </ThemedButton>
                
                </div>
                   
            </div>

            <Tweet/>

        </div>
            
    );
}

export default MainColumn;