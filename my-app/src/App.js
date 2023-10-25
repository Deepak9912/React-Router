import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import RouteLayout from './pages/Root';
import ErrorPage from './pages/Error';
import { Children } from 'react';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetail />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
