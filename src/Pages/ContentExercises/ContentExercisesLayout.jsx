import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

import Inset from '@/Common/Inset.jsx';

const ContentExercisesLayout = () => {
    return (
        <ContentExercisesLayoutStyled className='ContentExercisesLayout'>
            <Inset>
                <h2>Exercises</h2>
                <nav className="sublinks">
                    <NavLink to='/exercises' end>Swapper</NavLink>
                    <NavLink to='/exercises/responsive-design'>Responsive Design</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </ContentExercisesLayoutStyled>
    );
}

export default ContentExercisesLayout;

const ContentExercisesLayoutStyled = styled.main`

`;