import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import SiteLogo from '@/Layout/SiteLogo/SiteLogo.jsx';

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
    display: flex;
    position: relative;

    .logo {
        flex: 1;

        .SiteLogo {
            width: 80%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    .menus {
        flex: 4;

        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        h2 { display: none;  }

        a {
            opacity: .8;
            color: #84d4d4;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover, &:active, &:focus {
                opacity: 1;
            }
        }

        .mainMenu {
            padding: 0px 0px 20px 0px;
            display: flex;
            justify-content: flex-end;
            height: 50px;

            a {
                width: 80px;
                line-height: 30px;
                text-align: center;
                margin: 0px 0px 0px 5px;
                font-size: 12px;

                border-bottom: solid 3px #84d4d4;

                &.active {
                    color: white;
                    border-bottom-color: white;
                }
            }
        }

    }
}
`;
