import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import ChatPage from './components/Chat/ChatPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/chat' component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
