import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import ChatPage from './components/Chat/ChatPage';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/chat' component={ChatPage} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
