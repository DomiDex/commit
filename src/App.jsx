import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import ProjectSingle from './Pages/ProjectSingle';
import Contact from './Pages/Contact';
import { Outlet } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
/**
 * Layout component that includes Header and Footer
 * @returns {JSX.Element} Layout component with Header, Outlet for child routes, and Footer
 */
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

/**
 * Layout component without Header and Footer
 * @returns {JSX.Element} Layout component with just the Outlet for child routes
 */
const BlankLayout = () => {
  return <Outlet />;
};

/**
 * Main App component with routing configuration
 * @returns {JSX.Element} App component with BrowserRouter setup
 */
export default function App() {
  useSmoothScroll();

  return (
    <div className='relative'>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/projects/single-project' element={<ProjectSingle />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
        </Route>

        {/* Routes without Header and Footer */}
        <Route element={<BlankLayout />}>
          <Route path='/projects/:id' element={<ProjectSingle />} />
        </Route>
      </Routes>
    </div>
  );
}
