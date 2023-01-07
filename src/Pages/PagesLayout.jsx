import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Components ---------------------------*/
import Header from './Layout/Header/Header.jsx';
import Footer from './Layout/Footer.jsx';

const PagesLayout = () => {
    return (
        <PagesLayoutStyled className="PagesLayout">
            <Header />
            <Outlet />
            <Footer />
        </PagesLayoutStyled>
    );
};

export default PagesLayout;

const PagesLayoutStyled = styled.div`
    main {
        background-color: #fff;
        min-height: 600px;

        .Inset {
            padding: 50px 10px;
        }
    }
`;