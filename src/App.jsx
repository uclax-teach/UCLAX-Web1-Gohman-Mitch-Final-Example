import { Routes, Route } from 'react-router-dom';

/* Layouts ---------------------------*/
import Layout from '@/Layout/Layout.jsx';
import LayoutContentPrimary from '@/Layout/Content/Primary.jsx';
import LayoutContentExercises from '@/Layout/Content/Exercises.jsx';

/* Pages ---------------------------*/
import Home from '@/Pages/Home/Home.jsx';
import Staff from '@/Pages/Staff/Staff.jsx';
import Contact from '@/Pages/Contact/Contact.jsx';
import Essays from '@/Pages/Essays/Essays.jsx';

// Exercises
import Swapper from '@/Pages/Exercises/Swapper/Swapper.jsx';
import ResponsiveDesign from '@/Pages/Exercises/ResponsiveDesign/ResponsiveDesign.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<LayoutContentPrimary />} path="">
                        <Route element={<Home />} path="" />
                        <Route element={<Staff />} path="staff" />
                        <Route element={<Contact />} path="contact" />
                        <Route element={<Essays />} path="essays" />
                    </Route>
                    <Route element={<LayoutContentExercises />} path="exercises">
                        <Route element={<Swapper />} path="" />
                        <Route element={<ResponsiveDesign />} path="responsive-design" />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
