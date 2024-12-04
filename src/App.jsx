import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import ProjectSingle from './Pages/ProjectSingle';
import Contact from './Pages/Contact';
import { Outlet } from 'react-router-dom';

/**
 * Layout component that includes Header and Footer
 * @returns {JSX.Element} Layout component with Header, Outlet for child routes, and Footer
 */
const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

/**
 * Layout component without Header and Footer
 * @returns {JSX.Element} Layout component with just the Outlet for child routes
 */
const BlankLayout = () => {
  return (
    <main className='min-h-screen'>
      <Outlet />
    </main>
  );
};

/**
 * Main App component with routing configuration
 * @returns {JSX.Element} App component with BrowserRouter setup
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/projects/single-project' element={<ProjectSingle />} />
        </Route>

        {/* Routes without Header and Footer */}
        <Route element={<BlankLayout />}>
          <Route path='/projects/:id' element={<ProjectSingle />} />
          {/* Add other routes that don't need header/footer here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
