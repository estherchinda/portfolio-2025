import React from 'react';
import Navigation from './components/Navigation'
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';
import OtherTools from './components/OtherTools';
import Experience from './components/Experience';

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <div className='pt-[480px] bg-linear-to-r from-[#161A31] to-[#0C0F24]'>
        <OtherTools />
        <RecentProjects />
        <Experience />
      </div>
    </>
  )
}

export default App