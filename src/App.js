import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Readme from './component/Readme/Readme';
import NotFound from './component/NotFound/NotFound';
import Quiz from './component/Quiz/Quiz';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/home/:homeId',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`),
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>

        },
        {
          path:'/blog',
          element:<Blog></Blog>

        },
        {
          path:'/readme',
          element:<Readme></Readme>

        },

      ]
      
    },
    {path:"*", 
    element: <NotFound></NotFound>
  },
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
