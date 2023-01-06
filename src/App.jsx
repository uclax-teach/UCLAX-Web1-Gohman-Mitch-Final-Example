import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

/* Layout ---------------------------*/
import Layout from '@/Layout/Layout.jsx';

/* Pages ---------------------------*/
import Home from '@/Pages/Home/Home.jsx';
import Staff from '@/Pages/Staff/Staff.jsx';
import Contact from '@/Pages/Contact/Contact.jsx';
import Essays from '@/Pages/Essays/Essays.jsx';
// Exercises
import Exercises from '@/Pages/Exercises/Exercises.jsx';
import Swapper from '@/Pages/Exercises/Swapper/Swapper.jsx';
import ResponsiveDesign from '@/Pages/Exercises/ResponsiveDesign/ResponsiveDesign.jsx';

const App = () => {
    return (
        <AppStyled EssaysName="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />
                    <Route element={<Essays />} path="essays" />
                    <Route element={<Exercises />} path="exercises">
                        <Route element={<Swapper />} path="" />
                        <Route element={<ResponsiveDesign />} path="responsive-design" />
                    </Route>
                </Route>
            </Routes>
        </AppStyled>
    );
};

export default App;

const AppStyled = styled.div``;
