import styled from 'styled-components';

/* Scripts ---------------------------*/
import { staffData } from './staffData.js';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';
import Inset from '@/Layout/Inset.jsx';
import StaffMember from './StaffMember.jsx';

const Staff = () => {
    return (
        <StaffStyled className="Staff">
            <Head title="Staff" />
            <Inset>
                <h1>Staff</h1>
                <div className="wrapper">
                    {staffData.map((member) => {
                        return <StaffMember key={member.id} member={member} />;
                    })}
                </div>
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div`

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

    .wrapper {
        display: grid;

        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        gap: 1rem;
    }
`;
