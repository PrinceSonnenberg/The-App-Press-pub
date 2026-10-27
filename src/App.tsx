import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PartnerProgram from './pages/PartnerProgram';
import Onboarding from './pages/Onboarding';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/partner" element={<PartnerProgram />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}
