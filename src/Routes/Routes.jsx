import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { Home } from '../Pages/Home';
import { KcalCalculator } from '../Pages/KcalCalculator'; // Importación por defecto
import {RmCalculator} from '../Pages/RmCalculator';
import ContactPage from '../Pages/ContactPage';
import CalculatorSelection from '../Pages/CalculatorSelection';
import TermsConditions from '../Pages/TermsConditions';
import Politics from '../Pages/Politics';
import AboutUs from '../Pages/AboutUs/AboutUs';
import FaqsPage from '../Pages/FaqsPage';
import NotFound from '../Pages/NotFound';
import MorePage from '../Pages/MorePage';
/* import AppAds from '../../app-ads.txt'; */

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calculadoras/CalculadoraKcal",
        element: <KcalCalculator />,
      },
      {
        path: "/calculadoras/CalculadoraRm",
        element: <RmCalculator />,
      },
      {
        path: "/contacto",
        element: <ContactPage />,
      },
      {
        path: "/calculadoras",
        element: <CalculatorSelection />,
      },
      {
        path: "/terminosycondiciones",
        element: <TermsConditions />,
      },
      {
        path: "/politicas",
        element: <Politics />,
      },
      {
        path: "/SobreNosotros",
        element: <AboutUs />,
      },
      {
        path: "/FAQs",
        element: <FaqsPage />,
      },
      {
        path: "/Mas",
        element: <MorePage />,
      },
      {
        path: "/app-ads.txt",
        element: <AppAds />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);


export default router;
