import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterNavigation from '../routes/RouterNavigation';
import './styles/global.scss';

export default function App() {

  return(
    <>
      <BrowserRouter>
        <RouterNavigation/>
      </BrowserRouter>
    </>
  )
}
