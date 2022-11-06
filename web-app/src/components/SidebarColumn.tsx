import WhatsHappeningImg from '../img/WhatsHappening.png';
import { useMediaQuery } from 'react-responsive';
import { FaSearch } from 'react-icons/fa';


function SidebarColumn() {

    const isMediumOrLargeScreen = useMediaQuery({ query: '(min-width: 721px)' });

    function turnFieldBlue(event: React.FocusEvent<HTMLElement>){
        const parent = (event.target as HTMLElement).parentElement;
        if(parent!=null)
            parent.style.cssText = "outline: 1px solid rgb(29, 155, 240); background-color: white";
    }

    return(
        <div className='Sidebar-column'>

            {isMediumOrLargeScreen &&
                <div className='Sidebar-column-header Sticky-top'>
                    <div className='Search-bar'>
                        <FaSearch className='Search-bar-icon Icon-small'/>
                        <input className='Search-bar-input' placeholder="Buscar no Twitter" onFocus={turnFieldBlue}></input>
                    </div>
                </div>
            }

            <div className='Sidebar-column-whats-happening'>
                <img src={WhatsHappeningImg} alt='Whats happening Topic'></img>
            </div>

            <div className='Sidebar-column-who-follow'>
            </div>
        </div>
    );
}

export default SidebarColumn;