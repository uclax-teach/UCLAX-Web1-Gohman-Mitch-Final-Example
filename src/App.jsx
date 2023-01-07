import { Routes, Route } from 'react-router-dom';

/* Pages: Layout ---------------------------*/
import PagesLayout from '@/Pages/PagesLayout.jsx';

/* Pages: Primary ---------------------------*/
import ContentPrimaryLayout from '@/Pages/ContentPrimary/ContentPrimaryLayout.jsx';
import Home from '@/Pages/ContentPrimary/Home/Home.jsx';
import Staff from '@/Pages/ContentPrimary/Staff/Staff.jsx';
import Contact from '@/Pages/ContentPrimary/Contact/Contact.jsx';
import Essays from '@/Pages/ContentPrimary/Essays/Essays.jsx';

// Pages: Exercises
import ContentExercisesLayout from '@/Pages/ContentExercises/ContentExercisesLayout.jsx';
import Swapper from '@/Pages/ContentExercises/Swapper/Swapper.jsx';
import ResponsiveDesign from '@/Pages/ContentExercises/ResponsiveDesign/ResponsiveDesign.jsx';

const App = () => {
    return (
        <Routes>
            <Route element={<PagesLayout />}>
                <Route element={<ContentPrimaryLayout />} path="">
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />
                    <Route element={<Essays />} path="essays" />
                </Route>
                <Route element={<ContentExercisesLayout />} path="exercises">
                    <Route element={<Swapper />} path="" />
                    <Route element={<ResponsiveDesign />} path="responsive-design" />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
