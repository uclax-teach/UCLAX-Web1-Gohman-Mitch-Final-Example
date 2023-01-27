import { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import PageMeta from '@/Common/PageMeta.jsx';

/* Images ---------------------------*/
import moonUrl from './moon.png';
import sunUrl from './sun.png';

const Swapper = () => {

    const [imgSrc, imgSrcUpdate] = useState(sunUrl);

    const changeToMoon = () => {
        imgSrcUpdate(moonUrl);
    }

    const changeToSun = () => {
        imgSrcUpdate(sunUrl);
    }

    return (
        <SwapperStyled className="Swapper">
            <PageMeta title="Swapper :: Exercises" />
            <h2>Swapper</h2>

            <img
                src={ imgSrc }
                alt='The Moon'
                onMouseEnter={ changeToMoon }
                onMouseLeave={ changeToSun }
            />
        </SwapperStyled>
    );
};

export default Swapper;

const SwapperStyled = styled.div`
    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 10px teal;
        background-color: #e29821;
    }

`;
