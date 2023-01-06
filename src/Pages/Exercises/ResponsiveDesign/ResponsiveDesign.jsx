import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';

const ResponsiveDesign = () => {
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
        padding: 20px;
        background-color: yellow;
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
