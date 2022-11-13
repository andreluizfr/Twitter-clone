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

function MakeTweet () {

    return (
        <div className="Make-tweet">
                    
            <img className='Make-tweet-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>

            <div className='Make-tweet-container'>

                <div className="Make-tweet-container-field">
                    <div className="Who-can-view-container btn-themed-white-blue">
                        <span className="Who-can-view-container-span Span-medium-smaller">Qualquer pessoa</span>
                        <FaChevronDown className='Who-can-view-container-icon Icon-smaller'/>
                    </div>
                    <input className='Tweet-content' placeholder='O que está acontecendo?'/>
                    <div className='Who-can-comment-container btn-themed-white-blue'>
                        <FaGlobeAmericas className='Who-can-comment-container-icon Icon-small'/>
                        <span className='Who-can-comment-container-span Span-medium-smaller'>Qualquer pessoa pode responder</span>
                    </div>
                </div>

                <div className="Make-tweet-container-toolbar">
                    <div className='Make-tweet-container-toolbar-icons'>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaRegImage fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaRegFileImage fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaListUl fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaRegSmile fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaRegCalendarAlt fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                        <div className='Make-tweet-container-toolbar-icons-icon btn-themed-white-blue'>
                            <FaMapMarkerAlt fill='rgb(29, 155, 240)' className='Icon-small'/>
                        </div>
                    </div>
                    <button className='btn-primary btn-themed-blue-white Btn-tweetar'>Tweetar</button>
                </div>

            </div>

        </div>
    );

}

export default MakeTweet;