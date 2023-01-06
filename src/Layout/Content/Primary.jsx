import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Primary = () => {
    return (
        <PrimaryStyled className='Primary'>
            <Outlet />
        </PrimaryStyled>
    );
}

export default Primary;

const PrimaryStyled = styled.main`

`;