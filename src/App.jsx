import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landingPage/landingPage';
import DetailedSnippet from './pages/codePage/detailedSnippet';
import CodePage from './pages/codePage/codePage';
import ProfilePage from './pages/profile';
import NotFoundPage from './pages/codePage/notFoundPage';


const snippets = [
  // Your snippet data here
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage snippets={snippets} />,
    errorElement: <NotFoundPage />, 
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/code',
    element: <CodePage snippets={snippets} />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/code/:id',
    element: <DetailedSnippet snippets={snippets} />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',  // Catch-all route for undefined paths
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
