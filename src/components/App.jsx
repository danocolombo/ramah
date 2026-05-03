import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './ui/header';
import Footer from './ui/footer';
import theme from './ui/theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import EngineeringPage from './EngineeringPage';
import CustomSoftwarePage from './CustomSoftwarePage';
import EnterprisePage from './EnterprisePage';
import RecoveryPage from './RecoveryPage';
import HobbiesPage from './HobbiesPage';
import AWS from './AWSPage';
import Contact from './contactme';
import NotFoundPage from './NotFoundPage';
import P8Rally from './P8ProjectPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/p8RallyProject'
            element={
              <P8Rally
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/customsoftware'
            element={
              <CustomSoftwarePage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/engineering'
            element={
              <EngineeringPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/enterprise'
            element={
              <EnterprisePage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/recovery'
            element={
              <RecoveryPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/hobbies'
            element={
              <HobbiesPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/aws'
            element={
              <AWS
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/contact'
            element={
              <Contact
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path='/integrations'
            element={<div>Integrations</div>}
          />
          <Route path='/cr' element={<div>Celebrate Recovery</div>} />
          <Route path='/woodshop' element={<div>Woodshop</div>} />
          <Route path='/kitchen' element={<div>Kitchen</div>} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
