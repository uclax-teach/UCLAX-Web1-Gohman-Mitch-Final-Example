import { Routes, Route } from 'react-router-dom';

/* Pages: Layout ---------------------------*/
import PagesLayout from '@/Pages/PagesLayout.jsx';

/* Pages: Primary ---------------------------*/
import ContentPrimaryLayout from '@/Pages/ContentPrimary/ContentPrimaryLayout.jsx';
import Home from '@/Pages/ContentPrimary/Home/Home.jsx';
import Staff from '@/Pages/ContentPrimary/Staff/Staff.jsx';
import Contact from '@/Pages/ContentPrimary/Contact/Contact.jsx';

// Pages: Course Work
import ContentCourseWorkLayout from '@/Pages/ContentCourseWork/ContentCourseWorkLayout.jsx';
import Essays from '@/Pages/ContentCourseWork/Essays/Essays.jsx';
import Swapper from '@/Pages/ContentCourseWork/Swapper/Swapper.jsx';
import ResponsiveDesign from '@/Pages/ContentCourseWork/ResponsiveDesign/ResponsiveDesign.jsx';

const App = () => {
    return (
        <Routes>
            <Route element={<PagesLayout />}>
                <Route element={<ContentPrimaryLayout />} path="">
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />
                </Route>
                <Route element={<ContentCourseWorkLayout />} path="course-work">
                    <Route element={<Essays />} path="" />
                    <Route element={<Swapper />} path="sun-and-moon" />
                    <Route element={<ResponsiveDesign />} path="responsive-design" />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
