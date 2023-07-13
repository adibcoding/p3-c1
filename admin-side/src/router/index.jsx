import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import AddNews from "../pages/AddNews";
import Register from "../pages/Register";
import Layout from "../pages/Layout";
import LoginView from "../pages/LoginView";
import CategoryView from "../pages/CategoryView";
import AddCategory from "../pages/AddCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader:() => {
      if(!localStorage.getItem('access_token')){
        throw redirect ('/login')
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addNews",
        element: <AddNews />,
      },
      {
        path: "/edit/:id",
        element: <AddNews />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/categories',
        element: <CategoryView />
      },
      {
        path: '/categories/add',
        element: <AddCategory />
      },
      {
        path: '/categories/edit/:id',
        element: <AddCategory />
      }
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
    loader: () => {
      if(localStorage.getItem('access_token')){
        throw redirect ('/')
        
      }
      return null
    }
  }
  
]);

export default router;
