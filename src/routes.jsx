import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Coin from './pages/Coin';
import Favorites from './pages/Favorites';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/coin', element: <Coin /> },
        { path: '/favorites', element: <Favorites /> },
      ],
    },
  ]);
  
  export default router;