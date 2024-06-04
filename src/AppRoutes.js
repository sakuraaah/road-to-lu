import { Navigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import StartStepPage from "./pages/StartStepPage";
import TramStepPage from "./pages/TramStepPage";
import CenterStepPage from "./pages/CenterStepPage";
import LUStepPage from "./pages/LUStepPage";
import ReturnStepPage from "./pages/ReturnStepPage";
import HomeStepPage from "./pages/HomeStepPage";

const AppRoutes = [
  {
    index: true,
    element: <MainPage />
  },
  {
    path: '/start',
    element: <StartStepPage />
  },
  {
    path: '/tram',
    element: <TramStepPage />
  },
  {
    path: '/center',
    element: <CenterStepPage />
  },
  {
    path: '/lu',
    element: <LUStepPage />
  },
  {
    path: '/return',
    element: <ReturnStepPage />
  },
  {
    path: '/home',
    element: <HomeStepPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default AppRoutes;