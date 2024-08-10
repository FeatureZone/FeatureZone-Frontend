import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landingPage/landingPage';
import DetailedSnippet from './pages/codePage/detailedSnippet';
import CodePage from './pages/codePage/codePage';
import ProfilePage from './pages/profile';

// Example snippet data

const snippets = [
  // Your snippet data here
];

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LandingPage snippets={snippets} />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
// ])

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  {
    path: '/login',
    element: <Login />,
  },

  // Configure the router with all your routes
  // const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage snippets={snippets} />,
  },
  {
    path: '/login',
    element: <Login />,
  },

  // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

  // import LandingPage from './assets/landingPage/landingPage';
  // import Login from './pages/login';
  // import Register from './pages/register';
  // import ProfilePage from './pages/profile';

  // const router = createBrowserRouter([
  //   { path: '/', element: <LandingPage /> },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //   },

  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/code',
    element: <CodePage snippets={snippets} />,
  },
  {
    path: '/code/:id',
    element: <DetailedSnippet snippets={snippets} />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

// Main App component that provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
