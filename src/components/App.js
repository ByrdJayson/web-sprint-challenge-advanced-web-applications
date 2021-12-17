import React, {useState} from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import View from './View';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';
const App = () => {

    const [ loggedIn, setLoggedIn ] = useState();

  return (
    <AppContainer>
      <BloomHeader/>
      <Header loggedIn={loggedIn}/>
      <RouteContainer>
        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path={'/login'}>
            <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <PrivateRoute path={'/view'} component={View} />
        <PrivateRoute path={'/logout'} component={Logout}/>
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
