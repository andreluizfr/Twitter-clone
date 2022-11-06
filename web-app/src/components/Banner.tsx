import {FaTwitter,
        FaHouseUser,
        FaSlackHash,
        FaRegBell,
        FaRegEnvelope,
        FaRegBookmark,
        FaBook,
        FaUserAlt,
        FaRegCommentDots,
        FaSearch,
        FaLock
        } from 'react-icons/fa';
import {BsThreeDots
       } from 'react-icons/bs';

import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, userState } from '../redux/features/userSlice';
import { StoreState } from '../redux/store';


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

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });
    const isLargeScreen = useMediaQuery({ query: '(max-width: 1279px)' });

    if(isSmallScreen)

        return (
            <header className='Banner Banner-flex-row'>
                <div className='Banner-menu Banner-menu-flex-row'>
                    
                    <div className='Icon-container btn-themed-white-black'>
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

                    <div className='Icon-container btn-themed-white-blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                    </div>
                    {isMediumScreen?
                        <div className='Icon-container btn-themed-white-black'>
                            <FaSearch className='Banner-menu-icon Icon-large' id="icon-search"/>
                        </div>
                        :
                        <div className='Icon-container btn-themed-white-black'>
                            <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        </div>
                    }
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                    </div>
                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-listas"/>
                    </div>

                </div>

                <div className='User-avatar-container btn-themed-white-black'>
                    <img className='User-avatar-container-icon Icon-xl'
                         alt='user profile pic' 
                         src='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
                         onClick={showOptionsFromAvatarContainer}
                    />
                    <div className='User-avatar-hidden-options-screen-background Hidden' onClick={hideOptionsFromAvatarContainer}></div>
                    <div className='User-avatar-hidden-options-screen-container Hidden'>
                        <span className='btn-themed-transparent-black'>Adicionar uma conta existente</span>
                        <span className='btn-themed-transparent-black' onClick={handleLogOut}>Sair de {'@andrezzz'}</span>
                    </div>
                </div>

            </header>
        );

    else
        return (
            <header className='Banner Banner-flex-column Banner-large'>

                <div className='Banner-menu Banner-menu-flex-column'>

                    <div className='Icon-container btn-themed-white-blue'>
                        <FaTwitter className='Banner-menu-icon Icon-large' id="icon-twitter" fill='rgb(29, 155, 240)'/>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaHouseUser className='Banner-menu-icon Icon-large' id="icon-home"/>
                        <label className='Icon-container-label' htmlFor='icon-home'>Página inicial</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaSlackHash className='Banner-menu-icon Icon-large' id="icon-explorar"/>
                        <label className='Icon-container-label' htmlFor='icon-explorar'>Explorar</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBell className='Banner-menu-icon Icon-large' id="icon-notificacoes"/>
                        <label className='Icon-container-label' htmlFor='icon-notificacao'>Notificações</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegEnvelope className='Banner-menu-icon Icon-large' id="icon-mensagens"/>
                        <label  className='Icon-container-label' htmlFor='icon-mensagens'>Mensagens</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegBookmark className='Banner-menu-icon Icon-large' id="icon-itens-salvos"/>
                        <label className='Icon-container-label' htmlFor='icon-itens-salvos'>Itens Salvos</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaBook className='Banner-menu-icon Icon-large' id="icon-listas"/>
                        <label className='Icon-container-label' htmlFor='icon-listas'>Listas</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaUserAlt className='Banner-menu-icon Icon-large' id="icon-perfil"/>
                        <label className='Icon-container-label' htmlFor='icon-perfil'>Perfil</label>
                    </div>

                    <div className='Icon-container btn-themed-white-black'>
                        <FaRegCommentDots className='Banner-menu-icon Icon-large' id="icon-mais"/>
                        <label className='Icon-container-label' htmlFor='icon-mais'>Mais</label>
                    </div>

                    <button className='btn-primary btn-themed-blue-white btn-banner-tweetar'>Tweetar</button>

                </div>

                <div className='User-avatar-container btn-themed-white-black'>
                    <img className='User-avatar-container-icon Icon-xl'
                         alt='user profile pic' 
                         src='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
                         onClick={showOptionsFromAvatarContainer}
                    />
                    <div className='User-avatar-container-info' onClick={showOptionsFromAvatarContainer}>
                        <div className='User-avatar-container-info-name Span-medium-small'>{'André Luiz'}</div>
                        <FaLock className='Icon-small'/>
                        <div className='User-avatar-container-info-userName'>{'@andrezzz'}</div>
                    </div>
                    <div className='User-avatar-container-dots' onClick={showOptionsFromAvatarContainer}>
                        <BsThreeDots className='Icon-small'/>
                    </div>
                    <div className='User-avatar-hidden-options-screen-background Hidden' onClick={hideOptionsFromAvatarContainer}></div>
                    <div className='User-avatar-hidden-options-screen-container Hidden'>
                        <span className='btn-themed-transparent-black'>Adicionar uma conta existente</span>
                        <span className='btn-themed-transparent-black' onClick={handleLogOut}>Sair de {'@andrezzz'}</span>
                    </div>
                </div>

            </header>
        );
   
}

export default Banner;