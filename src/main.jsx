import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './utils/store.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cardcontainer from './components/cardcontainer.jsx';
import Videoplaying from './components/Videoplaying.jsx';

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path:"/card/:id/:channelid",
    element:<Videoplaying />
  }
  
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <div className=' '>
      <React.StrictMode>
        <RouterProvider router={approuter}/>
      </React.StrictMode>
    </div>
  </Provider>
);
