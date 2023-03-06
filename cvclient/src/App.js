import React from 'react';
import { Editor, Footer, Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Editor />
      <Footer />
    </div>
  );
}

export default App;
