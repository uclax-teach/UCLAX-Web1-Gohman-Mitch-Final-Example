import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ContentPrimaryLayout = () => {
    return (
        <ContentPrimaryLayoutStyled className='ContentPrimaryLayout'>
            <Outlet />
        </ContentPrimaryLayoutStyled>
    );
}

export default ContentPrimaryLayout;

const ContentPrimaryLayoutStyled = styled.main`

`;