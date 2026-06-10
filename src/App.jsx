import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PlaceholderPage from './PlaceholderPage';
import Contact from './Contact';
import MeetTeam from './MeetTeam.jsx';
import WhatWeDo from './WhatWeDo';
import Terms from './Terms';
import Privacy from './Privacy';
import SiteFooter from './components/SiteFooter/SiteFooter';


const App = () => (
  <>
    <Navbar />
    <main className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/Progress" element={<PlaceholderPage title="Progress" />} />
        <Route path="/meet-the-team" element={<MeetTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </main>
    <SiteFooter />
  </>
);

export default App;
