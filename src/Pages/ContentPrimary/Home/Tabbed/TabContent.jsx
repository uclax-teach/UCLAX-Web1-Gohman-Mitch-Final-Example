import React from 'react';
import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery.jsx';

const TabContent = ({ curTab }) => {
    return (
        <TabContentStyled className='TabContent'>
            <div className="column1">
                <img src={ curTab.image } alt={ curTab.title } />
            </div>
            <div className="column2">
                <h3>{ curTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: curTab.text } } />
            </div>
        </TabContentStyled>
    );
}

export default TabContent;

const TabContentStyled = styled.div`
    /*
        Further Reading

        Ultimate Guid to Grid
        https://css-tricks.com/snippets/css/complete-guide-grid/

        Browser Suppport
        https://caniuse.com/?search=grid

        Prefixing Older Browsers - see example below
        If you need to support older IE, and this is not a gaurantee
        https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie

        Fractional Units Explained:
        https://css-tricks.com/introduction-fr-css-unit/
    */

    /* This is what will prefix for older IE browser for example */
    /* autoprefixer grid: autoplace */

    padding: 20px;
    background-color: teal;

    @media ${ breakpoints.isMediumAndUp } {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    .column1 {
        img {
            display: block;
            max-width: 100%;
            margin: 0px auto 15px;
            @media ${ breakpoints.isMediumAndUp } {
                margin: 0px;
            }
        }
    }
    .column2 {
        h3 {
            font-size: 30px;
            color: white;
        }

        p {
            font-size: 18px;
            color: #8cc6c6;
            margin-bottom: 20px;
            line-height: 150%;
        }
    }
`;