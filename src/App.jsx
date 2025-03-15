import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './component/Body';
import Watch from './component/Watch';
import Feed from './component/Feed';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,  // Body is the layout for these routes
    children: [
      {
        index: true,  // Use 'index' to make this the default child route for '/'
        element: <Feed />,  // This will render Feed for the root route
      },
      {
        path: '/watch',  // This will match the "/watch" route
        element: <Watch />,
      }
    ]
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className='flex'>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
