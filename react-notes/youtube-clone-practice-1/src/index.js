import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([

    {
      path:'/',
      element:<App/>,
      children: [
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <RouterProvider router={appRouter}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
