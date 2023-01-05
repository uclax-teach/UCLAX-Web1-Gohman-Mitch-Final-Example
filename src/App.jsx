import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Layout ---------------------------*/
import Layout from '@/Layout/Layout.jsx';

/* Pages ---------------------------*/
import Home from '@/Pages/Home/Home.jsx';
import Staff from '@/Pages/Staff/Staff.jsx';
import Contact from '@/Pages/Contact/Contact.jsx';
import Swapper from '@/Pages/Swapper/Swapper.jsx';
import Essays from '@/Pages/Essays/Essays.jsx';

const App = () => {
    return (
        <AppStyled EssaysName="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />
                    <Route element={<Swapper />} path="swapper" />
                    <Route element={<Essays />} path="essays" />
                </Route>
            </Routes>
        </AppStyled>
    );
};

export default App;

const AppStyled = styled.div``;
