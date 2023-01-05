import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
    return (
        <LayoutStyled className="Layout">
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;

const LayoutStyled = styled.div``;
