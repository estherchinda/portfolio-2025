import React from 'react';
import Navigation from './components/Navigation'
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';
import OtherTools from './components/OtherTools';

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <div className='pt-[480px] bg-linear-to-r from-[#161A31] to-[#0C0F24]'>
        <RecentProjects/>
        <OtherTools/>
      </div>
    </>
  )
}

export default App