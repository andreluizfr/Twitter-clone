import './styles.css';
import {FaRegComment,
    FaHeart,
    FaShareSquare,
    FaCircle
} from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineRetweet } from "react-icons/ai";
import ThemedContainer from '../ThemedContainer';
import Text from '../Text';
import ThemedButton from '../ThemedButton';


function Tweet () {

    return (

        <ThemedContainer className='Tweet' primaryColor='transparent' secondaryColor='black'>

            <div className='Tweet-retweet-or-maybe-you-like'>
                {/*<img className="Tweet-retweet-or-maybe-you-like-icon" alt="retweeted icon"/>*/}
                <span className="Tweet-retweet-or-maybe-you-like-user"></span>
            </div>

            <div className='Tweet-wrapper'>
                <img className='Tweet-wrapper-user-icon Icon-xl' alt='user profile pic' src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"></img>
                <div className='Tweet-container'>

                    <div className="Tweet-container-first-section">
                        <div className="Tweet-container-first-section-infos">
                            <Text 
                                className='Tweet-nickname'
                                fontWeigth='bold'
                                fontSize='small'
                                fontColor='black'
                            >
                                {'André Luiz'}
                            </Text>
                            <Text 
                                className='Tweet-username'
                                fontWeigth='normal'
                                fontSize='small'
                                fontColor='gray'
                            >
                                {'@andrezzz'}
                            </Text>
                            <FaCircle className='Tweet-dot'/>
                            <Text 
                                className='Tweet-date'
                                fontWeigth='normal'
                                fontSize='small'
                                fontColor='gray'
                            >
                                {'21 de Out'}
                            </Text>
                        </div>

                        <ThemedButton 
                            className='Tweet-container-first-section-more'
                            primaryColor='transparent'
                            secondaryColor='blue'
                        >
                            <BsThreeDots className='Icon-small'/>
                        </ThemedButton>

                    </div>

                    <p className='Tweet-text'>
                        俺哥说要抱着姨干一个晚上的又在哪里？别吹牛批行不行啊？
                    </p>

                    <img className="Tweet-media" alt="tweet media" src="https://www.enago.com/academy/br/wp-content/uploads/sites/17/2015/06/Twitter-750x330.jpeg"/>

                    <div className="Tweet-container-toolbar">

                        <div className='Tweet-container-toolbar-item'>
                            <ThemedButton 
                                className='Tweet-container-toolbar-item-icon'
                                primaryColor='transparent'
                                secondaryColor='blue'
                            >
                                <FaRegComment className="Icon-small"/>
                            </ThemedButton> 
                            <span className='Tweet-container-toolbar-item-comments'>{'345'}</span>                
                        </div>

                        <div className='Tweet-container-toolbar-item'>
                            <ThemedButton 
                                className='Tweet-container-toolbar-item-icon'
                                primaryColor='transparent'
                                secondaryColor='green'
                            >
                                <AiOutlineRetweet className="Icon-small"/>
                            </ThemedButton> 
                            <span className='Tweet-container-toolbar-item-retweets'>{'6.908'}</span>                
                        </div>

                        <div className='Tweet-container-toolbar-item'>
                            <ThemedButton 
                                className='Tweet-container-toolbar-item-icon'
                                primaryColor='transparent'
                                secondaryColor='pink'
                            >
                                <FaHeart className="Icon-small"/>
                            </ThemedButton> 
                            <span className='Tweet-container-toolbar-item-likes'>{'54,4 mil'}</span>                
                        </div>

                        <div className='Tweet-container-toolbar-item'>
                            <ThemedButton 
                                className='Tweet-container-toolbar-item-icon'
                                primaryColor='transparent'
                                secondaryColor='blue'
                            >
                                 <FaShareSquare className="Icon-small"/>
                            </ThemedButton>              
                        </div>
                            
                    </div>

                </div>
            </div>

        </ThemedContainer>
    );

}

export default Tweet;