import React from 'react';
import { Router } from '@reach/router';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './components/helpers/AuthContext';
import { LoadingProvider } from './components/helpers/LoadingContext';
import PrivateRoute from './components/helpers/PrivateRoute';
import MyPasswords from './components/MyPasswords';
import Logout from './components/helpers/Logout';
import CustomNavbar from './components/helpers/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <CustomNavbar />
        <Router>
          <Home path={'/'} />
          <Signup path={'/signup'} />
          <Login path={'/login'} />
          <Logout path={'/signout'} />
          <PrivateRoute component={MyPasswords} path={'/dashboard'} />
        </Router>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default App;
