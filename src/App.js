import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JKInteriors from './components/JKInteriors';
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JKInteriors />
      <Footer />
    </div>
  );
};

export default App;
