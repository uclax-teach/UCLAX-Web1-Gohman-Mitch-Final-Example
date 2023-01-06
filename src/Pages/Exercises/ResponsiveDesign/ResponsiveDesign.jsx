import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { breakpoints, useMediaQuery } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';

const ResponsiveDesign = () => {

    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled className="ResponsiveDesign">
            <Head title="Responsive Design :: Exercises" />
            <h2>Responsive Design</h2>

            <div className="box"></div>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam exercitationem illum, rerum ex perspiciatis
                consequatur asperiores reiciendis natus non placeat at corporis
                earum voluptates voluptatibus quibusdam eius error molestias
                provident?
            </p>

            {
                isMediumAndUp &&
                <div>Do not show in small view.</div>
            }

        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const ResponsiveDesignStyled = styled.div`
    .box {
        width: 100%;
        max-width: 400px;
        height: 400px;

        border: solid 20px black;
        background-color: rebeccapurple;
    }
    p {
        margin: 50px 0px;
        /* padding: 20px; */
        background-color: yellow;

        /* width: 80%;
        max-width: 600px;
        min-width: 300px; */

        /* width: clamp(70%, 600px, 300px); */

        /* padding: 3vw; */
        /* font-size: 3vw; */

        padding: clamp(20px, 3vw, 40px);
        font-size: clamp(1rem, 3vw, 2rem);
    }

    @media ${breakpoints.isMediumAndUp} {
        p {
            background-color: red;
        }
    }

    @media (orientation: landscape) {
        .box {
            background-color: red;
        }
    }
    @media (min-aspect-ratio: 16 / 9) {
        .box {
            border: solid 30px green;
        }
    }
`;
