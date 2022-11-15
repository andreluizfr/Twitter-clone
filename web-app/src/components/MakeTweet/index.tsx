import {FaRegImage,
        FaRegFileImage,
        FaListUl,
        FaRegSmile,
        FaRegCalendarAlt,
        FaMapMarkerAlt,
        FaGlobeAmericas,
        FaChevronDown
} from 'react-icons/fa';
import './styles.css';
import Text from '../Text';
import ThemedButton from '../ThemedButton';
import ThemedContainer from '../ThemedContainer';

import { useSelector } from 'react-redux';
import { userState } from '../../redux/features/userSlice';
import { StoreState } from '../../redux/store';

function MakeTweet () {

    const user: userState = useSelector( (state: StoreState) => state.user );

    function goToMyProfilePage () {
        window.location.href = "http://localhost:3000/"+user.info?.username;
    }

    return (
        <div className="Make-tweet">
                    
            <img 
                className='Make-tweet-icon Icon-xl' 
                alt='user profile pic' 
                src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                onClick={goToMyProfilePage}
            />

            <div className='Make-tweet-container'>

                <div className="Make-tweet-container-field">

                    <ThemedContainer className='Who-can-view-container' primaryColor='transparent' secondaryColor='blue'>
                        <Text 
                            fontWeigth='medium'
                            fontSize='smaller'
                            fontColor='blue'
                        >
                            Qualquer pessoa
                        </Text>
                        <FaChevronDown className='Who-can-view-container-icon Icon-smaller'/>
                    </ThemedContainer>

                    <input className='Tweet-content' placeholder='O que está acontecendo?'/>

                    <ThemedContainer className='Who-can-comment-container' primaryColor='transparent' secondaryColor='blue'>
                        <FaGlobeAmericas className='Who-can-comment-container-icon Icon-small'/>
                        <Text 
                            className='Who-can-comment-container-message'
                            fontWeigth='medium'
                            fontSize='smaller'
                            fontColor='blue'
                        >
                            Qualquer pessoa pode responder
                        </Text>
                    </ThemedContainer>

                </div>

                <div className="Make-tweet-container-toolbar">
                    <div className='Make-tweet-container-toolbar-icons'>
                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaRegImage fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>

                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaRegFileImage fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>

                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaListUl fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>

                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaRegSmile fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>
                        
                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaRegCalendarAlt fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>

                        <ThemedButton 
                            className='Make-tweet-container-toolbar-icons-icon' 
                            primaryColor='white'
                            secondaryColor='blue'
                        >
                            <FaMapMarkerAlt fill='rgb(29, 155, 240)' className='Icon-normal'/>
                        </ThemedButton>

                    </div>

                    <ThemedButton 
                            className='Btn-tweetar' 
                            primaryColor='blue'
                            secondaryColor='white'
                    >
                        <Text
                            fontWeigth='medium'
                            fontSize='small'
                            fontColor='white'
                        >
                            Tweetar
                        </Text>
                    </ThemedButton>

                </div>

            </div>

        </div>
    );

}

export default MakeTweet;