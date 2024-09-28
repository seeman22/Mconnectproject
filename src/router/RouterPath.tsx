import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { UserCheck } from './AuthenticationRouter';
import Login from '../screens/login/Login';
import { NotAllow } from './AuthenticationRouter';
import Nav from '../screens/home/navbar/Nav';
import Dashboard from '../screens/home/dashboard/Dashboard';
import Header from '../screens/home/navbar/HeaderContent';
import { Outlet } from 'react-router-dom';
import FailureReports from '../screens/home/reports/FailureReports';
import  NotificationReport  from '../screens/home/reports/NotificationReport';
import TestDashboard from '../screens/home/dashboard/TestDashboard';



function RouterPath() {
    const router = createBrowserRouter([
        {
          // path: '/',
          element: <UserCheck />,
          children: [
            {
              path: 'login',
              element: <Login/>,
            },
       
           
          ],
        },
       
        {
          path: '/',
          element: 
                <Nav />,
          
          children: [
           
              {
                path: 'dashboard',
                element: <TestDashboard/>
              },
            {
                path:'Failurereport',
                element:<FailureReports/>
              }
           ,{
            path:'notificationreport',
            element:<NotificationReport/>
           }
           
          ],
        }
        
     
      ]);
    

  return (
    <div>

        <RouterProvider router={router}/>

        
    </div>
  )
}

export default RouterPath