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

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
