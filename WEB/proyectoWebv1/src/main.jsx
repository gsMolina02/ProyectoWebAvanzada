import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navegacion from './components/Navegacion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navegacion />
    </BrowserRouter>
  </StrictMode>
);
