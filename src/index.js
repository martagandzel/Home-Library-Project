import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import HomePage from './components/pages/HomePage/HomePage';
import AddBookPage from './components/pages/AddBookPage/AddBookPage';
import AuthorsPage from './components/pages/AuthorsPage/AuthorsPage';
import BooksPage from './components/pages/BooksPage/BooksPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/add',
    element: <AddBookPage />
  },
  {
    path: '/authors',
    element: <AuthorsPage />
  }
  ,
  {
    path: '/book/:bookId',
    element: <BooksPage />
  }

])


root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);