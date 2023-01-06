import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

import Inset from '@/Layout/Inset.jsx';

const ContentLayoutExercises = () => {
    return (
        <ContentLayoutExercisesStyled className='ContentLayoutExercises'>
            <Inset>
                <h2>Exercises</h2>
                <nav className="sublinks">
                    <NavLink to='/exercises' end>Swapper</NavLink>
                    <NavLink to='/exercises/responsive-design'>Responsive Design</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </ContentLayoutExercisesStyled>
    );
}

export default ContentLayoutExercises;

const ContentLayoutExercisesStyled = styled.main`

`;