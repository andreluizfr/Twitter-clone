import { useMediaQuery } from 'react-responsive';
import Banner from '../components/Banner';
import PrimaryColumn from '../components/PrimaryColumn';
import SidebarColumn from '../components/SidebarColumn';

function HomePage () {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1100px)' });

    if(isSmallScreen)
        return (
            <div className='Home-page Home-page-flex-column'>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                </main>

                <div className="Fixed-bottom">
                    <Banner/>
                </div>

            </div>
        );

    if(isMediumScreen)
        return (
            <div className='Home-page Home-page-flex-row'>

                <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                </main>
                

            </div>
        );
    else
        return (
            <div className='Home-page Home-page-flex-row'>

            <div className="Sticky-top">
                    <Banner/>
                </div>

                <main className='Home-page-main-content'>
                    <PrimaryColumn/>
                    <SidebarColumn/>
                </main>

            </div>
        );
    

}

export default HomePage;