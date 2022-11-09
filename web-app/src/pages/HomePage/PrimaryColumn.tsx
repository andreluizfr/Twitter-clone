import { useMediaQuery } from 'react-responsive';
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

            {isMediumOrLargeScreen &&
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
                
            }
            <div className="Show-more-tweets">

            </div>

            <article className='Tweet btn-themed-transparent-black'>

                <div className='Tweet-retweet-or-maybe-you-like'>
                    {/*<img className="Tweet-retweet-or-maybe-you-like-icon" alt="retweeted icon"/>*/}
                    <span className="Tweet-retweet-or-maybe-you-like-user"></span>
                </div>

                <div className='Tweet-wrapper'>
                    <img className='Tweet-wrapper-user-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>
                    <div className='Tweet-container'>

                        <div className="Tweet-container-first-section">
                            <div className="Tweet-container-first-section-infos">
                                <span className="Tweet-nickname Span-bold-small">André Luiz</span>
                                <span className='Tweet-username'>@andrezzz</span>
                                <FaCircle className='Tweet-dot'/>
                                <span className='Tweet-date'>21 de Out</span>
                            </div>
                            <div className="Tweet-container-first-section-more btn-themed-transparent-blue">
                                <BsThreeDots className='Icon-small'/>
                            </div>
                        </div>

                        <p className='Tweet-text'>
                            俺哥说要抱着姨干一个晚上的又在哪里？别吹牛批行不行啊？
                        </p>

                        <img className="Tweet-media" alt="tweet media" src="https://www.enago.com/academy/br/wp-content/uploads/sites/17/2015/06/Twitter-750x330.jpeg"/>

                        <div className="Tweet-container-toolbar">
                            <div className='Tweet-container-toolbar-item'>
                                <div className='Tweet-container-toolbar-item-icon btn-themed-transparent-blue'>
                                    <FaRegComment className="Icon-small"/>
                                    </div>
                                <span className='Tweet-container-toolbar-item-comments'>345</span>
                            </div>
                            <div className='Tweet-container-toolbar-item'>
                                <div className='Tweet-container-toolbar-item-icon btn-themed-transparent-green'>
                                    <AiOutlineRetweet className="Icon-small"/>
                                </div>
                                <span className='Tweet-container-toolbar-item-retweets'>6.908</span>
                            </div>
                            <div className='Tweet-container-toolbar-item'>
                                <div className='Tweet-container-toolbar-item-icon btn-themed-transparent-pink'>
                                    <FaHeart className="Icon-small"/>
                                </div>
                                <span className='Tweet-container-toolbar-item-likes'>54,4 mil</span>
                            </div>
                            <div className='Tweet-container-toolbar-item'>
                                <div className='Tweet-container-toolbar-item-icon btn-themed-transparent-blue'>
                                    <FaShareSquare className="Icon-small"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </article>

        </div>
            
    );
}

export default PrimaryColumn;