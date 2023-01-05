import styled from 'styled-components';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';
import Inset from '@/Layout/Inset.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {
    return (
        <HomeStyled className="Home">
            <Head title="Home" />
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }

`;
