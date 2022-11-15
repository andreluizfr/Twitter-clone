import './styles.css';
import {FaTwitter,
        FaHouseUser,
        FaSlackHash,
        FaRegBell,
        FaRegEnvelope,
        FaRegBookmark,
        FaBook,
        FaUserAlt,
        FaRegCommentDots,
        FaSearch
        } from 'react-icons/fa';
import {BsThreeDots
       } from 'react-icons/bs';
import ThemedButton from '../ThemedButton';
import ThemedContainer from '../ThemedContainer';
import Text from '../Text';

import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, userState } from '../../redux/features/userSlice';
import { StoreState } from '../../redux/store';


function Banner() {

    const dispatch = useDispatch();
    const user: userState = useSelector( (state: StoreState) => state.user );

    function handleLogOut () {

        dispatch(removeUser());
        localStorage.clear();
        
    } 

    function showOptionsFromAvatarContainer () {
        const el = document.getElementsByClassName('User-avatar-hidden-options-screen-background');
        el[0].classList.remove('Hidden');

        const el2 = document.getElementsByClassName('User-avatar-hidden-options-screen-container');
        el2[0].classList.remove('Hidden');
        el2[0].classList.add('Flex');
    }

    function hideOptionsFromAvatarContainer () {
        console.log("aqui")
        const el = document.getElementsByClassName('User-avatar-hidden-options-screen-background');
        el[0].classList.add('Hidden');

        const el2 = document.getElementsByClassName('User-avatar-hidden-options-screen-container');
        el2[0].classList.remove('Flex');
        el2[0].classList.add('Hidden');
    }

    function goToMyProfilePage () {
        window.location.href = "http://localhost:3000/"+user.info?.username;
    }

    function goToHomePage () {
        window.location.href = "http://localhost:3000/"
    }

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });
    const isLargeScreen = useMediaQuery({ query: '(max-width: 1279px)' });

    if(isSmallScreen)

        return (
            <header className='Banner Banner-flex-row'>
                <div className='Banner-menu Banner-menu-flex-row'>
                    
                    <div className='Icon-container btn-themed-white-black' onClick={goToHomePage}>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </div>
                    
                </div>
            </header>
        );

    if(isLargeScreen)
        return (
            <header className='Banner Banner-flex-column Banner-small'>
            
                <div className='Banner-menu Banner-menu-flex-column'>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black' onClick={goToHomePage}>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </ThemedButton>

                    {isMediumScreen?
                        <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                            <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                        </ThemedButton>
                        :
                        <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                            <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        </ThemedButton>
                    }
                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black' onClick={goToMyProfilePage}>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-mais"/>
                    </ThemedButton>

                </div>
                
                <ThemedContainer className='User-avatar-container' primaryColor='transparent' secondaryColor='black'>
                    <img className='User-avatar-container-icon Icon-xl'
                         alt='user profile pic' 
                         src='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
                         onClick={showOptionsFromAvatarContainer}
                    />
                    <div className='User-avatar-hidden-options-screen-background Hidden' onClick={hideOptionsFromAvatarContainer}></div>
                    <div className='User-avatar-hidden-options-screen-container Hidden'>
                        <ThemedButton primaryColor='white' secondaryColor='black'>
                            Adicionar uma conta existente
                        </ThemedButton>
                        <ThemedButton primaryColor='white' secondaryColor='black' onClick={handleLogOut}>
                            Sair de {"@"+user.info?.username}
                        </ThemedButton>
                    </div>
                </ThemedContainer>

            </header>
        );

    else
        return (
            <header className='Banner Banner-flex-column Banner-large'>

                <div className='Banner-menu Banner-menu-flex-column'>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter"/>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black' onClick={goToHomePage}>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                        <label className='Icon-container-label' htmlFor='icon-home'>Página inicial</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        <label className='Icon-container-label' htmlFor='icon-explorar'>Explorar</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                        <label className='Icon-container-label' htmlFor='icon-notificacao'>Notificações</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                        <label  className='Icon-container-label' htmlFor='icon-mensagens'>Mensagens</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                        <label className='Icon-container-label' htmlFor='icon-itens-salvos'>Itens Salvos</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                        <label className='Icon-container-label' htmlFor='icon-listas'>Listas</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black' onClick={goToMyProfilePage}>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                        <label className='Icon-container-label' htmlFor='icon-perfil'>Perfil</label>
                    </ThemedButton>

                    <ThemedButton className='Icon-container' primaryColor='white' secondaryColor='black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-mais"/>
                        <label className='Icon-container-label' htmlFor='icon-mais'>Mais</label>
                    </ThemedButton>

                    <ThemedButton className='Btn-banner-tweetar' primaryColor='blue' secondaryColor='white'>
                        Tweetar
                    </ThemedButton>

                </div>

                <ThemedContainer className='User-avatar-container' primaryColor='transparent' secondaryColor='black'>
                    <img 
                        className='User-avatar-container-icon Icon-xl'
                        alt='user profile pic' 
                        src='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
                        onClick={showOptionsFromAvatarContainer}
                    />
                    <div className='User-avatar-container-info' onClick={showOptionsFromAvatarContainer}>
                        <Text 
                            className='User-avatar-container-info-name' 
                            fontWeigth='medium' 
                            fontSize='small' 
                            fontColor='black'
                        >
                                {user.info?.name}
                        </Text>
                        <Text 
                            className='User-avatar-container-info-username' 
                            fontWeigth='normal' 
                            fontSize='small' 
                            fontColor='black'
                        >
                                {"@"+user.info?.username}
                        </Text>
                    </div>
                    <div className='User-avatar-container-dots' onClick={showOptionsFromAvatarContainer}>
                        <BsThreeDots className='Icon-small'/>
                    </div>
                    <div className='User-avatar-hidden-options-screen-background Hidden' onClick={hideOptionsFromAvatarContainer}></div>
                    <div className='User-avatar-hidden-options-screen-container Hidden'>
                        <ThemedButton className='option' primaryColor='white' secondaryColor='black'>
                            Adicionar uma conta existente
                        </ThemedButton>
                        <ThemedButton className='option' primaryColor='white' secondaryColor='black' onClick={handleLogOut}>
                            Sair de {"@"+user.info?.username}
                        </ThemedButton>
                    </div>
                </ThemedContainer>

            </header>
        );
   
}

export default Banner;