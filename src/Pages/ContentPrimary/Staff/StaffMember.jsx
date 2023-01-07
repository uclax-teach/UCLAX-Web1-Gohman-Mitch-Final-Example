import React from 'react';
import styled from 'styled-components';

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

    background-color: #eee;

    img {
        width: 100%;
        display: block;
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