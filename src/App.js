import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// AnimatePresence
import { AnimatePresence } from 'framer-motion'; 
import './App.css';

// COMPONENTS
import { Header } from './components/header/header.component';
import { Hero } from './components/hero/Hero';
import { InfoSection } from './components/infoSection/InfoSection';
import { ToolsGrid } from './components/toolsGrid/ToolsGrid'; 
import { MoreToolsGrid } from './components/moreToolsGrid/MoreToolsGrid';
import { Plugins } from './components/plugins/Plugins';
import { Footer } from './components/footer/Footer';
import { ColorPage } from './components/colorPage/ColorPage';
import { GeneratorPage } from './components/generatorPage/GeneratorPage';
import { LoginComponent as Login } from './components/login.component/login.component';
import { RegistrationComponent as Registration } from './components/registration.component/Registration';
import { LoginOptionsComponent as LoginOptions } from './components/login.component/loginOptions.component';
import AuthLayout from './components/AuthLayout';


const HomePage = () => (
    <>
        <Header />
        <Hero />
        <InfoSection />
        <ToolsGrid />
        <MoreToolsGrid />
        <Plugins />
        <Footer />
    </>
);

const AppRoutes = () => {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/colors/:colorHex" element={<ColorPage />} />
                <Route path="/generator" element={<GeneratorPage />} />
                

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/loginOptions" element={<LoginOptions />} />
                </Route>
            </Routes>

            <AnimatePresence mode="wait">
                {background && (
                  <Routes location={location} key="auth-modal">
                              <Route element={<AuthLayout />}>
                                  <Route path="/login" element={<Login />} />
                                  <Route path="/registration" element={<Registration />} />
                                  <Route path="/loginOptions" element={<LoginOptions />} />
                              </Route>
                          </Routes>
                      )}
                  </AnimatePresence>
        </>
    );
};

function App() {
  return (
    <Router>
      <div className="App">
         <AppRoutes />
      </div>
    </Router>
  );
}

export default App;