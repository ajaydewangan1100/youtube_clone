import React, { useContext } from 'react';
import { AppContext } from './context/contextApi'; 

import Root from './components/Root';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Outlet } from "react-router-dom";


// Router created here --------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: 
    <div className='h-full flex justify-center items-center text-red-600'>
      Error on loading...</div>,
    children: [
      {
        index: true,
        element: <Feed />,
        errorElement: 
        <div className='h-full flex justify-center items-center text-red-600'>
          Error on loading Feed...</div>,
      },
      {
        path: "searchResult/:searchquery",
        element: <SearchResult />,
        errorElement: 
        <div className='h-full flex justify-center items-center text-red-600'>
          Error on loading SearchElement...</div>,
      },
      {
        path: "video/:id",
        element: <VideoDetails />,
        errorElement: 
        <div className='h-full flex justify-center items-center text-red-600'>
          Error on loading VideoDetails...</div>,
      },
    ],
  },
]);


// const router = createBrowserRouter([
//   {
//     index: true,
//     element: <Feed />,
//     errorElement: 
//     <div className='h-full flex justify-center items-center text-red-600'>
//       Error on loading Feed...</div>,
//   },
//   {
//     path: "searchresult/:searchquery",
//     element: <SearchResult />,
//     errorElement: 
//     <div className='h-full flex justify-center items-center text-red-600'>
//       Error on loading SearchElement...</div>,
//   },
//   {
//     path: "video/:id",
//     element: <VideoDetails />,
//     errorElement: 
//     <div className='h-full flex justify-center items-center text-red-600'>
//       Error on loading VideoDetails...</div>,
//   },
// ]);


// App component code from heree ------------------
const App = () => {
  return (
    <>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </>
  )
}

export default App;

