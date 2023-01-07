import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import SiteLogo from '@/Common/SiteLogo/SiteLogo.jsx';

const MediumLargeView = () => {
    return (
        <MediumLargeViewStyled className="MediumLargeView">
            <div className="inset">
                <div className="logo">
                    <SiteLogo />
                </div>
                <div className="menus">
                    <nav className='mainMenu'>
                        <NavLink to={ '/' } end>Home</NavLink>
                        <NavLink to={ '/staff' }>Staff</NavLink>
                        <NavLink to={ '/contact' }>Contact</NavLink>
                        <NavLink to={ '/essays' }>Essays</NavLink>
                        <NavLink to={ '/exercises' }>Exercises</NavLink>
                    </nav>
                </div>
            </div>
        </MediumLargeViewStyled>
    );
};

export default MediumLargeView;

const MediumLargeViewStyled = styled.div`
.inset {
    display: grid;
    grid-template-columns: 25% 75%;

    .logo {
        .SiteLogo {
            width: 80%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    .menus {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        nav.mainMenu {
            a {
                width: 80px;
                display: inline-block;

                line-height: 30px;
                margin: 0px 0px 20px 5px;
                border-bottom: solid 3px #84d4d4;

                text-align: center;
                font-size: 12px;
                opacity: .8;
                color: #84d4d4;
                font-weight: bold;
                text-decoration: none;
                text-transform: uppercase;

                &:hover, &:active, &:focus {
                    opacity: 1;
                }

                &.active {
                    color: white;
                    border-bottom-color: white;
                }
            }
        }

    }
}
`;
