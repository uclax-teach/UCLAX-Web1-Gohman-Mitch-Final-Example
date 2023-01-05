import React from 'react';
import styled from 'styled-components';

/* CSS Media Queries ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery.jsx';

/* Components ---------------------------*/
import AccoladesList from './Accolades/AccoladesList.jsx';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name } />
            <h3>{member.name}</h3>

            <div className="bottom">
                <p><b>Year Started:</b> { member.yearStarted }</p>
                <AccoladesList accolades={ member.accolades } />
            </div>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    background-color: teal;

    width: 100%;
    margin: 5px 0px;

    @media ${breakpoints.isMediumAndUp} {
        width: 30%;
        margin: 15px;
    }

    @media ${breakpoints.isLargeAndUp} {
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        display: block;
        min-height: 150px;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #014444;
        margin: 0px;
        padding: 5px 10px;
    }
`;