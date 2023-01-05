import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import SiteLogo from '@/Layout/SiteLogo/SiteLogo.jsx';
import Hamburger from '@/Layout/Header/Hamburger.jsx';

const SmallView = () => {

    const [showMenu, showMenuUpdate] = useState(false);

    const onClick = () => {
        if (showMenuUpdate) {
            showMenuUpdate(false);
        }
    }

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        // Dismount remove class.
        return () => {
            document.body.classList.remove("modal-open");
        }

    }, [showMenu]);

    return (
        <SmallViewStyled className="SmallView">
            <div className="logo">
                <SiteLogo />
            </div>
            <Hamburger showMenuUpdate={showMenuUpdate} showMenu={showMenu} />
            {showMenu && (
                <nav className="mainMenu">
                    <NavLink onClick={ onClick } to={'/'} end>
                        Home
                    </NavLink>
                    <NavLink onClick={ onClick } to={'/staff'}>Staff</NavLink>
                    <NavLink onClick={ onClick } to={'/contact'}>Contact</NavLink>
                    <NavLink onClick={ onClick } to={'/swapper'}>Swapper</NavLink>
                    <NavLink onClick={ onClick } to={'/essays'}>Essays</NavLink>
                </nav>
            )}
        </SmallViewStyled>
    );
};

export default SmallView;

const SmallViewStyled = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .SiteLogo {
        max-width: 300px;
    }

    .mainMenu {
        position: fixed;
        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

        z-index: 1000;

        background-color: #014444;

        h2 {
            font-size: 20px;
            margin: 0px;
            padding: 10px;
            color: white;
            border-bottom: 1px solid #999999;
        }

        a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid #999999;
            color: white;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #002a2a;
            }
        }
    }
`;
