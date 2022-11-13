import {FaRegImage,
        FaRegFileImage,
        FaListUl,
        FaRegSmile,
        FaRegCalendarAlt,
        FaMapMarkerAlt,
        FaGlobeAmericas,
        FaChevronDown,
        FaRegComment,
        FaHeart,
        FaShareSquare,
        FaCircle
} from 'react-icons/fa';
import { BsStars, BsThreeDots } from 'react-icons/bs';
import { AiOutlineRetweet } from "react-icons/ai";
import MakeTweet from '../../../components/MakeTweet';
import Tweet from '../../../components/Tweet';

import { useMediaQuery } from 'react-responsive';

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

    const isMediumOrLargeScreen = useMediaQuery({ query: '(min-width: 721px)' });

    function navigateToRequestedUser () {
        window.location.href = "http://localhost:3000/"+requestedUser?.username;
    }
    
    return(
        <div className='MainColumn'>
            
            <div className='MainColumn-header Sticky-top'>
                {!isMediumOrLargeScreen?
                    <img className='MainColumn-header-icon Icon-large' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>    
                    :
                    <></>
                }
                <span onClick={navigateToRequestedUser}>Página inicial</span>
                <BsStars className='MainColumn-header-star Icon-large btn-themed-white-black'/>
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

export default MainColumn;