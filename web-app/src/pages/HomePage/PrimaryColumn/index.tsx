import { useMediaQuery } from 'react-responsive';
import { BsStars } from 'react-icons/bs';
import MakeTweet from '../../../components/MakeTweet';
import Tweet from '../../../components/Tweet';

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
                <BsStars className='Primary-column-header-star Icon-large btn-themed-white-black'/>
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