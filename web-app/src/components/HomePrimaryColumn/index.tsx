import './styles.css';
import { BsStars } from 'react-icons/bs';
import MakeTweet from '../MakeTweet';
import Tweet from '../Tweet';
import ThemedButton from '../ThemedButton';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { userState } from '../../redux/features/userSlice';
import { StoreState } from '../../redux/store';


function PrimaryColumn() {

    const user: userState = useSelector( (state: StoreState) => state.user );

    const isMediumOrLargeScreen = useMediaQuery({ query: '(min-width: 721px)' });

    function navigateToHome () {
        window.location.href = "http://localhost:3000/"
    }

    function goToMyProfilePage () {
        window.location.href = "http://localhost:3000/"+user.info?.username;
    }
    
    return(
        <div className='Primary-column'>
            
            <div className='Primary-column-header Sticky-top'>
                {!isMediumOrLargeScreen?
                    <img 
                        className='Primary-column-header-icon Icon-large' 
                        alt='user profile pic' 
                        src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
                        onClick={goToMyProfilePage}
                    />    
                    :
                    <></>
                }
                <span onClick={navigateToHome}>Página inicial</span>
                
                <ThemedButton className='Primary-column-header-star' primaryColor='white' secondaryColor='black'>
                    <BsStars className='Icon-medium'/>
                </ThemedButton>
            </div>

            {isMediumOrLargeScreen?
                <MakeTweet/>
                :
                <></>
            }
            <div className="Show-more-tweets">

            </div>

            <Tweet/>

        </div>
            
    );
}

export default PrimaryColumn;