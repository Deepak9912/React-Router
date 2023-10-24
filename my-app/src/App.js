import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import RouteLayout from './pages/Root';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
