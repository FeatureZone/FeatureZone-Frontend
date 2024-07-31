import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './assets/landingPage/landingPage';
import Login from './pages/login';
import Register from './pages/register';
import ProfilePage from './pages/profile';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
