import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { breakpoints, useMediaQuery } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import PageMeta from '@/Common/PageMeta.jsx';

const ResponsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled className="ResponsiveDesign">
            <PageMeta title="Responsive Design :: Exercises" />
            <h2>Responsive Design</h2>

            <div className="boxes">
                {isMediumAndUp && <div className="box box1">1</div>}
                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>
        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const ResponsiveDesignStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }

    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        margin: 10px;
        font-size: 50px;
        text-align: center;
        line-height: 200px;
        color: white;
        background-color: Teal;
    }
    .box2 {
        border-radius: 40px;
    }
    .box3 {
        border-radius: 100px;
    }

    @media ${breakpoints.isMediumAndUp} {
        .box {
            background-color: Indigo;
        }
    }

    @media ${breakpoints.isLargeAndUp} {
        .box {
            background-color: Green;
        }
    }
`;
