import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import MapView from './pages/Map/Map.jsx';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import LogStatus from './pages/LogStatus/LogStatus';
import DataSubscriptionPage from './pages/DataSubcription/DataSubscription.jsx';
import UserSettings from './pages/UserSettings/UserSettings.jsx';
import Subscriptions from './pages/Subscriptions/Subscriptions.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      
      <Route path='' element={<PrivateRoute />}>
         {/* Users routes */}
    <Route exact path="/logstatus" element={<LogStatus/>} />
    <Route exact path="/datasubcription" element={<DataSubscriptionPage/>} />
    <Route exact path="/usersettings" element={<UserSettings/>} />
    <Route exact path="/map/:basemountpoint/*" element={<MapView/>} />
    <Route exact path="/subscriptions" element={<Subscriptions/>} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
