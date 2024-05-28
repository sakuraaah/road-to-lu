import MainPage from "./pages/MainPage";
import StartStepPage from "./pages/StartStepPage";

const AppRoutes = [
  {
    index: true,
    element: <MainPage />
  },
  {
    path: '*',
    element: <StartStepPage />
  }
];

export default AppRoutes;