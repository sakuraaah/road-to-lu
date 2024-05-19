import MainPage from "./pages/MainPage";
import StepPage from "./pages/StepPage";

const AppRoutes = [
  {
    index: true,
    element: <MainPage />
  },
  {
    path: '*',
    element: <StepPage />
  }
];

export default AppRoutes;