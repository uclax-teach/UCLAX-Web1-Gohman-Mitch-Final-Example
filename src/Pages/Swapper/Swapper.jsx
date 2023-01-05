import { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from '@/Layout/Inset.jsx';

/* Images ---------------------------*/
import Head from '@/Layout/Head.jsx';
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
            <Head title="Swapper" />
            <Inset>
                <h1>Swapper</h1>

                <img
                    src={ imgSrc }
                    alt='The Moon'
                    onMouseEnter={ changeToMoon }
                    onMouseLeave={ changeToSun }
                />
            </Inset>
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
