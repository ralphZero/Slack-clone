import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Room from './components/Room/Room';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/room' component={Room} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
