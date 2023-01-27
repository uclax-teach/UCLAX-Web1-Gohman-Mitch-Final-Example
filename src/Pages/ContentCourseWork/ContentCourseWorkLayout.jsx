import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

import Inset from '@/Common/Inset.jsx';

const ContentCourseWorkLayout = () => {
    return (
        <ContentCourseWorkLayoutStyled className='ContentCourseWorkLayout'>
            <Inset>
                <h2>Course Work</h2>
                <nav className="sublinks">
                    <NavLink to='/course-work' end>Essays</NavLink>
                    <NavLink to='/course-work/sun-and-moon'>Sun and Moon</NavLink>
                    <NavLink to='/course-work/responsive-design'>Responsive Design</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </ContentCourseWorkLayoutStyled>
    );
}

export default ContentCourseWorkLayout;

const ContentCourseWorkLayoutStyled = styled.main`

`;