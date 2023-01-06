import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
    return (
        <LayoutStyled className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;

const LayoutStyled = styled.div`
    main {
        background-color: #fff;
        min-height: 600px;

        .Inset {
            padding: 50px 10px;
        }
    }
`;
