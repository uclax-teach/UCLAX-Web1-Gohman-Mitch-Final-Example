import styled from 'styled-components';

/* Components ---------------------------*/
import PageMeta from '@/Common/PageMeta.jsx';
import Inset from '@/Common/Inset.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {
    return (
        <HomeStyled className="Home">
            <PageMeta title="Home" />
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
