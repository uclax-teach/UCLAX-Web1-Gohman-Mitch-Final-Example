import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { useMediaQuery } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import Inset from '@/Layout/Inset.jsx';
import SmallView from './SmallView.jsx';
import MediumLargeView from './MediumLargeView.jsx';

const Header = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled className="Header">
            <Inset>{isMediumAndUp ? <MediumLargeView /> : <SmallView />}</Inset>
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`
    background-color: #014444;
    color: white;

    h2 {
        color: white;
        margin: 0px;
    }
`;
