import './styles.css';
import { BsStars } from 'react-icons/bs';
import MakeTweet from '../../../components/MakeTweet';
import Tweet from '../../../components/Tweet';
import ThemedButton from '../../../components/ThemedButton';

import { useMediaQuery } from 'react-responsive';


function PrimaryColumn() {

    const isMediumOrLargeScreen = useMediaQuery({ query: '(min-width: 721px)' });

    function navigateToHome () {
        window.location.href = "http://localhost:3000/"
    }
    
    return(
        <div className='Primary-column'>
            
            <div className='Primary-column-header Sticky-top'>
                {!isMediumOrLargeScreen?
                    <img className='Primary-column-header-icon Icon-large' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>    
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